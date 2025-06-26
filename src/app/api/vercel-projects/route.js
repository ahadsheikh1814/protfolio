import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    if (!process.env.VERCEL_TOKEN) {
      console.error('VERCEL_TOKEN is not set in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing VERCEL_TOKEN' },
        { status: 500 }
      );
    }

    // Fetch all projects
    const projectsResponse = await axios.get('https://api.vercel.com/v9/projects', {
      headers: { Authorization: `Bearer ${process.env.VERCEL_TOKEN}` },
    }).catch(err => {
      throw new Error(`Failed to fetch projects: ${err.message}, status: ${err.response?.status}`);
    });

    // For each project, fetch the latest production deployment
    const projects = await Promise.all(
      projectsResponse.data.projects.map(async (project) => {
        try {
          // Fetch deployments for the project
          const deploymentsResponse = await axios.get(
            `https://api.vercel.com/v13/deployments?projectId=${project.id}&limit=1&target=production`,
            {
              headers: { Authorization: `Bearer ${process.env.V_TOKEN}` },
            }
          ).catch(err => {
            throw new Error(`Failed to fetch deployments for ${project.name}: ${err.message}`);
          });

          // Get the first deployment's URL (latest production deployment)
          const deployment = deploymentsResponse.data.deployments[0];
          // Prioritize custom domain, alias, or deployment URL
          const publicUrl =
            deployment?.domains?.[0] || // Custom domain
            (deployment?.alias?.length > 0 ? `https://${deployment.alias[0]}` : null) || // Vercel alias
            (deployment?.url ? `https://${deployment.url}` : null); // Deployment URL

          return {
            id: project.id,
            name: project.name,
            publicUrl,
            deploymentDetails: deployment ? { url: deployment.url, alias: deployment.alias, domains: deployment.domains } : null,
          };
        } catch (err) {
          console.error(`Error processing project ${project.name}:`, err.message);
          return {
            id: project.id,
            name: project.name,
            publicUrl: null,
            deploymentDetails: null,
            error: err.message,
          };
        }
      })
    );

    console.log('Vercel Projects Response:', JSON.stringify(projects, null, 2));
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error in /api/vercel-projects:', error.message, error.stack);
    return NextResponse.json(
      { error: `Failed to fetch Vercel projects: ${error.message}` },
      { status: 500 }
    );
  }
}
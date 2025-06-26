// /app/api/projects/route.js

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const projectRes = await fetch('https://api.vercel.com/v9/projects', {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
    });

    if (!projectRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch projects' }, { status: projectRes.status });
    }

    const { projects } = await projectRes.json();

    const enrichedProjects = await Promise.all(
      projects.map(async (project) => {
        try {
          const deploymentRes = await fetch(
            `https://api.vercel.com/v6/deployments?projectId=${project.id}&limit=1`,
            {
              headers: {
                Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
              },
            }
          );

          const { deployments } = await deploymentRes.json();

          return {
            ...project,
            latestDeploymentUrl: deployments?.[0]?.url || null,
          };
        } catch {
          return {
            ...project,
            latestDeploymentUrl: null,
          };
        }
      })
    );

    return NextResponse.json({ projects: enrichedProjects });
  } catch (error) {
    console.error('Vercel API Error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

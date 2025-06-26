"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [vercelProjects, setVercelProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch GitHub repositories
        const githubResponse = await axios.get('https://api.github.com/users/ahadsheikh1814/repos', {
          headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
        }).catch(err => {
          throw new Error(`GitHub API error: ${err.message}`);
        });
        setGithubRepos(githubResponse.data);

        // Fetch Vercel projects
        const vercelResponse = await axios.get('/api/vercel-projects').catch(err => {
          throw new Error(`Vercel API error: ${err.response?.data?.error || err.message}`);
        });
        console.log('Vercel API Response:', JSON.stringify(vercelResponse.data, null, 2));
        setVercelProjects(vercelResponse.data);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err.message, err.stack);
        setError(`Failed to fetch projects: ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Manual URL mapping for Vercel projects (fallback)
  const vercelUrlMap = {
    'sushi': 'https://sushi-plum.vercel.app/', // Update with actual URL if different
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] min-h-[calc(100vh-5rem)] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] mb-8 sm:mb-12 animate-fadeIn [animation-duration:1s]">
          My Projects
        </h1>

        {loading && (
          <p className="text-center text-gray-400 text-lg animate-pulse">Loading projects...</p>
        )}
        {error && (
          <p className="text-center text-red-400 text-lg animate-fadeIn [animation-duration:0.5s]">{error}</p>
        )}

        {/* GitHub Repositories */}
        {!loading && !error && githubRepos.length > 0 && (
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6 animate-slideInUp [animation-duration:0.8s]">
              GitHub Repositories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {githubRepos.map((repo, index) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-none focus:ring-2 focus:ring-[#7dd3fc]/50 rounded-xl"
                  aria-label={`View ${repo.name} on GitHub`}
                >
                  <motion.div
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    variants={cardVariants}
                    className="relative bg-[#1a1a1a]/80 rounded-xl p-6 shadow-[0_4px_14px_rgba(125,211,252,0.2)] hover:shadow-[0_6px_20px_rgba(125,211,252,0.4)] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#c5e5e4]/10 to-[#7dd3fc]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">{repo.name}</h3>
                    <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                      {repo.description || 'No description available.'}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs text-gray-500">Language:</span>
                      <span className="text-xs font-medium text-[#7dd3fc]">
                        {repo.language || 'Unknown'}
                      </span>
                    </div>
                    <div
                      className="relative group/button inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] hover:from-[#7dd3fc] hover:to-[#c5e5e4] text-[#0a0a0a] font-semibold rounded-full shadow-[0_4px_14px_rgba(125,211,252,0.3)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(125,211,252,0.5)] hover:scale-105 active:scale-95 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/button:w-[150px] group-hover/button:h-[150px]" />
                      <span className="relative z-10">View on GitHub</span>
                      <svg
                        className="relative w-4 h-4 fill-current z-10 transition-transform duration-500 group-hover/button:translate-x-1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                      </svg>
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* Vercel Projects */}
        {!loading && !error && vercelProjects.length > 0 && (
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6 mt-12 animate-slideInUp [animation-duration:0.8s]">
              Vercel Deployments
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {vercelProjects.map((project, index) => {
                const publicUrl = vercelUrlMap[project.name] || project.publicUrl;
                return (
                  <a
                    key={project.id}
                    href={publicUrl || '#'}
                    onClick={(e) => !publicUrl && e.preventDefault()}
                    className={`block focus:outline-none focus:ring-2 focus:ring-[#7dd3fc]/50 rounded-xl ${!publicUrl ? 'cursor-not-allowed' : ''}`}
                    aria-label={`View ${project.name} live deployment`}
                  >
                    <motion.div
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={cardVariants}
                      className={`relative bg-[#1a1a1a]/80 rounded-xl p-6 shadow-[0_4px_14px_rgba(125,211,252,0.2)] transition-all duration-300 group ${publicUrl ? 'hover:shadow-[0_6px_20px_rgba(125,211,252,0.4)] cursor-pointer' : 'opacity-60'}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#c5e5e4]/10 to-[#7dd3fc]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img
                        src="/placeholder-project.jpg"
                        alt={project.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        onError={(e) => (e.target.src = 'https://placehold.co/300x150?text=Project+Image')}
                        loading="lazy"
                      />
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-2">{project.name}</h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                        {project.error ? `Error: ${project.error}` : 'Deployed project on Vercel'}
                      </p>
                      <div
                        className={`relative group/button inline-flex items-center gap-2 px-5 py-2.5 text-[#0a0a0a] font-semibold rounded-full shadow-[0_4px_14px_rgba(125,211,252,0.3)] transition-all duration-300 text-sm ${publicUrl ? 'bg-gradient-to-r from-[#c5e5e4] to-[#7dd3fc] hover:from-[#7dd3fc] hover:to-[#c5e5e4] hover:shadow-[0_6px_20px_rgba(125,211,252,0.5)] hover:scale-105 active:scale-95' : 'bg-gray-600 cursor-not-allowed opacity-50'}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/20 rounded-full transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/button:w-[150px] group-hover/button:h-[150px]" />
                        <span className="relative z-10">
                          {publicUrl ? 'View Live' : 'No Live Deployment'}
                        </span>
                        {publicUrl && (
                          <svg
                            className="relative w-4 h-4 fill-current z-10 transition-transform duration-500 group-hover/button:translate-x-1"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" />
                          </svg>
                        )}
                      </div>
                    </motion.div>
                  </a>
                );
              })}
            </div>
          </>
        )}

        {/* No Projects Fallback */}
        {!loading && !error && githubRepos.length === 0 && vercelProjects.length === 0 && (
          <p className="text-center text-gray-400 text-lg animate-fadeIn [animation-duration:0.5s]">
            No projects found. Check your API tokens or repository settings.
          </p>
        )}

        {/* Decorative floating elements */}
        <div className="absolute -top-6 -left-6 w-10 h-10 bg-[#c5e5e4]/10 rounded-full animate-float [animation-duration:3s]" />
        <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-[#7dd3fc]/10 rounded-full animate-float [animation-duration:4s] [animation-delay:1s]" />

        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-fadeIn {
            animation: fadeIn forwards ease-out;
          }
          .animate-slideInUp {
            animation: slideInUp forwards ease-out;
          }
          .animate-float {
            animation: float infinite ease-in-out;
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ProjectsPage;
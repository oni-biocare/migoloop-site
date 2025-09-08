/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

// if (isGithubActions) {
//   // Extract repository name from GITHUB_REPOSITORY (format: owner/repo)
//   const repo = "onibiocare-site";
//   assetPrefix = `/${repo}/`;
//   basePath = `/${repo}`;
// } else {
//   // For local development or other deployments, you might want to set these differently
//   // If deploying to a custom domain, leave these empty
//   assetPrefix = '';
//   basePath = '';
// }

const nextConfig = {
  output: 'export',
    // Configure images for static export
    images: {
      unoptimized: true,
      domains: [
        'localhost', 
        'localhost:3000', 
        'media.licdn.com', 
        'migoloop.com',
        'oni-biocare.github.io'
      ],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
        {
          protocol: 'http',
          hostname: '**',
        },
      ],
    },
    
    // Metadata configuration for SEO
    env: {
      siteUrl: 'https://migoloop.com',
      siteName: 'Migoloop',
      siteDescription: 'Software Consulting & Development',
      locale: 'en_US',
      basePath: basePath, // Make basePath available in environment
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  
    // Enable trailing slash
    trailingSlash: true,
  
    // Prevent automatic redirect for trailing slash
    skipTrailingSlashRedirect: true,
  
    // Change the output directory to 'dist'
    distDir: 'dist',
  }
  

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static HTML for maximum performance
  // Remove this if you add API routes or server components later
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

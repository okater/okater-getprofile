/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is now enabled by default in Next.js 13+
  outputFileTracingRoot: __dirname,
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['react-icons', 'react-slick'],
  },
  
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 75, 80, 85, 90, 95, 100],
  },
  
  // Bundle analyzer for development
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Reduce bundle size by removing unused dependencies
    config.resolve.alias = {
      ...config.resolve.alias,
      // Reduce lodash bundle size
      'lodash': 'lodash-es',
    };
    
    // Tree shake unused code
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-icons/lib': 'react-icons/lib/esm',
      };
    }
    
    return config;
  },
  
  async exportPathMap() {
    return {
      '/': { page: '/' },
      // '/contact': { page: '/contact' },
      // Exclude dynamic pages that use getServerSideProps
      // '/blog/[id]': excluded
      // '/works/[id]': excluded
    }
  },
  
  sassOptions: {
    silenceDeprecations: ['legacy-js-api', 'import'],
  },
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
}

module.exports = nextConfig

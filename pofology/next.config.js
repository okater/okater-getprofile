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
    optimizePackageImports: ['react-icons', 'react-slick', '@headlessui/react'],
    scrollRestoration: true,
  },
  
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 75, 80, 85, 90, 95, 100],
  },
  
  // Bundle analyzer and optimization
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Reduce bundle size by removing unused dependencies
    config.resolve.alias = {
      ...config.resolve.alias,
      // Reduce lodash bundle size
      'lodash': 'lodash-es',
    };
    
      // Tree shake unused code and use modern ES modules
      if (!dev && !isServer) {
        config.resolve.alias = {
          ...config.resolve.alias,
          'react-icons/lib': 'react-icons/lib/esm',
        };
        
        // Remove unused CSS and JS, optimize for modern browsers
        config.optimization.usedExports = true;
        config.optimization.sideEffects = false;
        
        // Target modern browsers only
        config.target = 'web';
        config.resolve.mainFields = ['browser', 'module', 'main'];
        
        // Enable modern JavaScript features
        config.experiments = {
          ...config.experiments,
          topLevelAwait: true,
        };      // Optimize chunks
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        chunks: 'all',
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          icons: {
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            name: 'icons',
            chunks: 'all',
            priority: 10,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 5,
          },
        },
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

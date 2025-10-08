/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is now enabled by default in Next.js 13+
  outputFileTracingRoot: __dirname,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
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

/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
// 	dest: "public",
// 	register: true,
// 	skipWaiting: true,
// 	disable: process.env.NODE_ENV === "development",
// 	sw: "service-worker.js",
// 	scope: this.basePath,
// });

const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === 'development'
  },
  transpilePackages: [
    'application',
    'components',
    'eslint-config-custom',
    'test-config',
    'theme',
    'tsconfig'
  ],
  // basePath: "/imWelllucky",
  images: {
    path: '/public/images/',
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840]
  },
  experimental: {
    serverComponentsExternalPackages: ['theme']
  }
}

module.exports = nextConfig
// module.exports = withPWA({ ...nextConfig });

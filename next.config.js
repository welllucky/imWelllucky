/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "development" ? true : false,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  images: {
    path: "/public/images/",
    deviceSizes: [320, 420, 768, 1024, 1200, 1920, 2048, 3840],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    API_URL: process.env.API_URL,
  },
  optimizeFonts: true,
};

const witchPWA = require("next-pwa")({
  dest: "public",
  disable: false,
  // disable: process.env.NODE_ENV === "development",
  register: true,
  scope: this.basePath,
  sw: "./public/sw.js",
});

module.exports = witchPWA(nextConfig);

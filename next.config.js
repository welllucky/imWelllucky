/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
    removeConsole: true,
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
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: this.basePath,
  sw: "sw.js",
});

module.exports = witchPWA(nextConfig);

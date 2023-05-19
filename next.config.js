/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const witchPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  sw: 'sw.js',
  //...
})

module.exports = witchPWA({
  nextConfig
})

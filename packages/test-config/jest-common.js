/** @type {import('jest').Config} */
module.exports = {
  resetMocks: true,
  moduleDirectories: ['node_modules'],
  transformIgnorePatterns: [
    'node_modules/(?!(swiper|ssr-window|dom7)/)',
    '^.+\\.module\\.(css|sass|scss)$'
  ]
}

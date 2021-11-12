const externalReact = require('webpack-external-react');

const nextConfig = {
 /*  webpack: (config) => {
    config.externals = externalReact.externals
    return config
  }, */
  experimental: {
    urlImports: ['http://localhost:1337/uploads'],
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig

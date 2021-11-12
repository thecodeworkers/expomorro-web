const nextConfig = {

  experimental: {
    urlImports: ['http://localhost:1337/uploads'],
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig

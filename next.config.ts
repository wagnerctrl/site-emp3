const nextConfig = {
  images: {
    domains: ['aceternity.com', 'images.unsplash.com'], // Adicione todos os domínios usados
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Outras configurações...
}

module.exports = nextConfig
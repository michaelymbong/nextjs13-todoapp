/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['bcrypt'],
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  redirects: () => [
    {
      source: '/',
      destination: '/home',
      permanent: false,
    },
  ],
}

module.exports = nextConfig

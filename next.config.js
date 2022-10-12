/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: process.env.NEXT_PUBLIC_GRAPHQL_URL,
      },
    ]
  },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'via.placeholder.com',
      'images.unsplash.com',
      'fakestoreapi.com',
      'i.imgur.com',
      'unsplash.com'
    ],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const compiler = {
  styledComponents: {
    displayName: true,
    ssr: true,
  },
}

module.exports = { ...nextConfig, compiler }

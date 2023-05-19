/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    protocols: ["http", "https"],
    domains: ["shabazzportraits.s3.eu-central-1.amazonaws.com"],
  },
};

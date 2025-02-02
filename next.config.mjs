/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],  // Correct way to add allowed image domains
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/thjxie6p/production/**",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

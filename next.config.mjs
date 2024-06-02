/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.britannica.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

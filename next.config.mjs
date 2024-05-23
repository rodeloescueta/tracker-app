/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/article",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

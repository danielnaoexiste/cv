/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/en",
        destination: "/",
      },
      {
        source: "/pt",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;

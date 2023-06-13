/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    DB_URI:
      "mongodb+srv://haroon:hak123@cluster0.qoxww.mongodb.net/MarketPlace?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "dontcare",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "example.com"], // 必要に応じて画像のドメインを追加
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

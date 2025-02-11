/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "example.com"],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  transpilePackages: ['@emotion/react'],
  compiler: {
    emotion: true
  }
}

module.exports = nextConfig

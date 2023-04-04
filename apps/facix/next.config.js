const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: false });

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  optimizeFonts: true,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/:all*(webp|svg|jpg|png|woff2|js|css|json)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, must-revalidate"
          }
        ]
      }
    ];
  }
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js"
});

module.exports = withPWA(withBundleAnalyzer(nextConfig));

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Có package-lock.json lạc ở thư mục home, chỉ rõ gốc dự án để Turbopack không suy đoán sai
  turbopack: { root: __dirname },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;

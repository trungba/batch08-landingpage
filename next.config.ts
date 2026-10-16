import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Có package-lock.json lạc ở thư mục home, chỉ rõ gốc dự án để Turbopack không suy đoán sai
  turbopack: { root: __dirname },
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;

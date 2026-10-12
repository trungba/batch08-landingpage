import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "animate.css";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cups Coffee — Khóa học Barista Chuyên Nghiệp",
  description:
    "Khóa học Barista Chuyên Nghiệp 8 tuần tại The Cups Coffee: từ hạt cà phê đến ly latte art hoàn hảo, có chứng chỉ và hỗ trợ việc làm.",
  icons: { icon: "/logo.jpeg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="bg-cream-50 font-sans text-espresso-900 antialiased">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { course, faqs, plans, unsplash } from "@/lib/content";
import "./globals.css";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});

const title = "Khóa học Barista Chuyên Nghiệp 8 tuần — The Cups Academy";
const description = `Khai giảng ${course.cohort} ngày ${course.startLabel}. 80% thực hành trên máy Espresso thương mại, lớp tối đa ${course.classSize} người, chứng chỉ và giới thiệu việc làm. Ưu đãi -${course.discount}% cho ${course.seatsTotal} học viên đầu tiên.`;

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/logo.jpeg" },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "vi_VN",
    siteName: "The Cups Academy",
    images: [{ url: unsplash("1541167760496-1628856ab772", 1200), width: 1200, height: 800, alt: "Barista rót Latte art" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#22150e" };

// Dữ liệu có cấu trúc giúp Google hiện giá và FAQ ngay trên kết quả tìm kiếm
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Barista Chuyên Nghiệp",
    description,
    inLanguage: "vi",
    provider: { "@type": "Organization", name: "The Cups Coffee" },
    offers: plans.map((p) => ({ "@type": "Offer", name: p.name, price: p.price, priceCurrency: "VND", category: "Paid" })),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      startDate: course.startDate.slice(0, 10),
      courseWorkload: `PT${course.hours}H`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable} suppressHydrationWarning>
      <head>
        {/* Gắn sớm để hiệu ứng hiện dần chỉ áp dụng khi JS chạy được */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="bg-cream-50 font-sans text-espresso-900 antialiased">{children}</body>
    </html>
  );
}

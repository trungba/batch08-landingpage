import Image from "next/image";
import { Clock, Mail, MapPin, Music2, Phone } from "lucide-react";
import { contact } from "@/lib/content";
import { NewsletterForm } from "@/components/newsletter-form";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/social-icons";

const socials = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "YouTube", Icon: YoutubeIcon },
  { label: "TikTok", Icon: Music2 },
];

const courseLinks = [
  { href: "#solution", label: "Barista Chuyên Nghiệp" },
  { href: "#curriculum", label: "Lộ trình học" },
  { href: "#pricing", label: "Học phí" },
  { href: "#faq", label: "Câu hỏi thường gặp" },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-coffee-950 text-coffee-100">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="The Cups Coffee" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <span className="text-lg font-bold text-white">The Cups Academy</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-coffee-200/80">
            Học viện đào tạo barista của The Cups Coffee. Chúng tôi tin rằng ai cũng có thể pha một ly cà phê tuyệt vời.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-coffee-600">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-semibold text-white">Khóa học</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {courseLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-semibold text-white">Liên hệ</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-5 w-5 shrink-0 text-coffee-300" /> {contact.address}</li>
            <li className="flex gap-2"><Phone className="h-5 w-5 shrink-0 text-coffee-300" /> <a href={`tel:${contact.tel}`} className="hover:text-white">{contact.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-5 w-5 shrink-0 text-coffee-300" /> <a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
            <li className="flex gap-2"><Clock className="h-5 w-5 shrink-0 text-coffee-300" /> {contact.hours}</li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-semibold text-white">Nhận bản tin</h4>
          <p className="mt-4 text-sm text-coffee-200/80">Công thức mới, lịch khai giảng và ưu đãi dành riêng cho bạn mỗi tháng.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-coffee-300 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 The Cups Coffee. Bảo lưu mọi quyền.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white">Điều khoản</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

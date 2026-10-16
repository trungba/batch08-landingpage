import Image from "next/image";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, course, navLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-espresso-900 text-coffee-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="The Cups Coffee" width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
            <span className="text-lg font-bold text-white">The Cups Academy</span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-coffee-200/80">
            Học viện đào tạo barista của The Cups Coffee. Chúng tôi tin rằng ai cũng có thể pha một ly cà phê tuyệt vời.
          </p>
        </div>

        <nav className="lg:col-span-2" aria-label="Liên kết chân trang">
          <h4 className="font-semibold text-white">Khám phá</h4>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

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
          <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="text-sm text-coffee-200">Khóa {course.cohort} · khai giảng {course.startLabel}</p>
            <p className="mt-1 text-lg font-bold text-white">Còn {course.seatsLeft} suất ưu đãi -{course.discount}%</p>
            <a href="#register" className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-caramel-400 py-3 font-bold text-espresso-900 transition hover:bg-caramel-300">
              Giữ chỗ ngay <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-coffee-300 sm:px-6 sm:text-left lg:px-8">© 2026 The Cups Coffee. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
}

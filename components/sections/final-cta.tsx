import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { contact, unsplash } from "@/lib/content";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image src={unsplash("1501339847302-ac426a4a7cbb", 1800)} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-coffee-950/95 via-coffee-900/85 to-espresso-900/80" />
      <div className="reveal relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6" data-anim="zoomIn">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">Ly cà phê ngon nhất là ly do chính bạn pha</h2>
        <p className="mt-5 text-lg text-coffee-100">
          Khóa K12 khai giảng 09/11/2026 và chỉ còn <strong className="text-caramel-400">8 suất</strong> ưu đãi -30%.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <a href="#register" className="animate__animated animate__pulse animate__infinite animate__slow inline-flex items-center justify-center gap-2 rounded-full bg-caramel-400 px-8 py-4 font-semibold text-espresso-900 transition hover:bg-caramel-500">
            Giữ chỗ ngay <ArrowRight className="h-5 w-5" />
          </a>
          <a href={`tel:${contact.tel}`} className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold ring-1 ring-white/40 transition hover:bg-white/10">
            <Phone className="h-5 w-5" /> Gọi tư vấn {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

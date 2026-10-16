import { Phone } from "lucide-react";
import { contact } from "@/lib/content";
import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";

export function Faq() {
  return (
    <section id="faq" className="py-16 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <FaqList />
        <p className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-espresso-700" data-anim="fade">
          Còn thắc mắc khác?
          <a href={`tel:${contact.tel}`} className="inline-flex items-center gap-1.5 font-semibold text-coffee-700 underline underline-offset-4">
            <Phone className="h-4 w-4" /> Gọi tư vấn {contact.phone}
          </a>
        </p>
      </div>
    </section>
  );
}

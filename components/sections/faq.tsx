import { FaqList } from "@/components/faq-list";
import { SectionHeading } from "@/components/section-heading";

export function Faq() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow="FAQ" title="Câu hỏi thường gặp" />
        <FaqList />
        <p className="reveal mt-10 text-center text-espresso-700" data-anim="fadeIn">
          Còn thắc mắc?{" "}
          <a href="#footer" className="font-semibold text-coffee-700 underline underline-offset-4">Liên hệ đội ngũ tư vấn</a>
        </p>
      </div>
    </section>
  );
}

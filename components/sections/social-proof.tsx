import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { partners, stats, testimonials, unsplash } from "@/lib/content";
import { delay } from "@/lib/motion";
import { Counter } from "@/components/counter";
import { SectionHeading } from "@/components/section-heading";

export function SocialProof() {
  return (
    <section id="testimonials" className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal rounded-3xl bg-coffee-50 p-5 text-center sm:p-6" style={delay(i)}>
              <p className="text-3xl font-extrabold text-coffee-700 tabular-nums sm:text-4xl">
                {s.static ? s.value : <Counter target={s.value} />}
                <span className={s.static ? "text-xl sm:text-2xl" : undefined}>{s.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-espresso-700 sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20">
          <SectionHeading eyebrow="Học viên nói gì" title="Câu chuyện từ quầy bar" />
        </div>
        {/* Mobile: vuốt ngang; từ md trở lên: lưới 3 cột */}
        <div className="reveal no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mt-12 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={`flex w-[85%] shrink-0 snap-center flex-col rounded-3xl p-6 sm:p-8 md:w-auto ${t.featured ? "bg-coffee-900 text-white" : "bg-white ring-1 ring-coffee-100"}`}
            >
              <div className="flex items-center justify-between">
                <Quote className={`h-8 w-8 ${t.featured ? "text-caramel-400" : "text-coffee-300"}`} />
                <span className="flex gap-0.5 text-caramel-400" aria-label="5 sao">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
              <blockquote className={`mt-4 flex-1 ${t.featured ? "text-coffee-100" : "text-espresso-800"}`}>“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image src={unsplash(t.avatar, 96)} alt="" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className={`text-sm ${t.featured ? "text-coffee-200" : "text-espresso-700"}`}>{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-espresso-700/60 md:hidden">Vuốt ngang để xem thêm →</p>

        <div className="reveal mt-16 sm:mt-20" data-anim="fade">
          <p className="text-center text-sm font-semibold tracking-widest text-espresso-700/70 uppercase">Học viên đang làm việc tại</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-espresso-700/60 sm:mt-8 sm:gap-x-10 sm:gap-y-6">
            {partners.map(({ icon: Icon, name }) => (
              <span key={name} className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight transition hover:text-coffee-700 sm:text-xl">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" /> {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

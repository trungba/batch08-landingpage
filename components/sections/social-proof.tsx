import Image from "next/image";
import { Quote } from "lucide-react";
import { partners, stats, testimonials, unsplash } from "@/lib/content";
import { Counter } from "@/components/counter";
import { SectionHeading } from "@/components/section-heading";

export function SocialProof() {
  return (
    <section id="testimonials" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal rounded-3xl bg-coffee-50 p-6 text-center" data-anim="fadeInUp" data-delay={i}>
              <p className="text-4xl font-extrabold text-coffee-700">
                {s.static ? s.value : <Counter target={s.value} />}
                <span className={s.static ? "text-2xl" : undefined}>{s.suffix}</span>
              </p>
              <p className="mt-1 text-espresso-700">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeading eyebrow="Học viên nói gì" title="Câu chuyện từ quầy bar" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`reveal flex flex-col rounded-3xl p-8 ${t.featured ? "bg-coffee-900 text-white" : "bg-white ring-1 ring-coffee-100"}`}
              data-anim="fadeInUp"
              data-delay={i}
            >
              <Quote className={`h-8 w-8 ${t.featured ? "text-caramel-400" : "text-coffee-300"}`} />
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

        <div className="reveal mt-20" data-anim="fadeIn">
          <p className="text-center text-sm font-semibold tracking-widest text-espresso-700/70 uppercase">Học viên đang làm việc tại</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-espresso-700/60">
            {partners.map(({ icon: Icon, name }) => (
              <span key={name} className="inline-flex items-center gap-2 text-xl font-extrabold tracking-tight transition hover:text-coffee-700">
                <Icon className="h-6 w-6" /> {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

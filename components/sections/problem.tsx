import { problems } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

export function Problem() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Bạn có đang gặp những điều này?" title="Yêu cà phê thôi chưa đủ để pha một ly ngon" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, tone, title, text }, i) => (
            <article key={title} className="reveal rounded-3xl bg-white p-7 ring-1 ring-coffee-100 transition hover:-translate-y-1 hover:shadow-xl" data-anim="fadeInUp" data-delay={i}>
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${tone}`}>
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-espresso-700">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { problems } from "@/lib/content";
import { delay } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";

export function Problem() {
  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Bạn có đang gặp những điều này?" title="Yêu cà phê thôi chưa đủ để pha một ly ngon" />
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {problems.map(({ icon: Icon, tone, title, text }, i) => (
            <article
              key={title}
              className="reveal flex gap-4 rounded-3xl bg-white p-5 ring-1 ring-coffee-100 transition hover:-translate-y-1 hover:shadow-xl sm:block sm:p-7"
              style={delay(i)}
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl sm:h-12 sm:w-12 ${tone}`}>
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-bold sm:mt-5 sm:text-lg">{title}</h3>
                <p className="mt-1 text-sm text-espresso-700 sm:mt-2 sm:text-base">{text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="reveal mt-10 text-center text-lg font-semibold text-coffee-700" data-anim="fade">
          Nếu bạn gật đầu ít nhất một lần, khóa học này được thiết kế cho bạn.
        </p>
      </div>
    </section>
  );
}

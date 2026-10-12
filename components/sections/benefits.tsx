import { benefits } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

const variants = {
  dark: { card: "bg-coffee-900 text-white", icon: "text-caramel-400", text: "text-coffee-100/90" },
  light: { card: "bg-white ring-1 ring-coffee-100", icon: "text-coffee-600", text: "text-espresso-700" },
  accent: { card: "bg-caramel-400 text-espresso-900", icon: "", text: "text-espresso-800" },
};

export function Benefits() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Bạn nhận được gì" title="5 thay đổi rõ ràng sau 8 tuần" />
        <div className="mt-14 grid gap-6 md:grid-cols-6">
          {benefits.map(({ icon: Icon, title, text, variant, span }, i) => {
            const v = variants[variant];
            return (
              <div key={title} className={`reveal rounded-3xl p-8 ${span} ${v.card}`} data-anim="fadeInUp" data-delay={i % 3}>
                <Icon className={`h-8 w-8 ${v.icon}`} />
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className={`mt-2 ${v.text}`}>{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

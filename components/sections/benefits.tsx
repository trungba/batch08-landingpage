import { benefits } from "@/lib/content";
import { delay } from "@/lib/motion";
import { SectionHeading } from "@/components/section-heading";

const variants = {
  dark: { card: "bg-coffee-900 text-white", icon: "text-caramel-400", text: "text-coffee-100/90" },
  light: { card: "bg-white ring-1 ring-coffee-100", icon: "text-coffee-600", text: "text-espresso-700" },
  accent: { card: "bg-caramel-400 text-espresso-900", icon: "", text: "text-espresso-800" },
};

export function Benefits() {
  return (
    <section className="py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Bạn nhận được gì" title="5 thay đổi rõ ràng sau 8 tuần" />
        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-6 md:grid-cols-6">
          {benefits.map(({ icon: Icon, title, text, variant, span }, i) => {
            const v = variants[variant];
            return (
              <div key={title} className={`reveal flex gap-4 rounded-3xl p-5 sm:block sm:p-8 ${span} ${v.card}`} style={delay(i % 3)}>
                <Icon className={`h-7 w-7 shrink-0 sm:h-8 sm:w-8 ${v.icon}`} />
                <div>
                  <h3 className="font-bold sm:mt-5 sm:text-xl">{title}</h3>
                  <p className={`mt-1 text-sm sm:mt-2 sm:text-base ${v.text}`}>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

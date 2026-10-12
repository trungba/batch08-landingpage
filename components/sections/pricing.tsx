import { Check, ShieldCheck, X } from "lucide-react";
import { plans, valueRows } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";

function ValueCell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-4 w-4 text-coffee-600" aria-label="Có" />;
  if (value === false) return <X className="h-4 w-4 text-rose-500" aria-label="Không" />;
  return <>{value}</>;
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-coffee-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Học phí" title="Chọn gói phù hợp với mục tiêu của bạn" text="Ưu đãi giảm 30% cho 20 học viên đăng ký sớm khóa K12." />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 ${p.featured ? "bg-coffee-900 text-white shadow-2xl shadow-coffee-900/30 lg:-translate-y-4" : "bg-white ring-1 ring-coffee-100"}`}
              data-anim="fadeInUp"
              data-delay={i}
            >
              {p.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-caramel-400 px-4 py-1 text-xs font-bold text-espresso-900">PHỔ BIẾN NHẤT</span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-coffee-200" : "text-espresso-700"}`}>{p.desc}</p>
              <p className="mt-6 text-4xl font-extrabold">{p.price}</p>
              <p className={`text-sm line-through ${p.featured ? "text-coffee-300" : "text-espresso-700/70"}`}>{p.oldPrice}</p>
              <ul className={`mt-6 flex-1 space-y-3 text-sm ${p.featured ? "text-coffee-100" : ""}`}>
                {p.items.map((item) => (
                  <li key={item.text} className={`flex gap-2 ${item.included ? "" : "text-espresso-700/50"}`}>
                    {item.included ? (
                      <Check className={`h-5 w-5 shrink-0 ${p.featured ? "text-caramel-400" : "text-coffee-600"}`} />
                    ) : (
                      <X className="h-5 w-5 shrink-0" />
                    )}
                    {item.text}
                  </li>
                ))}
              </ul>
              <a
                href="#footer"
                className={`mt-8 block rounded-full py-3.5 text-center font-semibold transition ${p.featured ? "bg-caramel-400 text-espresso-900 hover:bg-caramel-500" : "text-coffee-700 ring-1 ring-coffee-300 hover:bg-coffee-50"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 rounded-3xl bg-white p-6 ring-1 ring-coffee-100 sm:p-10" data-anim="fadeInUp">
          <h3 className="text-center text-xl font-bold">So sánh giá trị gói Chuyên Nghiệp</h3>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-coffee-100 text-espresso-700">
                  <th className="py-3 pr-4 font-semibold">Hạng mục</th>
                  <th className="py-3 pr-4 font-semibold">Tự học / học lẻ</th>
                  <th className="py-3 font-semibold text-coffee-700">The Cups Academy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-coffee-50">
                {valueRows.map(([label, diy, academy]) => (
                  <tr key={label}>
                    <td className="py-3 pr-4">{label}</td>
                    <td className="py-3 pr-4"><ValueCell value={diy} /></td>
                    <td className="py-3 font-semibold"><ValueCell value={academy} /></td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-3 pr-4">Tổng giá trị</td>
                  <td className="py-3 pr-4">&gt; 8.000.000đ</td>
                  <td className="py-3 text-coffee-700">5.900.000đ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="reveal mt-8 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-r from-coffee-700 to-coffee-900 p-8 text-white sm:flex-row" data-anim="fadeInUp">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-white/10 ring-2 ring-caramel-400">
            <ShieldCheck className="h-10 w-10 text-caramel-400" />
          </span>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold">Cam kết hoàn 100% học phí trong 7 ngày đầu</h3>
            <p className="mt-2 text-coffee-100">Học 2 buổi đầu tiên, nếu thấy khóa học không phù hợp, bạn được hoàn lại toàn bộ học phí. Không cần giải thích.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

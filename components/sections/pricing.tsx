import { ArrowRight, Check, ShieldCheck, X } from "lucide-react";
import { course, plans, valueRows, vnd } from "@/lib/content";
import { delay } from "@/lib/motion";
import { PlanLink } from "@/components/plan-link";
import { SeatsMeter } from "@/components/seats-meter";
import { SectionHeading } from "@/components/section-heading";

function ValueCell({ value }: { value: string | boolean }) {
  if (value === true) return <Check className="h-5 w-5 text-coffee-600" aria-label="Có" />;
  if (value === false) return <X className="h-5 w-5 text-rose-500" aria-label="Không" />;
  return <>{value}</>;
}

const featured = plans.find((p) => p.featured)!;

export function Pricing() {
  return (
    <section id="pricing" className="bg-coffee-50 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Học phí"
          title="Chọn gói phù hợp với mục tiêu của bạn"
          text={`Giảm ${course.discount}% cho ${course.seatsTotal} học viên đăng ký sớm khóa ${course.cohort}. Đóng trước 50% để giữ chỗ, phần còn lại đóng vào tuần thứ 4.`}
        />
        <SeatsMeter tone="light" className="reveal mx-auto mt-8 max-w-md" />

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((p, i) => (
            <div
              key={p.id}
              className={`reveal relative flex flex-col rounded-3xl p-6 sm:p-8 ${p.featured ? "order-first bg-coffee-900 text-white shadow-2xl shadow-coffee-900/30 ring-2 ring-caramel-400 lg:order-none lg:-translate-y-4" : "bg-white ring-1 ring-coffee-100"}`}
              style={delay(i)}
            >
              {p.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-caramel-400 px-4 py-1 text-xs font-bold whitespace-nowrap text-espresso-900">
                  PHỔ BIẾN NHẤT
                </span>
              )}
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold">{p.name}</h3>
                <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${p.featured ? "bg-caramel-400/15 text-caramel-300" : "bg-coffee-50 text-coffee-700"}`}>
                  -{course.discount}%
                </span>
              </div>
              <p className={`mt-1 text-sm ${p.featured ? "text-coffee-200" : "text-espresso-700"}`}>{p.desc}</p>
              <p className="mt-6 text-4xl font-extrabold tracking-tight">{vnd(p.price)}</p>
              <p className={`mt-1 flex flex-wrap gap-x-2 text-sm ${p.featured ? "text-coffee-300" : "text-espresso-700/70"}`}>
                <span className="line-through">{vnd(p.oldPrice)}</span>
                <span className={`font-semibold whitespace-nowrap ${p.featured ? "text-caramel-300" : "text-coffee-700"}`}>Tiết kiệm {vnd(p.oldPrice - p.price)}</span>
              </p>
              <p className={`mt-3 rounded-xl px-3 py-2 text-sm ${p.featured ? "bg-white/5 text-coffee-100" : "bg-cream-100 text-espresso-700"}`}>
                Hoặc trả góp 2 lần × <strong>{vnd(p.price / 2)}</strong>, 0% phí
              </p>
              <ul className={`mt-6 flex-1 space-y-3 text-sm ${p.featured ? "text-coffee-100" : ""}`}>
                {p.items.map((item) => (
                  <li key={item.text} className={`flex gap-2 ${item.included ? "" : "text-espresso-700/45"}`}>
                    {item.included ? (
                      <Check className={`h-5 w-5 shrink-0 ${p.featured ? "text-caramel-400" : "text-coffee-600"}`} />
                    ) : (
                      <X className="h-5 w-5 shrink-0" />
                    )}
                    {item.included ? item.text : <span className="line-through decoration-1">{item.text}</span>}
                  </li>
                ))}
              </ul>
              <PlanLink
                plan={p.id}
                className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-4 py-4 text-center text-[15px] font-bold transition sm:text-base ${p.featured ? "bg-caramel-400 text-espresso-900 hover:bg-caramel-300" : "text-coffee-700 ring-1 ring-coffee-300 hover:bg-coffee-50"}`}
              >
                {p.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </PlanLink>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 rounded-3xl bg-white p-6 ring-1 ring-coffee-100 sm:mt-16 sm:p-10">
          <h3 className="text-center text-xl font-bold">Vì sao gói {featured.name} đáng giá hơn tự học?</h3>

          {/* Mobile: mỗi hạng mục một thẻ, hai lựa chọn đặt cạnh nhau */}
          <ul className="mt-6 space-y-3 sm:hidden">
            {valueRows.map(([label, diy, academy]) => (
              <li key={label} className="rounded-2xl bg-cream-50 p-4 ring-1 ring-coffee-100">
                <p className="font-semibold">{label}</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-espresso-700/70">Tự học / học lẻ</p>
                    <p className="mt-1 text-espresso-700"><ValueCell value={diy} /></p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-coffee-700">The Cups Academy</p>
                    <p className="mt-1 font-semibold"><ValueCell value={academy} /></p>
                  </div>
                </div>
              </li>
            ))}
            <li className="grid grid-cols-2 gap-3 rounded-2xl bg-coffee-900 p-4 text-white">
              <div>
                <p className="text-xs text-coffee-200">Tự học / học lẻ</p>
                <p className="mt-1 font-bold">&gt; 8.000.000đ</p>
              </div>
              <div>
                <p className="text-xs text-caramel-300">The Cups Academy</p>
                <p className="mt-1 font-bold text-caramel-300">{vnd(featured.price)}</p>
              </div>
            </li>
          </ul>

          <table className="mt-6 hidden w-full text-left text-sm sm:table">
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
                  <td className="py-3 pr-4 text-espresso-700"><ValueCell value={diy} /></td>
                  <td className="py-3 font-semibold"><ValueCell value={academy} /></td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-3 pr-4">Tổng chi phí</td>
                <td className="py-3 pr-4">&gt; 8.000.000đ</td>
                <td className="py-3 text-coffee-700">{vnd(featured.price)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="reveal mt-6 flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-r from-coffee-700 to-coffee-900 p-6 text-white sm:mt-8 sm:flex-row sm:gap-6 sm:p-8">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/10 ring-2 ring-caramel-400 sm:h-20 sm:w-20">
            <ShieldCheck className="h-8 w-8 text-caramel-400 sm:h-10 sm:w-10" />
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

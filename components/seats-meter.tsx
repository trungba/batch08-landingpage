import { course } from "@/lib/content";

/** Thanh tiến độ suất ưu đãi đã được giữ. `tone` chọn màu cho nền sáng hoặc tối. */
export function SeatsMeter({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const taken = course.seatsTotal - course.seatsLeft;
  const pct = Math.round((taken / course.seatsTotal) * 100);
  const dark = tone === "dark";
  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <p className={dark ? "text-coffee-100" : "text-espresso-700"}>
          Còn <strong className={dark ? "text-caramel-300" : "text-coffee-700"}>{course.seatsLeft}/{course.seatsTotal} suất</strong> ưu đãi -{course.discount}%
        </p>
        <p className={`text-xs ${dark ? "text-coffee-200/80" : "text-espresso-700/70"}`}>{taken} suất đã giữ</p>
      </div>
      <div
        className={`mt-2 h-2 overflow-hidden rounded-full ${dark ? "bg-white/10" : "bg-coffee-100"}`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={course.seatsTotal}
        aria-valuenow={taken}
        aria-label="Số suất ưu đãi đã được giữ"
      >
        <div className="h-full origin-left rounded-full bg-gradient-to-r from-caramel-500 to-caramel-300 motion-safe:animate-grow" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

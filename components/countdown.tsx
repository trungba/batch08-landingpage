"use client";

import { useEffect, useState } from "react";
import { course } from "@/lib/content";

const START = new Date(course.startDate).getTime();
const DAY = 86_400_000;

type Remaining = { days: number; hours: number; minutes: number };

function remaining(now: number): Remaining {
  const ms = Math.max(START - now, 0);
  return { days: Math.floor(ms / DAY), hours: Math.floor((ms % DAY) / 3_600_000), minutes: Math.floor((ms % 3_600_000) / 60_000) };
}

/** Thời gian còn lại tới khai giảng. Chỉ tính trên client để không lệch giờ khi hydrate. */
function useRemaining() {
  const [left, setLeft] = useState<Remaining | null>(null);
  useEffect(() => {
    const tick = () => setLeft(remaining(Date.now()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return left;
}

/** Dòng chữ ngắn: "còn 24 ngày". Không hiện gì khi đã qua ngày khai giảng. */
export function DaysLeft({ prefix = "còn " }: { prefix?: string }) {
  const left = useRemaining();
  if (!left || left.days + left.hours + left.minutes === 0) return null;
  return (
    <>
      {prefix}
      {left.days > 0 ? `${left.days} ngày` : `${left.hours} giờ`}
    </>
  );
}

/** Ô đếm ngược ngày · giờ · phút cho khối đăng ký. */
export function CountdownTiles({ className = "" }: { className?: string }) {
  const left = useRemaining();
  const units = [
    { value: left?.days, label: "ngày" },
    { value: left?.hours, label: "giờ" },
    { value: left?.minutes, label: "phút" },
  ];
  return (
    <div className={`flex gap-2 ${className}`} aria-label="Thời gian còn lại tới ngày khai giảng">
      {units.map((u) => (
        <div key={u.label} className="min-w-16 rounded-2xl bg-white/10 px-3 py-2 text-center ring-1 ring-white/15">
          <p className="text-2xl font-extrabold tabular-nums text-white">{u.value === undefined ? "--" : String(u.value).padStart(2, "0")}</p>
          <p className="text-xs text-coffee-200">{u.label}</p>
        </div>
      ))}
    </div>
  );
}

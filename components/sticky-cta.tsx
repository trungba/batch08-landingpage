"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { course } from "@/lib/content";
import { DaysLeft } from "@/components/countdown";

/** Thanh CTA dính đáy trên mobile: hiện sau hero, ẩn khi bảng giá, form hoặc footer đang trên màn hình. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["pricing", "register", "footer"].map((id) => document.getElementById(id));
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const onTarget = targets.some((el) => {
        const r = el?.getBoundingClientRect();
        return !!r && r.top < window.innerHeight && r.bottom > 0;
      });
      setVisible(pastHero && !onTarget);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-40 transition duration-300 md:hidden ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"}`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 rounded-full bg-coffee-950/95 py-2 pr-2 pl-5 text-white shadow-2xl shadow-coffee-950/40 ring-1 ring-white/10 backdrop-blur">
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-sm font-bold">Còn {course.seatsLeft} suất -{course.discount}%</p>
          <p className="truncate text-xs text-coffee-200">
            Khóa {course.cohort} <DaysLeft prefix="· khai giảng sau " />
          </p>
        </div>
        <a
          href="#register"
          tabIndex={visible ? undefined : -1}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-caramel-400 px-5 py-3 font-bold text-espresso-900"
        >
          Giữ chỗ <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

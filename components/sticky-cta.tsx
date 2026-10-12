"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

/** CTA dính đáy trên mobile: hiện sau khi qua hero, ẩn khi tới bảng giá hoặc form đăng ký. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ["pricing", "register"].map((id) => document.getElementById(id));
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8;
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

  if (!visible) return null;
  return (
    <a
      href="#register"
      className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-coffee-700 py-4 font-semibold text-white shadow-2xl shadow-coffee-900/40 md:hidden"
    >
      Đăng ký khóa K12 — giảm 30% <ArrowRight className="h-5 w-5" />
    </a>
  );
}

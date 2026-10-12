"use client";

import { useEffect } from "react";

/** Gắn class animate.style cho mọi phần tử `.reveal` khi chúng cuộn vào màn hình. */
export function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.style.animationDelay = `${(Number(el.dataset.delay) || 0) * 0.15}s`;
          el.classList.add("animate__animated", `animate__${el.dataset.anim || "fadeInUp"}`);
          observer.unobserve(el);
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}

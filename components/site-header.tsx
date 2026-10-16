"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { contact, course, navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Tô đậm mục menu của section đang chiếm giữa màn hình
  useEffect(() => {
    // #register không có trong menu: khi tới form thì bỏ tô đậm thay vì giữ mục "Học phí"
    const sections = [...navLinks.map((l) => l.href), "#register"].map((h) => document.querySelector(h)).filter((el): el is Element => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-coffee-100 bg-cream-50/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8" aria-label="Điều hướng chính">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/logo.jpeg" alt="The Cups Coffee" width={44} height={44} className="h-10 w-10 rounded-full object-cover ring-2 ring-coffee-200 sm:h-11 sm:w-11" priority />
          <span className="leading-tight font-bold tracking-tight text-coffee-900">
            The Cups <span className="hidden sm:inline">Academy</span>
            <span className="block text-xs font-medium text-espresso-700 sm:hidden">Academy</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 text-sm font-medium whitespace-nowrap text-espresso-700 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className="rounded-full px-3.5 py-2 transition hover:text-coffee-600 aria-[current]:bg-coffee-100 aria-[current]:text-coffee-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1">
          <a href="#register" className="group inline-flex items-center gap-2 rounded-full bg-coffee-700 px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition hover:bg-coffee-800 sm:px-5">
            <span>
              Giữ chỗ<span className="hidden sm:inline"> {course.cohort}</span>
            </span>
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-coffee-900 lg:hidden"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-coffee-100 bg-cream-50 lg:hidden">
          <ul className="space-y-1 px-4 py-3 font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 hover:bg-coffee-50">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`tel:${contact.tel}`} className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-coffee-700">
                <Phone className="h-4 w-4" /> Gọi tư vấn {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

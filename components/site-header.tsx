"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="sticky top-0 z-50 border-b border-coffee-100 bg-cream-50/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="The Cups Coffee" width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-coffee-200" priority />
          <span className="hidden font-bold tracking-tight text-coffee-900 sm:block">The Cups Academy</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-medium text-espresso-700 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-coffee-600">{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#register" className="hidden items-center gap-2 rounded-full bg-coffee-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-coffee-800 md:inline-flex">
          Đăng ký ngay <ArrowRight className="h-4 w-4" />
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-lg p-2 text-coffee-900 md:hidden"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-coffee-100 bg-cream-50 md:hidden">
          <ul className="space-y-3 px-4 py-4 font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#register" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-coffee-700 py-3 text-center font-semibold text-white">
                Đăng ký ngay
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

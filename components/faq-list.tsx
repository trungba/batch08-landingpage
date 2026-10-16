"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

/** Accordion FAQ: chỉ mở một câu tại một thời điểm. */
export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10 space-y-3">
      {faqs.map((f, i) => (
        <details
          key={f.q}
          open={openIndex === i}
          onToggle={(e) => {
            const isOpen = (e.currentTarget as HTMLDetailsElement).open;
            if (isOpen) setOpenIndex(i);
            else if (openIndex === i) setOpenIndex(null);
          }}
          className="reveal rounded-2xl bg-white ring-1 ring-coffee-100 transition open:shadow-lg open:ring-coffee-300"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 font-semibold sm:p-6">
            {f.q}
            <Plus className="faq-icon h-5 w-5 shrink-0 text-coffee-600 transition-transform" />
          </summary>
          <p className="px-5 pb-5 text-espresso-700 sm:px-6 sm:pb-6">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

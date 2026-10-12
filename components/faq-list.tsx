"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";

/** Accordion FAQ: chỉ mở một câu tại một thời điểm. */
export function FaqList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-12 space-y-4">
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
          data-anim="fadeInUp"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-semibold">
            {f.q}
            <Plus className="faq-icon h-5 w-5 shrink-0 text-coffee-600 transition-transform" />
          </summary>
          <p className="px-6 pb-6 text-espresso-700">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

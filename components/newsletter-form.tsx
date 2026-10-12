"use client";

import { useState } from "react";
import { Send } from "lucide-react";

/** Form bản tin. Chưa nối backend: chỉ xác nhận phía client. */
export function NewsletterForm() {
  const [done, setDone] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.currentTarget.reset();
          setDone(true);
        }}
        className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row"
      >
        <label htmlFor="nlEmail" className="sr-only">Email</label>
        <input
          id="nlEmail"
          type="email"
          required
          placeholder="Email của bạn"
          className="min-w-0 flex-1 rounded-full bg-white/10 px-5 py-3 text-sm text-white ring-1 ring-white/15 placeholder:text-coffee-300 focus:ring-2 focus:ring-coffee-400 focus:outline-none"
        />
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel-400 px-5 py-3 text-sm font-semibold text-espresso-900 transition hover:bg-caramel-500">
          Đăng ký <Send className="h-4 w-4" />
        </button>
      </form>
      <p role="status" className="mt-3 text-sm text-caramel-400">
        {done && "Cảm ơn bạn! Bản tin đầu tiên sẽ sớm có trong hộp thư."}
      </p>
    </>
  );
}

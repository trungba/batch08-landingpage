import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { features, unsplash } from "@/lib/content";

export function Solution() {
  return (
    <section id="solution" className="bg-coffee-50 py-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal relative" data-anim="left">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-square rounded-[2rem] shadow-xl">
            <Image src={unsplash("1442512595331-e89e73853f31", 1000)} alt="Dụng cụ pha pour-over" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -top-5 -right-3 rounded-2xl bg-coffee-700 px-5 py-4 text-white shadow-xl sm:-right-6">
            <p className="text-3xl font-extrabold">80%</p>
            <p className="text-xs text-coffee-100">thời lượng thực hành</p>
          </div>
        </div>
        <div className="reveal" data-anim="right">
          <p className="text-sm font-semibold tracking-widest text-coffee-600 uppercase">Giải pháp</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Khóa học Barista Chuyên Nghiệp — The Cups Academy</h2>
          <p className="mt-5 text-lg text-espresso-700">
            Chương trình 8 tuần được thiết kế bởi đội ngũ barista của The Cups Coffee, đi từ kiến thức hạt, rang, xay đến espresso, đánh sữa, latte art, pha chế đồ uống signature và vận hành quầy bar.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-coffee-700 ring-1 ring-coffee-200">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-espresso-700">{text}</p>
                </div>
              </li>
            ))}
          </ul>
          <a href="#curriculum" className="mt-8 inline-flex items-center gap-2 font-semibold text-coffee-700 hover:text-coffee-900">
            Xem chi tiết lộ trình <ArrowDownRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight, Check, ClipboardCheck, Clock, Layers } from "lucide-react";
import { modules, unsplash } from "@/lib/content";

const chips = [
  { icon: Clock, label: "48 giờ" },
  { icon: Layers, label: "16 buổi" },
  { icon: ClipboardCheck, label: "1 bài thi cuối khóa" },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-espresso-900 py-20 text-cream-100 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between" data-anim="fadeInUp">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-coffee-300 uppercase">Lộ trình học</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">4 module · 8 tuần · 48 giờ học</h2>
            <p className="mt-4 text-cream-200/80">Học 2 buổi/tuần, mỗi buổi 3 giờ. Có lớp sáng, chiều và tối để bạn sắp xếp linh hoạt.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            {chips.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Icon className="h-4 w-4 text-coffee-300" /> {label}
              </span>
            ))}
          </div>
        </div>

        <ol className="relative mt-16 ml-3 space-y-12 border-l-2 border-coffee-700/60">
          {modules.map((m, i) => {
            const last = i === modules.length - 1;
            return (
              <li key={m.title} className="reveal relative pl-8 sm:pl-12" data-anim="fadeInUp">
                <span className={`absolute top-1 -left-[15px] grid h-7 w-7 place-items-center rounded-full text-xs font-bold ring-4 ring-espresso-900 ${last ? "bg-caramel-400 text-espresso-900" : "bg-coffee-500 text-white"}`}>
                  {i + 1}
                </span>
                <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8 md:grid-cols-[1fr_260px]">
                  <div>
                    <p className="text-sm font-semibold text-caramel-400">{m.weeks}</p>
                    <h3 className="mt-1 text-xl font-bold text-white">{m.title}</h3>
                    <ul className="mt-4 space-y-2 text-cream-200/85">
                      {m.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <Check className="h-5 w-5 shrink-0 text-coffee-300" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-44 overflow-hidden rounded-2xl md:h-full">
                    <Image src={unsplash(m.image, 600)} alt={m.alt} fill sizes="(min-width: 768px) 260px, 100vw" className="object-cover" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-14 text-center" data-anim="fadeInUp">
          <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-coffee-500 px-7 py-4 font-semibold text-white transition hover:bg-coffee-400">
            Đăng ký khóa K12 <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

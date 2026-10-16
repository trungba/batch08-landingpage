import Image from "next/image";
import { ArrowRight, Check, ClipboardCheck, Clock, Layers } from "lucide-react";
import { course, modules, unsplash } from "@/lib/content";

const chips = [
  { icon: Clock, label: `${course.hours} giờ` },
  { icon: Layers, label: `${course.sessions} buổi` },
  { icon: ClipboardCheck, label: "1 bài thi cuối khóa" },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-espresso-900 py-16 text-cream-100 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest text-coffee-300 uppercase">Lộ trình học</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">4 module · {course.weeks} tuần · {course.hours} giờ học</h2>
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

        <ol className="relative mt-12 ml-3 space-y-6 border-l-2 border-coffee-700/60 sm:mt-16 sm:space-y-12">
          {modules.map((m, i) => {
            const last = i === modules.length - 1;
            return (
              <li key={m.title} className="reveal relative pl-7 sm:pl-12">
                <span className={`absolute top-1 -left-[15px] grid h-7 w-7 place-items-center rounded-full text-xs font-bold ring-4 ring-espresso-900 ${last ? "bg-caramel-400 text-espresso-900" : "bg-coffee-500 text-white"}`}>
                  {i + 1}
                </span>
                <div className="grid gap-6 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-8 md:grid-cols-[1fr_260px]">
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
                  <div className="relative hidden h-44 overflow-hidden rounded-2xl sm:block md:h-full">
                    <Image src={unsplash(m.image)} alt={m.alt} fill sizes="(min-width: 768px) 260px, 100vw" className="object-cover" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-12 flex flex-col items-center gap-3 text-center sm:mt-14">
          <a href="#register" className="group inline-flex items-center gap-2 rounded-full bg-caramel-400 px-7 py-4 font-bold text-espresso-900 transition hover:bg-caramel-300">
            Giữ chỗ khóa {course.cohort} <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <p className="text-sm text-cream-200/70">Khai giảng {course.startLabel} · còn {course.seatsLeft} suất ưu đãi</p>
        </div>
      </div>
    </section>
  );
}

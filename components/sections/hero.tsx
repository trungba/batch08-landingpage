import Image from "next/image";
import { ArrowRight, CalendarDays, Clock, Star, Users } from "lucide-react";
import { avatars, course, heroBadge, plans, unsplash, vnd } from "@/lib/content";
import { DaysLeft } from "@/components/countdown";
import { SeatsMeter } from "@/components/seats-meter";

const entry = "animate-rise";
const cheapest = plans.reduce((a, b) => (a.price <= b.price ? a : b));

const facts = [
  { icon: CalendarDays, label: `${course.weeks} tuần · ${course.sessions} buổi` },
  { icon: Clock, label: "Ca sáng, chiều, tối" },
  { icon: Users, label: `Lớp tối đa ${course.classSize} người` },
];

export function Hero() {
  const BadgeIcon = heroBadge.icon;
  return (
    <section className="relative overflow-hidden bg-coffee-950 text-white">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pt-10 pb-16 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-16 lg:pb-20">
        <div>
          <a
            href="#register"
            className={`${entry} inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 pr-4 pl-3 text-[13px] whitespace-nowrap text-coffee-100 ring-1 ring-white/15 transition hover:bg-white/15 sm:text-sm`}
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 animate-ping-soft" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="rounded-full bg-caramel-400 px-2.5 py-0.5 text-xs font-bold text-espresso-900">{course.cohort}</span>
            <span className="hidden min-[360px]:inline">Khai giảng</span> {course.startLabel}
            <span className="text-caramel-300">
              <DaysLeft prefix="· còn " />
            </span>
          </a>
          <h1 className={`${entry} mt-5 text-[2.35rem] leading-[1.1] font-extrabold tracking-tight sm:text-5xl xl:text-6xl`}>
            Từ hạt cà phê đến <span className="text-caramel-300">ly latte art</span> hoàn hảo trong 8 tuần
          </h1>
          <p className={`${entry} mt-4 max-w-xl text-base text-coffee-100/90 sm:mt-5 sm:text-lg [animation-delay:80ms]`}>
            80% thời gian thực hành trên máy espresso thương mại, học cùng barista đạt giải quốc gia. Ra trường có chứng chỉ và được giới thiệu việc làm.
          </p>
          <ul className={`${entry} mt-5 flex flex-wrap gap-1.5 text-[13px] sm:mt-6 sm:gap-2 sm:text-sm [animation-delay:140ms]`}>
            {facts.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-coffee-100 ring-1 ring-white/10 sm:px-3 sm:py-1.5">
                <Icon className="h-4 w-4 text-caramel-400" /> {label}
              </li>
            ))}
          </ul>

          <div className={`${entry} mt-6 max-w-xl rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10 backdrop-blur sm:p-6 [animation-delay:200ms]`}>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1">
              <p className="text-sm text-coffee-200">
                Học phí chỉ từ{" "}
                <span className="block text-3xl font-extrabold text-white sm:inline sm:text-2xl">{vnd(cheapest.price)}</span>{" "}
                <span className="text-coffee-300 line-through">{vnd(cheapest.oldPrice)}</span>
              </p>
              <p className="text-sm text-coffee-200">Trả góp 2 lần, 0% phí</p>
            </div>
            <SeatsMeter className="mt-4" />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#register"
                className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-caramel-400 px-7 py-4 font-bold text-espresso-900 shadow-lg shadow-caramel-500/30 transition hover:bg-caramel-300"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md animate-shimmer" />
                <span className="relative whitespace-nowrap">Giữ chỗ ưu đãi -{course.discount}%</span>
                <ArrowRight className="relative h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-full px-6 py-4 font-semibold ring-1 ring-white/25 transition hover:bg-white/10">
                Xem 3 gói học phí
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-coffee-200/80 sm:text-left">Đăng ký 1 phút, chưa cần thanh toán · Hoàn 100% học phí trong 7 ngày đầu</p>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm text-coffee-100/80">
            <div className="flex -space-x-3">
              {Object.values(avatars).map((id) => (
                <Image key={id} src={unsplash(id)} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-coffee-950" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-caramel-400" aria-label="Đánh giá 4.9 trên 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1.5 font-semibold text-white">4.9/5</span>
              </div>
              <p>từ 1.200+ học viên đã tốt nghiệp</p>
            </div>
          </div>
        </div>

        <div className={`${entry} relative mx-auto w-full max-w-md lg:max-w-none [animation-delay:120ms]`}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-coffee-500/40 to-caramel-400/30 blur-2xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl sm:aspect-[4/5]">
            <Image src={unsplash("1541167760496-1628856ab772")} alt="Barista rót latte art" fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover animate-kenburns" />
          </div>
          <div className="absolute top-5 -right-2 rounded-2xl animate-float bg-coffee-950/80 px-4 py-3 text-white shadow-xl ring-1 ring-white/10 backdrop-blur sm:-right-6">
            <p className="text-2xl font-extrabold text-caramel-300">1 : 1</p>
            <p className="text-xs text-coffee-100">học viên / máy espresso</p>
          </div>
          <div className="absolute -bottom-6 -left-2 flex animate-float [animation-delay:-2.5s] items-center gap-3 rounded-2xl bg-white p-4 text-espresso-900 shadow-xl sm:-left-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-coffee-100 text-coffee-700">
              <BadgeIcon className="h-6 w-6" />
            </span>
            <div>
              <p className="text-sm font-bold">{heroBadge.title}</p>
              <p className="text-xs text-espresso-700">{heroBadge.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

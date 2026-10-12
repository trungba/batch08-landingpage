import Image from "next/image";
import { ArrowRight, BookOpen, Sparkles, Star } from "lucide-react";
import { avatars, heroBadge, unsplash } from "@/lib/content";

export function Hero() {
  const BadgeIcon = heroBadge.icon;
  return (
    <section className="relative overflow-hidden bg-coffee-950 text-white">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="animate__animated animate__fadeInDown inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-coffee-100 ring-1 ring-white/15">
            <Sparkles className="h-4 w-4 text-caramel-400" /> Khai giảng khóa K12 — 09/11/2026
          </span>
          <h1 className="animate__animated animate__fadeInUp mt-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Từ hạt cà phê đến <span className="text-coffee-300">ly latte art</span> hoàn hảo trong 8 tuần
          </h1>
          <p className="animate__animated animate__fadeInUp animate__delay-1s mt-6 max-w-xl text-lg text-coffee-100/90">
            Khóa học Barista Chuyên Nghiệp tại The Cups Coffee: 80% thời gian thực hành trên máy espresso thương mại, học cùng barista đạt giải quốc gia, nhận chứng chỉ và hỗ trợ việc làm.
          </p>
          <div className="animate__animated animate__fadeInUp animate__delay-1s mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full bg-caramel-400 px-7 py-4 font-semibold text-espresso-900 shadow-lg shadow-caramel-500/30 transition hover:bg-caramel-500">
              Giữ chỗ với ưu đãi -30% <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#curriculum" className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold ring-1 ring-white/30 transition hover:bg-white/10">
              <BookOpen className="h-5 w-5" /> Xem lộ trình học
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-coffee-100/80">
            <div className="flex -space-x-3">
              {Object.values(avatars).map((id) => (
                <Image key={id} src={unsplash(id, 80)} alt="Học viên" width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-coffee-950" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-caramel-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-1 font-semibold text-white">4.9/5</span>
              </div>
              <p>từ 1.200+ học viên đã tốt nghiệp</p>
            </div>
          </div>
        </div>

        <div className="animate__animated animate__zoomIn relative">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-coffee-500/40 to-caramel-400/30 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image src={unsplash("1541167760496-1628856ab772", 1000)} alt="Barista rót latte art" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="animate__animated animate__fadeInUp animate__delay-2s absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl bg-white p-4 text-espresso-900 shadow-xl sm:-left-8">
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

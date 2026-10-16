import Image from "next/image";
import { CalendarCheck, Phone, PhoneCall, ShieldCheck } from "lucide-react";
import { contact, course, unsplash } from "@/lib/content";
import { CountdownTiles } from "@/components/countdown";
import { RegistrationForm } from "@/components/registration-form";
import { SeatsMeter } from "@/components/seats-meter";

const steps = [
  { icon: PhoneCall, title: "Tư vấn trong 24 giờ", text: "Tư vấn viên gọi lại để hiểu mục tiêu và gợi ý gói phù hợp." },
  { icon: CalendarCheck, title: "Chọn lịch & giữ chỗ", text: `Xác nhận ca học, đóng 50% học phí để giữ suất ưu đãi -${course.discount}%.` },
  { icon: ShieldCheck, title: "Học thử không rủi ro", text: "Hoàn 100% học phí trong 7 ngày đầu nếu thấy không phù hợp." },
];

export function Registration() {
  return (
    <section id="register" className="relative overflow-hidden bg-coffee-950 py-16 text-white lg:py-28">
      <Image src={unsplash("1501339847302-ac426a4a7cbb", 1800)} alt="" fill sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-coffee-950 via-coffee-950/90 to-espresso-900/80" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-14 lg:px-8">
        <div className="reveal lg:sticky lg:top-24" data-anim="left">
          <p className="text-sm font-semibold tracking-widest text-caramel-400 uppercase">Đăng ký giữ chỗ · Khóa {course.cohort}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance sm:text-5xl">Ly cà phê ngon nhất là ly do chính bạn pha</h2>
          <p className="mt-4 text-lg text-coffee-100">
            Khai giảng <strong className="text-white">{course.startLabel}</strong>. Điền thông tin trong 1 phút, <strong className="text-white">chưa cần thanh toán</strong>: tư vấn viên sẽ gọi lại để chốt lịch cùng bạn.
          </p>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end lg:flex-col lg:items-stretch xl:flex-row xl:items-end">
            <CountdownTiles />
            <SeatsMeter className="flex-1" />
          </div>

          <ol className="mt-10 hidden space-y-5 sm:block">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex gap-4">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-caramel-300 ring-1 ring-white/15">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-caramel-400 text-xs font-bold text-espresso-900">{i + 1}</span>
                </span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-coffee-100/85">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a
            href={`tel:${contact.tel}`}
            className="mt-8 hidden items-center gap-3 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition hover:bg-white/10 lg:inline-flex"
          >
            <Phone className="h-5 w-5 text-caramel-300" />
            <span>
              Muốn hỏi trực tiếp? Gọi <strong>{contact.phone}</strong>
              <span className="block text-sm text-coffee-200">{contact.hours}</span>
            </span>
          </a>
        </div>
        <div className="reveal" data-anim="right">
          <RegistrationForm />
          <a href={`tel:${contact.tel}`} className="mt-4 flex items-center justify-center gap-2 text-sm text-coffee-100 lg:hidden">
            <Phone className="h-4 w-4 text-caramel-300" /> Hoặc gọi ngay <strong className="text-white underline underline-offset-4">{contact.phone}</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

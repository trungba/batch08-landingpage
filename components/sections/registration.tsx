import { CalendarCheck, PhoneCall, ShieldCheck } from "lucide-react";
import { contact } from "@/lib/content";
import { RegistrationForm } from "@/components/registration-form";

const steps = [
  { icon: PhoneCall, title: "Tư vấn trong 24 giờ", text: "Tư vấn viên gọi lại để hiểu mục tiêu và gợi ý gói phù hợp." },
  { icon: CalendarCheck, title: "Chọn lịch & giữ chỗ", text: "Xác nhận ca học, đóng 50% học phí để giữ suất ưu đãi -30%." },
  { icon: ShieldCheck, title: "Học thử không rủi ro", text: "Hoàn 100% học phí trong 7 ngày đầu nếu thấy không phù hợp." },
];

export function Registration() {
  return (
    <section id="register" className="scroll-mt-16 bg-coffee-50 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div className="reveal" data-anim="fadeInLeft">
          <p className="text-sm font-semibold tracking-widest text-coffee-600 uppercase">Đăng ký học</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Giữ chỗ khóa K12 ngay hôm nay</h2>
          <p className="mt-4 text-lg text-espresso-700">Điền thông tin trong 1 phút. Chưa cần thanh toán, chúng tôi sẽ liên hệ để tư vấn trước.</p>
          <ol className="mt-10 space-y-6">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex gap-4">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-coffee-700 text-white">
                  <Icon className="h-6 w-6" />
                  <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-caramel-400 text-xs font-bold text-espresso-900">{i + 1}</span>
                </span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-espresso-700">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-sm text-espresso-700">
            Cần hỗ trợ ngay? Gọi{" "}
            <a href={`tel:${contact.tel}`} className="font-semibold text-coffee-700 underline underline-offset-4">{contact.phone}</a>
          </p>
        </div>
        <div className="reveal" data-anim="fadeInRight">
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}

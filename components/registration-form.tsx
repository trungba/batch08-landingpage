"use client";

import { useState, type FormEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { db } from "@/lib/firebase";
import { plans, shifts } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"fullName" | "phone" | "email", string>>;

// Cùng điều kiện với firestore.rules để báo lỗi ngay trên form thay vì bị Firestore từ chối
const PHONE_RE = /^(\+84|0)[0-9]{9,10}$/;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

const inputClass =
  "mt-1.5 w-full rounded-xl border-0 bg-cream-50 px-4 py-3 text-espresso-900 ring-1 ring-coffee-200 placeholder:text-espresso-700/40 focus:ring-2 focus:ring-coffee-500 focus:outline-none";

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fullName = String(data.get("fullName") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/[\s.\-()]/g, "");
    const email = String(data.get("email") ?? "").trim().toLowerCase();

    const next: Errors = {};
    if (fullName.length < 2) next.fullName = "Vui lòng nhập họ tên.";
    if (!PHONE_RE.test(phone)) next.phone = "Số điện thoại chưa đúng, ví dụ 0901234567.";
    if (!EMAIL_RE.test(email)) next.email = "Email chưa đúng định dạng.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      await addDoc(collection(db, "registrations"), {
        fullName,
        phone,
        email,
        plan: String(data.get("plan")),
        shift: String(data.get("shift")),
        note: String(data.get("note") ?? "").trim(),
        createdAt: serverTimestamp(),
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("Gửi đăng ký thất bại", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center shadow-xl ring-1 ring-coffee-100" role="status">
        <CheckCircle2 className="h-14 w-14 text-coffee-600" />
        <h3 className="mt-5 text-2xl font-bold">Đăng ký thành công!</h3>
        <p className="mt-3 text-espresso-700">Tư vấn viên sẽ gọi cho bạn trong vòng 24 giờ để xác nhận lịch học và hướng dẫn giữ chỗ.</p>
        <button onClick={() => setStatus("idle")} className="mt-8 font-semibold text-coffee-700 underline underline-offset-4 hover:text-coffee-900">
          Đăng ký thêm cho người khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-coffee-100 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold">Họ và tên *</span>
          <input name="fullName" autoComplete="name" maxLength={100} placeholder="Nguyễn Văn A" className={inputClass} aria-invalid={!!errors.fullName} />
          {errors.fullName && <span className="mt-1 block text-sm text-rose-600">{errors.fullName}</span>}
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Số điện thoại *</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength={20} placeholder="090 123 4567" className={inputClass} aria-invalid={!!errors.phone} />
          {errors.phone && <span className="mt-1 block text-sm text-rose-600">{errors.phone}</span>}
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email *</span>
          <input name="email" type="email" autoComplete="email" maxLength={200} placeholder="ban@email.com" className={inputClass} aria-invalid={!!errors.email} />
          {errors.email && <span className="mt-1 block text-sm text-rose-600">{errors.email}</span>}
        </label>

        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-semibold">Gói học *</legend>
          <div className="mt-1.5 grid gap-3 sm:grid-cols-3">
            {plans.map((p) => (
              <label key={p.id} className="cursor-pointer rounded-xl bg-cream-50 p-4 ring-1 ring-coffee-200 transition has-[:checked]:bg-coffee-50 has-[:checked]:ring-2 has-[:checked]:ring-coffee-600">
                <input type="radio" name="plan" value={p.id} defaultChecked={p.featured} className="sr-only" />
                <span className="block font-semibold">{p.name}</span>
                <span className="block text-sm text-espresso-700">{p.price}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold">Ca học mong muốn *</span>
          <select name="shift" defaultValue="toi" className={inputClass}>
            {shifts.map((s) => (
              <option key={s.id} value={s.id}>{s.label}</option>
            ))}
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold">Ghi chú</span>
          <textarea name="note" rows={3} maxLength={1000} placeholder="Bạn đã từng pha chế chưa? Mục tiêu sau khóa học là gì?" className={inputClass} />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
          Chưa gửi được đăng ký. Vui lòng thử lại hoặc gọi 090 123 4567.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-caramel-400 py-4 font-semibold text-espresso-900 transition hover:bg-caramel-500 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Đang gửi...
          </>
        ) : (
          <>
            Gửi đăng ký <Send className="h-5 w-5" />
          </>
        )}
      </button>
      <p className="mt-3 text-center text-xs text-espresso-700/70">Thông tin của bạn chỉ dùng để tư vấn khóa học.</p>
    </form>
  );
}

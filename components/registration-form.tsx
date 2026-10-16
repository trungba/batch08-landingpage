"use client";

import { useEffect, useRef, useState, type SubmitEvent } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ArrowRight, Check, CheckCircle2, Loader2, Lock, Phone } from "lucide-react";
import { db } from "@/lib/firebase";
import { contact, course, plans, shifts, vnd } from "@/lib/content";
import { SELECT_PLAN_EVENT } from "@/components/plan-link";

type Status = "idle" | "submitting" | "success" | "error";
type Field = "fullName" | "phone" | "email";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

// Cùng điều kiện với firestore.rules để báo lỗi ngay trên form thay vì bị Firestore từ chối
const PHONE_RE = /^(\+84|0)[0-9]{9,10}$/;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const FIELDS: Field[] = ["fullName", "phone", "email"];

/** Chuẩn hóa đúng như dữ liệu sẽ lưu vào Firestore. */
function normalize(raw: Values): Values {
  return {
    fullName: raw.fullName.trim(),
    phone: raw.phone.replace(/[\s.\-()]/g, ""),
    email: raw.email.trim().toLowerCase(),
  };
}

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.fullName.length < 2) errors.fullName = "Vui lòng nhập họ tên của bạn.";
  if (!PHONE_RE.test(v.phone)) errors.phone = "Số điện thoại chưa đúng, ví dụ 0901234567.";
  if (!EMAIL_RE.test(v.email)) errors.email = "Email chưa đúng, ví dụ ten@gmail.com.";
  return errors;
}

const defaultPlan = plans.find((p) => p.featured)?.id ?? plans[0].id;
const emptyValues: Values = { fullName: "", phone: "", email: "" };

const inputClass =
  "mt-1.5 w-full rounded-xl border-0 bg-cream-50 px-4 py-3.5 text-base text-espresso-900 ring-1 ring-coffee-200 transition placeholder:text-espresso-700/40 focus:bg-white focus:ring-2 focus:ring-coffee-500 focus:outline-none aria-[invalid=true]:bg-rose-50/60 aria-[invalid=true]:ring-rose-400";
const choiceClass =
  "relative cursor-pointer rounded-xl bg-cream-50 ring-1 ring-coffee-200 transition hover:ring-coffee-400 has-[:checked]:bg-coffee-50 has-[:checked]:ring-2 has-[:checked]:ring-coffee-600 has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-caramel-400";

const labels: Record<Field, { label: string; placeholder: string }> = {
  fullName: { label: "Họ và tên", placeholder: "Nguyễn Văn A" },
  phone: { label: "Số điện thoại", placeholder: "090 123 4567" },
  email: { label: "Email", placeholder: "ten@gmail.com" },
};

export function RegistrationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [slow, setSlow] = useState(false);
  const [plan, setPlan] = useState(defaultPlan);
  const [shift, setShift] = useState("toi");
  const [values, setValues] = useState<Values>(emptyValues);
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [submitted, setSubmitted] = useState<{ plan: string; shift: string; fullName: string; phone: string } | null>(null);
  const fieldRefs = useRef<Partial<Record<Field, HTMLInputElement | null>>>({});
  const successRef = useRef<HTMLDivElement>(null);

  // Thẻ cảm ơn ngắn hơn form: đưa nó vào giữa màn hình để người dùng thấy ngay kết quả
  useEffect(() => {
    if (status === "success") successRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [status]);

  // Nút chọn gói ở bảng giá cuộn tới đây và chọn sẵn gói tương ứng. Nếu đang hiện thẻ cảm ơn
  // thì form chưa có trong DOM lúc trình duyệt cuộn theo #anchor, nên cuộn lại sau khi render.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (plans.some((p) => p.id === id)) setPlan(id);
      if (document.getElementById("register-form")) return;
      setStatus("idle");
      requestAnimationFrame(() => document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" }));
    };
    window.addEventListener(SELECT_PLAN_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PLAN_EVENT, onSelect);
  }, []);

  const clean = normalize(values);
  const errors = validate(clean);
  const selectedPlan = plans.find((p) => p.id === plan)!;
  const selectedShift = shifts.find((s) => s.id === shift)!;

  async function onSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ fullName: true, phone: true, email: true });
    const firstInvalid = FIELDS.find((f) => errors[f]);
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    setStatus("submitting");
    // Firestore không báo lỗi khi mất mạng mà chờ gửi lại; báo người dùng thay vì để nút quay mãi
    const slowTimer = setTimeout(() => setSlow(true), 10_000);
    const note = String(new FormData(e.currentTarget).get("note") ?? "").trim();
    try {
      await addDoc(collection(db, "registrations"), { ...clean, plan, shift, note, createdAt: serverTimestamp() });
      setSubmitted({ plan, shift, fullName: clean.fullName, phone: clean.phone });
      setValues(emptyValues);
      setTouched({});
      setStatus("success");
    } catch (err) {
      console.error("Gửi đăng ký thất bại", err);
      setStatus("error");
    } finally {
      clearTimeout(slowTimer);
      setSlow(false);
    }
  }

  if (status === "success" && submitted) {
    const p = plans.find((x) => x.id === submitted.plan)!;
    const s = shifts.find((x) => x.id === submitted.shift)!;
    return (
      <div ref={successRef} className="rounded-3xl bg-white p-8 text-center text-espresso-900 shadow-2xl ring-1 ring-coffee-100 sm:p-10" role="status">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50 animate-rise">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-6 text-2xl font-extrabold">Cảm ơn {submitted.fullName.split(" ").at(-1)}, bạn đã giữ chỗ!</h3>
        <p className="mt-3 text-espresso-700">
          Tư vấn viên sẽ gọi tới <strong>{submitted.phone}</strong> trong vòng 24 giờ để xác nhận lịch học.
        </p>
        <dl className="mx-auto mt-6 grid max-w-sm gap-2 rounded-2xl bg-cream-50 p-4 text-left text-sm ring-1 ring-coffee-100">
          <div className="flex justify-between gap-4"><dt className="text-espresso-700">Khóa</dt><dd className="font-semibold">{course.cohort} · khai giảng {course.startLabel}</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-espresso-700">Gói</dt><dd className="font-semibold">{p.name} · {vnd(p.price)}</dd></div>
          <div className="flex justify-between gap-4"><dt className="text-espresso-700">Ca học</dt><dd className="font-semibold">{s.label} ({s.time})</dd></div>
        </dl>
        <a href={`tel:${contact.tel}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-coffee-700">
          <Phone className="h-4 w-4" /> Cần gấp? Gọi {contact.phone}
        </a>
        <button onClick={() => setStatus("idle")} className="mt-4 block w-full text-sm text-espresso-700 underline underline-offset-4 hover:text-coffee-900">
          Đăng ký thêm cho người khác
        </button>
      </div>
    );
  }

  return (
    <form id="register-form" onSubmit={onSubmit} noValidate className="scroll-mt-24 rounded-3xl bg-white p-5 text-espresso-900 shadow-2xl ring-1 ring-coffee-100 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-extrabold">Giữ chỗ khóa {course.cohort}</h3>
        <p className="text-sm text-espresso-700">Mất khoảng 1 phút</p>
      </div>

      <fieldset className="mt-6">
        <legend className="text-sm font-semibold">1. Chọn gói học</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-3">
          {plans.map((p) => (
            <label key={p.id} className={`${choiceClass} flex items-center justify-between gap-3 p-3.5 sm:block`}>
              <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} className="sr-only" />
              {p.featured && (
                <span className="absolute -top-2 left-3 rounded-full bg-caramel-400 px-2 py-0.5 text-[10px] leading-none font-bold tracking-wide text-espresso-900">PHỔ BIẾN</span>
              )}
              <span className="block font-semibold">{p.name}</span>
              <span className="block text-sm text-espresso-700 sm:mt-0.5">{vnd(p.price)}</span>
              {plan === p.id && <Check className="absolute top-2 right-2 hidden h-4 w-4 text-coffee-700 sm:block" />}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">2. Ca học mong muốn</legend>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {shifts.map(({ id, label, time, icon: Icon }) => (
            <label key={id} className={`${choiceClass} flex flex-col items-center p-3 text-center`}>
              <input type="radio" name="shift" value={id} checked={shift === id} onChange={() => setShift(id)} className="sr-only" />
              <Icon className="h-5 w-5 text-coffee-600" />
              <span className="mt-1 font-semibold">{label}</span>
              <span className="text-[11px] whitespace-nowrap text-espresso-700 sm:text-xs">{time}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">3. Thông tin liên hệ</legend>
        <div className="mt-1 grid gap-4 sm:grid-cols-2">
          {FIELDS.map((f) => {
            const err = touched[f] ? errors[f] : undefined;
            return (
              <label key={f} className={`block ${f === "fullName" ? "sm:col-span-2" : ""}`}>
                <span className="text-sm text-espresso-700">{labels[f].label}</span>
                <input
                  ref={(el) => {
                    fieldRefs.current[f] = el;
                  }}
                  name={f}
                  value={values[f]}
                  onChange={(e) => setValues((v) => ({ ...v, [f]: e.target.value }))}
                  onBlur={() => values[f] && setTouched((t) => ({ ...t, [f]: true }))}
                  placeholder={labels[f].placeholder}
                  aria-invalid={!!err}
                  aria-describedby={err ? `${f}-error` : undefined}
                  className={inputClass}
                  {...(f === "fullName" && { autoComplete: "name", maxLength: 100 })}
                  {...(f === "phone" && { type: "tel", inputMode: "tel" as const, autoComplete: "tel", maxLength: 20 })}
                  {...(f === "email" && { type: "email", inputMode: "email" as const, autoComplete: "email", maxLength: 200, autoCapitalize: "none", spellCheck: false })}
                />
                {err && (
                  <span id={`${f}-error`} className="mt-1 block text-sm text-rose-600">
                    {err}
                  </span>
                )}
              </label>
            );
          })}
          <label className="block sm:col-span-2">
            <span className="text-sm text-espresso-700">
              Ghi chú <span className="text-espresso-700/60">(không bắt buộc)</span>
            </span>
            <textarea name="note" rows={2} maxLength={1000} placeholder="Bạn đã từng pha chế chưa? Mục tiêu sau khóa học là gì?" className={inputClass} />
          </label>
        </div>
      </fieldset>

      {slow && (
        <p className="mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800" role="status">
          Mạng đang chậm, đăng ký vẫn đang được gửi, bạn đừng tắt trang nhé. Cần nhanh hơn? Gọi{" "}
          <a href={`tel:${contact.tel}`} className="font-semibold underline">{contact.phone}</a>.
        </p>
      )}

      {status === "error" && (
        <p className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">
          Chưa gửi được đăng ký. Vui lòng thử lại hoặc gọi{" "}
          <a href={`tel:${contact.tel}`} className="font-semibold underline">{contact.phone}</a>.
        </p>
      )}

      <div className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-cream-100 px-4 py-3 text-sm">
        <span className="text-espresso-700">
          <strong className="text-espresso-900">{selectedPlan.name}</strong> · ca {selectedShift.label.toLowerCase()}
        </span>
        <span className="text-right">
          <strong className="block text-base">{vnd(selectedPlan.price)}</strong>
          <span className="text-xs text-espresso-700 line-through">{vnd(selectedPlan.oldPrice)}</span>
        </span>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-caramel-400 py-4 text-lg font-bold text-espresso-900 shadow-lg shadow-caramel-500/30 transition hover:bg-caramel-300 disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Đang gửi...
          </>
        ) : (
          <>
            Giữ chỗ ngay <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </>
        )}
      </button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-espresso-700/80">
        <Lock className="h-3.5 w-3.5" /> Chưa cần thanh toán · Thông tin chỉ dùng để tư vấn khóa học
      </p>
    </form>
  );
}

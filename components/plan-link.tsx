"use client";

import type { ReactNode } from "react";

/** Sự kiện báo form đăng ký chọn sẵn gói học; `detail` là id gói. */
export const SELECT_PLAN_EVENT = "thecups:select-plan";

/** Link cuộn thẳng tới form đăng ký và chọn sẵn gói tương ứng. */
export function PlanLink({ plan, className, children }: { plan: string; className?: string; children: ReactNode }) {
  return (
    <a
      href="#register-form"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(SELECT_PLAN_EVENT, { detail: plan }))}
    >
      {children}
    </a>
  );
}

import type { CSSProperties } from "react";

/** Độ trễ so le cho phần tử `.reveal` thứ `i` trong một nhóm (mỗi bước 120ms). */
export const delay = (i: number) => ({ "--d": i }) as CSSProperties;

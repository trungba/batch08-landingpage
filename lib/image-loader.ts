/**
 * Ảnh Unsplash: xin CDN Unsplash đúng bề rộng trình duyệt cần (đã tính mật độ điểm ảnh),
 * thay vì phóng to một bản cố định nhỏ hơn màn hình (gây mờ trên điện thoại màn 3x).
 * Ảnh trong /public (logo) dùng nguyên bản.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("https://images.unsplash.com/")) return src;
  return `${src}?w=${width}&q=${quality ?? 82}&auto=format&fit=crop`;
}

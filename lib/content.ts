import {
  Award,
  BadgeCheck,
  Briefcase,
  Coffee,
  CupSoda,
  Flame,
  Frown,
  Heart,
  KeyRound,
  Leaf,
  MonitorPlay,
  Mountain,
  Store,
  Sun,
  Target,
  TrendingUp,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

export const unsplash = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const avatars = {
  ngocAnh: "1494790108377-be9c29b29330",
  minhQuan: "1507003211169-0a1dd7228f2d",
  thuHa: "1438761681033-6461ffad8d80",
};

export const navLinks = [
  { href: "#solution", label: "Khóa học" },
  { href: "#curriculum", label: "Lộ trình" },
  { href: "#testimonials", label: "Học viên" },
  { href: "#pricing", label: "Học phí" },
  { href: "#faq", label: "FAQ" },
];

export const heroBadge = { icon: Award, title: "Chứng chỉ Barista", text: "Được 50+ chuỗi cà phê công nhận" };

type IconCard = { icon: LucideIcon; title: string; text: string };

export const problems: (IconCard & { tone: string })[] = [
  { icon: Frown, tone: "bg-rose-100 text-rose-600", title: "Pha mãi vẫn đắng, chua", text: "Không hiểu chiết xuất, cỡ xay, tỷ lệ nên mỗi ly một vị, khó lặp lại." },
  { icon: MonitorPlay, tone: "bg-amber-100 text-amber-600", title: "Tự học qua video rời rạc", text: "Xem hàng trăm clip nhưng không ai sửa lỗi tay, không có máy để luyện." },
  { icon: Briefcase, tone: "bg-sky-100 text-sky-600", title: "Khó xin việc barista", text: "Quán tốt yêu cầu kinh nghiệm và chứng chỉ mà bạn chưa có." },
  { icon: Store, tone: "bg-coffee-100 text-coffee-600", title: "Mở quán mà thiếu nền tảng", text: "Lo chọn máy, chọn hạt, định lượng menu — sai một bước là tốn hàng chục triệu." },
];

export const features: IconCard[] = [
  { icon: Coffee, title: "Máy espresso thương mại", text: "1 học viên / 1 máy khi thực hành" },
  { icon: Users, title: "Lớp tối đa 8 người", text: "Giảng viên sửa lỗi từng động tác" },
  { icon: Video, title: "Học liệu video trọn đời", text: "Ôn lại mọi lúc sau khóa" },
  { icon: BadgeCheck, title: "Chứng chỉ & giới thiệu việc", text: "Kết nối 50+ quán đối tác" },
];

export const benefits: (IconCard & { variant: "dark" | "light" | "accent"; span: string })[] = [
  { icon: Target, variant: "dark", span: "md:col-span-3 lg:col-span-2", title: "Pha espresso chuẩn vị, ổn định", text: "Tự canh cỡ xay, liều lượng, thời gian chiết xuất để ly nào cũng ngon như ly nào." },
  { icon: Heart, variant: "light", span: "md:col-span-3 lg:col-span-2", title: "Thành thạo 6 mẫu latte art", text: "Heart, tulip, rosetta, swan… từ cơ bản đến nâng cao." },
  { icon: CupSoda, variant: "light", span: "md:col-span-2 lg:col-span-2", title: "30+ công thức đồ uống", text: "Cà phê Việt, specialty, cold brew và menu signature bán chạy." },
  { icon: TrendingUp, variant: "light", span: "md:col-span-2 lg:col-span-3", title: "Thu nhập barista 8–15 triệu/tháng", text: "Hồ sơ chứng chỉ và portfolio giúp bạn ứng tuyển vào các chuỗi cà phê specialty." },
  { icon: KeyRound, variant: "accent", span: "md:col-span-2 lg:col-span-3", title: "Tự tin mở quán của riêng mình", text: "Biết chọn máy, chọn hạt, tính giá vốn và setup quầy bar hiệu quả." },
];

export const modules = [
  {
    weeks: "Tuần 1–2 · Module 1",
    title: "Nền tảng cà phê",
    image: "1447933601403-0c6688de566e",
    alt: "Hạt cà phê rang",
    items: ["Giống cà phê, vùng trồng, sơ chế và mức rang", "Cupping và nhận diện hương vị", "Pha thủ công: phin, pour-over, French press"],
  },
  {
    weeks: "Tuần 3–4 · Module 2",
    title: "Espresso & máy pha",
    image: "1511920170033-f8396924c348",
    alt: "Portafilter và espresso",
    items: ["Cấu tạo, vận hành và vệ sinh máy espresso, máy xay", "Dosing, tamping, recipe và dial-in", "Chẩn đoán shot lỗi: under / over extraction"],
  },
  {
    weeks: "Tuần 5–6 · Module 3",
    title: "Sữa & Latte Art",
    image: "1509042239860-f550ce710b93",
    alt: "Ly latte art",
    items: ["Kỹ thuật đánh sữa microfoam, sữa thực vật", "Cappuccino, latte, flat white chuẩn tỷ lệ", "6 mẫu latte art từ heart đến swan"],
  },
  {
    weeks: "Tuần 7–8 · Module 4",
    title: "Menu & Vận hành quầy bar",
    image: "1461023058943-07fcbe16d735",
    alt: "Cà phê sữa đá",
    items: ["Cold brew, đồ uống đá và signature theo mùa", "Workflow quầy bar giờ cao điểm, tính giá vốn", "Thi thực hành cuối khóa & nhận chứng chỉ"],
  },
];

export const stats = [
  { value: 1200, suffix: "+", label: "Học viên tốt nghiệp" },
  { value: 92, suffix: "%", label: "Có việc sau 3 tháng" },
  { value: 50, suffix: "+", label: "Quán đối tác tuyển dụng" },
  { value: 4.9, suffix: "/5", label: "Đánh giá trung bình", static: true },
];

export const testimonials = [
  { name: "Ngọc Anh", role: "Head Barista, khóa K8", avatar: avatars.ngocAnh, featured: false, quote: "Trước đây mình pha theo cảm tính. Sau khóa học mình hiểu vì sao shot bị chua và tự dial-in được. Giờ mình là head barista ở một quán specialty tại Quận 3." },
  { name: "Minh Quân", role: "Chủ quán, khóa K10", avatar: avatars.minhQuan, featured: true, quote: "Module vận hành quầy bar giúp mình tiết kiệm cả chục triệu khi chọn máy và setup quán. Quán mình mở được 6 tháng và đã có lãi." },
  { name: "Thu Hà", role: "Barista, khóa K11", avatar: avatars.thuHa, featured: false, quote: "Lớp chỉ 8 người nên thầy sửa từng động tác rót sữa. Tuần thứ 6 mình đã vẽ được rosetta, điều mà tự học cả năm không làm nổi." },
];

export const partners: { icon: LucideIcon; name: string }[] = [
  { icon: Coffee, name: "BeanHouse" },
  { icon: Leaf, name: "Green Roast" },
  { icon: Mountain, name: "Highland Bloom" },
  { icon: Sun, name: "Morning Brew" },
  { icon: Flame, name: "Ember Roasters" },
];

export const plans = [
  {
    id: "co-ban",
    name: "Cơ Bản",
    desc: "Dành cho người yêu cà phê muốn pha ngon tại nhà",
    price: "2.900.000đ",
    oldPrice: "4.150.000đ",
    cta: "Chọn gói Cơ Bản",
    featured: false,
    items: [
      { text: "Module 1 & 2 (4 tuần)", included: true },
      { text: "Học liệu video 6 tháng", included: true },
      { text: "Giấy chứng nhận hoàn thành", included: true },
      { text: "Latte art & vận hành quầy", included: false },
      { text: "Hỗ trợ việc làm", included: false },
    ],
  },
  {
    id: "chuyen-nghiep",
    name: "Chuyên Nghiệp",
    desc: "Lộ trình đầy đủ để trở thành barista",
    price: "5.900.000đ",
    oldPrice: "8.430.000đ",
    cta: "Đăng ký gói Chuyên Nghiệp",
    featured: true,
    items: [
      { text: "Toàn bộ 4 module (8 tuần)", included: true },
      { text: "Học liệu video trọn đời", included: true },
      { text: "Chứng chỉ Barista Chuyên Nghiệp", included: true },
      { text: "Giới thiệu việc làm tại 50+ quán", included: true },
      { text: "Bộ dụng cụ latte art mang về", included: true },
    ],
  },
  {
    id: "chu-quan",
    name: "Chủ Quán",
    desc: "Cho người chuẩn bị mở quán cà phê",
    price: "11.900.000đ",
    oldPrice: "17.000.000đ",
    cta: "Chọn gói Chủ Quán",
    featured: false,
    items: [
      { text: "Mọi quyền lợi gói Chuyên Nghiệp", included: true },
      { text: "4 buổi 1-1 xây dựng menu & giá vốn", included: true },
      { text: "Tư vấn chọn máy, chọn hạt", included: true },
      { text: "Khảo sát mặt bằng quán", included: true },
      { text: "Hỗ trợ 3 tháng sau khai trương", included: true },
    ],
  },
];

// true/false hiển thị dấu tích/dấu x, chuỗi hiển thị nguyên văn
export const valueRows: [string, string | boolean, string | boolean][] = [
  ["Giờ thực hành trên máy thương mại", "Thuê máy ~150.000đ/giờ", "~38 giờ đã bao gồm"],
  ["Hạt cà phê & sữa luyện tập", "~1.500.000đ", "Đã bao gồm"],
  ["Bộ dụng cụ latte art", "~650.000đ", "Tặng kèm"],
  ["Giảng viên sửa lỗi trực tiếp", false, true],
  ["Chứng chỉ & giới thiệu việc làm", false, true],
];

export const faqs = [
  { q: "Tôi chưa biết gì về cà phê, có học được không?", a: "Hoàn toàn được. Module 1 bắt đầu từ kiến thức nền tảng và hơn 60% học viên của chúng tôi chưa từng đứng quầy bar trước khi nhập học." },
  { q: "Lịch học như thế nào? Tôi đi làm giờ hành chính.", a: "Mỗi khóa có 3 ca: sáng (8h–11h), chiều (14h–17h) và tối (18h30–21h30), học 2 buổi/tuần. Bạn có thể học bù ở ca khác khi bận." },
  { q: "Học phí đã bao gồm nguyên liệu chưa?", a: "Đã bao gồm toàn bộ hạt cà phê, sữa, syrup và dụng cụ trong suốt khóa học. Bạn không phải trả thêm bất kỳ chi phí nào." },
  { q: "Có được trả góp học phí không?", a: "Có. Bạn có thể chia học phí thành 2 lần: 50% khi đăng ký và 50% vào tuần thứ 4, không tính phí." },
  { q: "Nếu nghỉ một buổi thì sao?", a: "Bạn được học bù miễn phí ở lớp khác cùng chương trình, đồng thời xem lại video bài giảng trên hệ thống học liệu." },
  { q: "Chính sách hoàn học phí áp dụng thế nào?", a: "Trong 7 ngày đầu (tối đa 2 buổi học), bạn chỉ cần nhắn cho tư vấn viên là được hoàn 100% học phí trong vòng 3 ngày làm việc." },
];

export const contact = {
  address: "123 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh",
  phone: "090 123 4567",
  tel: "0901234567",
  email: "academy@thecups.coffee",
  hours: "8:00 – 21:30, Thứ 2 – Chủ nhật",
};

// Giá trị `id` được lưu vào Firestore và phải khớp với firestore.rules
export const shifts = [
  { id: "sang", label: "Sáng (8h–11h)" },
  { id: "chieu", label: "Chiều (14h–17h)" },
  { id: "toi", label: "Tối (18h30–21h30)" },
];

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center" data-anim="fadeInUp">
      <p className="text-sm font-semibold tracking-widest text-coffee-600 uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-espresso-700">{text}</p>}
    </div>
  );
}

import { reviews } from '@/data/content';
import Heading from '@/components/ui/Heading';
export default function Reviews() {
  return (<section className="mx-auto max-w-5xl px-5 py-14"><Heading title="آراء أصحاب البراندات" sub="كلام العملاء اللي اشتغلوا معايا بعد التسليم." />
    <div className="mt-6 grid gap-4 md:grid-cols-2">{reviews.map(([i, n, r, q]) => (
      <figure key={n} className="reveal rounded-3xl bg-white p-6 shadow-[0_14px_34px_-22px_rgba(120,70,40,.5)]">
        <div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-peach font-bold text-rust" aria-hidden="true">{i}</span><div><figcaption className="font-bold">{n}</figcaption><p className="text-xs text-mute">{r}</p></div></div>
          <span className="text-rust" aria-label="5 نجوم">★★★★★</span></div>
        <blockquote className="mt-4 text-sm leading-loose text-ink/85">“{q}”</blockquote></figure>))}</div></section>);
}

import { plans } from '@/data/content';
import { wa } from '@/lib/site';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Pricing() {
  return (<section id="pricing" className="mx-auto max-w-5xl px-5 py-14"><Heading title="باقات الأسعار" sub="اختار الباقة المناسبة لميزانيتك وهدفك." />
    <div className="mt-6 grid gap-5 md:grid-cols-3">{plans.map((p) => (
      <article key={p.title} className={`reveal flex flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_14px_34px_-22px_rgba(120,70,40,.5)] ${p.hot ? 'border-t-8 border-rust' : ''}`}>
        <div className="flex items-center justify-between"><span className={`rounded-full px-3 py-1.5 text-xs font-bold ${p.hot ? 'bg-rust text-white' : 'bg-peach text-mute'}`}>{p.tag}</span>
          <p className={`font-bold text-rust ${p.price.length > 5 ? 'text-xl' : 'text-2xl'}`}>{p.price} <span className="text-xs font-normal text-mute">{p.unit}</span></p></div>
        <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
        <ul className="mt-4 grid flex-1 content-start gap-3 text-sm text-ink/85">{p.items.map((i) => <li key={i} className="flex gap-2"><Icon n="check" size={16} className="mt-1 shrink-0 text-rust" />{i}</li>)}</ul>
        <a href={wa(`أهلاً، عايز أطلب: ${p.title}`)} target="_blank" rel="noopener noreferrer" className={`mt-6 ${p.hot ? 'btn-r' : 'btn-s'}`}>{p.hot && <Icon n="fire" size={16} />}{p.cta}</a></article>))}</div></section>);
}

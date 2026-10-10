import { results } from '@/data/content';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
export default function Results() {
  return (<section id="results" className="mx-auto max-w-3xl px-5 py-14"><Heading title="النتائج بالأرقام" sub="أرقام حقيقية من مؤشرات أداء المحتوى المنتج لعملائي." />
    <ul className="reveal mt-6 divide-y divide-rust/10 rounded-[2rem] bg-peach px-6 py-3">{results.map(([ic, n, t]) => (
      <li key={n} className="flex items-center gap-4 py-5"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-rust"><Icon n={ic} size={24} /></span>
        <div><p className="text-3xl font-bold text-rust">{n}</p><p className="mt-1 text-sm text-ink/80">{t}</p></div></li>))}</ul></section>);
}

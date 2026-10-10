import { steps } from '@/data/content';
import Heading from '@/components/ui/Heading';
const tone = ['bg-rust', 'bg-brown', 'bg-brown', 'bg-rust'];
export default function Process() {
  return (<section id="process" className="mx-auto max-w-3xl px-5 py-14"><Heading title="طريقة الشغل (4 خطوات بسيطة)" sub="من أول رسالة لحد الفيديو الجاهز للنشر." />
    <ol className="relative mt-8 grid gap-4"><span aria-hidden="true" className="absolute bottom-6 right-[19px] top-6 w-px bg-brown/30" />
      {steps.map(([t, d], i) => (<li key={t} className="reveal relative flex gap-4"><span className={`z-10 mt-4 grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ring-4 ring-bg ${tone[i]}`}>{i + 1}</span>
        <div className="flex-1 rounded-2xl bg-peach2 p-5"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{d}</p></div></li>))}</ol></section>);
}

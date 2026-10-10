import { site, wa } from "@/lib/site";
import Icon from "@/components/ui/Icon";
const soc = [
  ["ig", "Instagram", site.instagram],
  ["tt", "TikTok", site.tiktok],
  ["yt", "YouTube", site.youtube],
  ["fb", "Facebook", site.facebook],
];
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-xl px-4 pb-10 pt-6">
      <div className="rounded-[2.5rem] bg-brown p-7 text-center text-white">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/15">
          <Icon n="chat" size={24} />
        </span>
        <h2 className="mt-5 text-xl font-bold leading-relaxed">
          خلّي منتجك يتكلم… وأنا هتكفّل بكل التفاصيل.
        </h2>
        <div className="mt-6 grid gap-3">
          <a
            href={wa("أهلاً، عايز أتكلم معاك عن فيديو UGC لمنتجي")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-r w-full"
          >
            <Icon n="chat" size={18} />
            كلّمني على واتساب
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap justify-center gap-3" dir="ltr">
          {soc.map(([ic, l, h]) => (
            <li key={l}>
              <a
                href={h}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l}
                title={l}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white/90 transition duration-300 hover:-translate-y-0.5 hover:bg-white/25 hover:text-white"
              >
                <Icon n={ic} size={18} />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[11px] text-white/60">
          © 2026 {site.name}. جميع الحقوق محفوظة — {site.role}، المكان
          الاسماعيليه سرابيوم.
        </p>
      </div>
    </section>
  );
}

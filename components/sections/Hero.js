import { chipsL, chipsR } from "@/data/content";
import Icon from "@/components/ui/Icon";
const Chip = ({ children, cls }) => (
  <span
    dir="ltr"
    className={`${cls} rounded-full bg-white/70 px-3 py-2 text-xs font-semibold shadow-sm`}
  >
    {children}
  </span>
);
export default function Hero() {
  return (
    <section className="flex h-svh min-h-[580px] flex-col items-center justify-center px-5 pt-16 text-center">
      <div className="mb-6 flex w-full max-w-md justify-between">
        <div className="flex gap-2">
          {chipsR.map((c) => (
            <Chip key={c} cls="float">
              {c}
            </Chip>
          ))}
        </div>
        <div className="flex gap-2">
          {chipsL.map((c) => (
            <Chip key={c} cls="float2">
              {c}
            </Chip>
          ))}
        </div>
      </div>
      <p className="fade-up rounded-full bg-peach px-4 py-2 text-xs font-bold text-rust">
        UGC Creator • متاح لمشاريع جديدة
      </p>
      <h1 className="fade-up d1 mt-5 max-w-xl text-4xl font-bold leading-[1.45] md:text-6xl">
        حوّل منتجك لفيديو يخلّي الناس توقف سكرول…{" "}
        <span className="text-rust">ونشتري</span>
      </h1>
      <p className="fade-up d2 mt-4 max-w-md text-sm leading-relaxed text-mute md:text-base">
        فيديوهات UGC أصيلة بتبني ثقة وبتحوّل المشاهدة لمبيعات، لتيك توك وريلز
        والإعلانات الممولة.
      </p>
      <div className="fade-up d3 mt-8 w-full max-w-xs">
        <a href="#works" className="btn-r glow">
          شاهد أعمالي السابقة <Icon n="down" size={18} />
        </a>
      </div>
      <p className="fade-up d4 mt-5 flex gap-6 text-xs text-mute">
        <span>🔥 رد سريع</span>
        <span>✔ ضمان رضاك</span>
      </p>
    </section>
  );
}

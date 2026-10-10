import { site } from "@/lib/site";
import { nav } from "@/data/content";
import Icon from "@/components/ui/Icon";
export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="leading-tight">
            <span className="block font-bold">{site.name}</span>
            <span className="text-[11px] text-mute">{site.role} • مصر</span>
          </span>
        </a>
        <nav
          aria-label="القائمة الرئيسية"
          className="hidden gap-7 text-sm md:flex"
        >
          {nav.map(([id, l]) => (
            <a key={id} href={`#${id}`} className="hover:text-rust">
              {l}
            </a>
          ))}
        </nav>
        <details className="relative md:hidden">
          <summary
            aria-label="القائمة"
            className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full bg-peach text-lg"
          >
            ☰
          </summary>
          <div className="absolute left-0 mt-2 grid w-44 gap-1 rounded-2xl bg-white p-2 text-sm shadow-xl">
            {nav.map(([id, l]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-xl px-3 py-2 hover:bg-peach2"
              >
                {l}
              </a>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}

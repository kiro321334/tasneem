"use client";
import { useState } from "react";
import { works } from "@/data/content";
import Heading from "@/components/ui/Heading";
import VideoFrame from "@/components/ui/VideoFrame";
import Icon from "@/components/ui/Icon";
const LIMIT = 6;
export default function Works() {
  const [all, setAll] = useState(false);
  const shown = all ? works : works.slice(0, LIMIT);
  return (
    <section id="works" className="mx-auto max-w-5xl px-5 py-14">
      <Heading
        dot
        title="أفضل أعمالي"
        sub="مجموعة من الفيديوهات اللي حوّلت منتجات عادية لقصص بتبيع."
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 md:grid-cols-3">
        {shown.map((w) => (
          <VideoFrame key={w.id} w={w} />
        ))}
      </div>
      {works.length > LIMIT && (
        <div className="mt-6 text-center">
          <button
            type="button"
            aria-expanded={all}
            onClick={() => setAll(!all)}
            className="btn-s mx-auto max-w-xs"
          >
            <Icon n="down" size={16} className={all ? "rotate-180" : ""} />
            {all ? "عرض أقل" : `عرض المزيد (+${works.length - LIMIT} فيديوهات)`}
          </button>
        </div>
      )}
    </section>
  );
}

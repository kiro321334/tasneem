"use client";
import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/ui/Icon";
export default function VideoFrame({ w }) {
  const [on, setOn] = useState(false);
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-[0_14px_34px_-18px_rgba(120,70,40,.5)]">
      <div className="relative aspect-[9/14] bg-brown/30">
        {on ? (
          <video
            src={w.video}
            poster={w.poster}
            controls
            autoPlay
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => setOn(true)}
            aria-label={`تشغيل فيديو ${w.title}`}
            className="group absolute inset-0 block h-full w-full"
          >
            <Image
              src={w.poster}
              alt={`فيديو UGC: ${w.title}`}
              fill
              sizes="(min-width:768px) 25vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="ping absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-rust transition group-hover:scale-110">
              <Icon n="play" size={20} fill />
            </span>
          </button>
        )}
      </div>
      <div className="p-3">
        <h4 className="text-sm font-bold">{w.title}</h4>
      </div>
    </article>
  );
}

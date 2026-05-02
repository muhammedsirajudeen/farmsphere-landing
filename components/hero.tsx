"use client";

import { ArrowRight } from "lucide-react";
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-black">

      {/* Background */}
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/farm_video_final.mp4" // put in /public
        autoPlay
        muted
        loop
        playsInline
      />
      {/* VERY SUBTLE OVERLAY */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/20" /> */}

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full px-10 py-6 flex justify-between items-center backdrop-blur-md bg-white/60 border-b border-black/10 z-20">
        <div className="flex gap-8 text-sm text-black/70">
          <span className="hover:text-black cursor-pointer">About</span>
          <span className="hover:text-black cursor-pointer">Solutions</span>
          <span className="hover:text-black cursor-pointer">FAQ</span>
          <span className="hover:text-black cursor-pointer">Career</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full px-16 pt-32">

        <div className="grid grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h1 className="text-[64px] leading-[1.02] tracking-[-0.03em] font-[300] max-w-3xl">
              Rethink Farm Operations.
              <br />
              Optimize Costs.
              <br />
              Increase Margins.
            </h1>

            <div className="mt-8">
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
                Get Started
                <span className="bg-black text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <ArrowRight height={16} width={16}/>
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-end">
            <div className="max-w-xs text-sm text-black/70 leading-relaxed mt-6">
              Track input costs, analyze performance, and optimize procurement decisions —
              all in one system built for serious farming operations.
              <br />
              <span className="underline cursor-pointer text-black">
                Learn more →
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* PILLS */}
      <div className="absolute bottom-8 left-10 flex flex-wrap gap-3 text-xs z-20">
        {["Cost Control", "Procurement", "Efficiency", "Analytics", "ROI"].map((tag) => (
          <span
            key={tag}
            className="px-4 py-1.5 rounded-full border border-black/10 bg-white text-black shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* SCROLL */}
{/* SCROLL INDICATOR (SUBTLE + ANIMATED) */}
<div className="absolute bottom-8 right-10 z-20 animate-scroll-float">

  <div className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 shadow-sm">

    {/* Mouse */}
    <div className="w-4 h-7 border border-black/30 rounded-full flex items-start justify-center p-[2px]">
      <div className="w-[2px] h-[5px] bg-black/60 rounded-full animate-scroll-dot"></div>
    </div>

    {/* Label */}
    <span className="text-[9px] tracking-widest text-black/50">
      SCROLL
    </span>

  </div>

</div>
    </section>
  );
}
"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white text-black">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-110"
        src="/farm_video_final.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full px-6 sm:px-10 py-4 sm:py-6 flex justify-between items-center backdrop-blur-md bg-white/60 border-b border-black/10 z-20">
        <div className="hidden md:flex gap-8 text-sm text-black/70">
          <span className="hover:text-black cursor-pointer">About</span>
          <span className="hover:text-black cursor-pointer">Solutions</span>
          <span className="hover:text-black cursor-pointer">FAQ</span>
          <span className="hover:text-black cursor-pointer">Career</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full px-6 sm:px-10 lg:px-16 pt-24 sm:pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.03em] font-[300] max-w-3xl">
              Rethink Farm Operations.
              <br />
              Optimize Costs.
              <br />
              Increase Margins.
            </h1>

            <div className="mt-6 sm:mt-8">
    <button className="group flex items-center gap-3 bg-black text-white px-4 py-2.5 sm:px-5 rounded-full text-sm font-medium transition hover:scale-105">
      
      {/* TEXT */}
      <span className="pl-1">Get Started</span>

      {/* ICON CIRCLE */}
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
        <ArrowUpRight
          size={14}
          className="text-black transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        />
      </span>

    </button>
            </div>

            {/* MOBILE DESCRIPTION */}
            <div className="mt-6 text-sm text-black/70 leading-relaxed lg:hidden max-w-md">
              Track input costs, analyze performance, and optimize procurement decisions —
              all in one system built for serious farming operations.
            </div>
          </div>

          {/* RIGHT (desktop only style) */}
          <div className="hidden lg:flex justify-end">
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
      <div className="absolute bottom-6 left-4 sm:left-10 flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs z-20 max-w-[90%]">
        {["Cost Control", "Procurement", "Efficiency", "Analytics", "ROI"].map((tag) => (
          <span
            key={tag}
            className="px-3 sm:px-4 py-1.5 rounded-full border border-black/10 bg-white text-black shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hidden sm:block absolute bottom-8 right-6 lg:right-10 z-20 animate-scroll-float">
        <div className="flex flex-col items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 shadow-sm">

          <div className="w-4 h-7 border border-black/30 rounded-full flex items-start justify-center p-[2px]">
            <div className="w-[2px] h-[5px] bg-black/60 rounded-full animate-scroll-dot"></div>
          </div>

          <span className="text-[9px] tracking-widest text-black/50">
            SCROLL
          </span>

        </div>
      </div>

    </section>
  );
}
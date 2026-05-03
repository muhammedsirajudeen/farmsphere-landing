"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    image: "/farm1.jpg",
    title: "Optimized by Design",
    desc: "Move from reactive workflows to structured, data-driven farm operations.",
  },
  {
    image: "/farm2.jpg",
    title: "Cost Visibility",
    desc: "Track every input cost and eliminate hidden inefficiencies.",
  },
  {
    image: "/farm3.jpg",
    title: "Procurement Intelligence",
    desc: "Make smarter purchasing decisions backed by real data.",
  },
];

export default function ShowcaseSection() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="solutions"
      ref={ref}
      className="w-full bg-[#f5f5f5] px-6 sm:px-10 lg:px-16 py-16 sm:py-20 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT - CAROUSEL */}
        <div
          className={`relative rounded-2xl overflow-hidden h-[420px] sm:h-[550px] lg:h-[700px] transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src={slides[index].image}
            className="w-full h-full object-cover transition duration-700"
            alt=""
          />

          {/* STEP PROGRESS */}
          <div className="absolute top-5 left-4 right-4 flex gap-2">
            {slides.map((_, i) => {
              const isCompleted = i < index;
              const isActive = i === index;
              return (
                <div key={i} className="flex-1 h-[5px] bg-white/25 rounded-full overflow-hidden">
                  <div
                    key={isActive ? index : isCompleted ? "done" : "idle"}
                    className={`h-full ${
                      isCompleted
                        ? "bg-white/80 w-full"
                        : isActive
                        ? "bg-white animate-step-progress"
                        : "bg-white/30 w-0"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* BLUR TEXT OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[2px]" />
            <div className="relative text-white max-w-lg">
              <h3 className="text-2xl sm:text-3xl sm:text-4xl font-medium">
                {slides[index].title}
              </h3>
              <p className="text-sm sm:text-base text-white/80 mt-2 sm:mt-3">
                {slides[index].desc}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-rows-[auto_auto] lg:grid-rows-2 gap-6 lg:h-[700px]">

          {/* TOP CARD */}
          <div
            className={`bg-[#e8e4d8] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-700 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="flex justify-between items-end">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full border border-black/40" />
                <div className="w-8 h-8 rounded-full border border-black/30 -ml-3 translate-y-[2px]" />
                <div className="w-8 h-8 rounded-full border border-black/20 -ml-3 -translate-y-[2px]" />
              </div>
              <span className="text-xs text-black/60">© 2024</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight font-medium mt-4 sm:mt-6">
              We help farms move from inefficient operations to optimized systems.
            </h3>

            <p className="text-sm text-black/60 mt-3 sm:mt-4">
              &quot;Farms often operate without structured visibility, leading to hidden inefficiencies and cost leakage.&quot;
              <br />
              <span className="text-black mt-2 block">— FarmSphere Insight</span>
            </p>
          </div>

          {/* TESTIMONIAL */}
          <div
            className={`relative rounded-2xl overflow-hidden bg-cover bg-center transition-all duration-700 ease-out min-h-[260px] sm:min-h-[300px] lg:min-h-0 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              backgroundImage: "url('/testimonial_bg.png')",
              transitionDelay: "300ms",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* AVATARS — responsive layout */}
            <div className="absolute inset-0">
              {/* Mobile: distributed in corners + center */}
              <img
                src="/avatar1.jpg"
                className="absolute top-4 left-5 w-14 h-14 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full border-4 border-white object-cover"
                alt=""
              />
              <img
                src="/avatar2.jpg"
                className="absolute top-4 right-5 w-14 h-14 sm:w-20 sm:h-20 lg:top-10 lg:right-10 rounded-full border-4 border-white object-cover"
                alt=""
              />
              <img
                src="/avatar3.jpg"
                className="absolute bottom-10 left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 lg:left-16 rounded-full border-4 border-white object-cover"
                alt=""
              />
              <img
                src="/avatar4.jpg"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-full border-4 border-white object-cover"
                alt=""
              />
            </div>

            {/* CTA */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
              <button className="group flex items-center gap-3 bg-[#e6a756] text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
                <span>See testimonials</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                  />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .animate-step-progress {
          animation: stepProgress 4s linear forwards;
        }
        @keyframes stepProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsBar() {
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

  const stats = [
    {
      value: "90–150",
      suffix: "K",
      prefix: "₹",
      label: "Annual cost leakage per farm due to inefficiencies.",
    },
    {
      value: "3–5",
      suffix: "%",
      label: "Input inefficiency across feed and operational consumption.",
    },
    {
      value: "36–90",
      suffix: "K",
      prefix: "₹",
      label: "Potential yearly savings through optimization.",
    },
    {
      value: "18",
      suffix: "L",
      prefix: "₹",
      label: "Average annual input spend per farm.",
    },
  ];

  return (
    <section
    id="stats"
      ref={ref}
      className="w-full bg-black text-white py-10 sm:py-14 px-6 sm:px-10 lg:px-16 overflow-hidden"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 transform transition-all duration-700 ease-out ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{
              transitionDelay: visible ? `${i * 120}ms` : "0ms",
            }}
          >
            {/* VALUE */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-medium flex items-baseline gap-1">
              
              {/* prefix (₹) */}
              {stat.prefix && (
                <span className="text-white/70 text-lg sm:text-xl lg:text-2xl">
                  {stat.prefix}
                </span>
              )}

              {/* main number */}
              <span>{stat.value}</span>

              {/* suffix (%, L, K) */}
              <span className="text-white/60 text-lg sm:text-xl lg:text-2xl">
                {stat.suffix}
              </span>
            </div>

            {/* LABEL */}
            <div className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-xs">
              {stat.label}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
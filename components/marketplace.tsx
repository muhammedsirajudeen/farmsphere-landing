"use client";

import { useEffect, useRef, useState } from "react";

export default function MarketplaceSection({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isLight = theme === "light";
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Vendor Transparency",
      desc: "Compare multiple suppliers and make informed purchasing decisions.",
    },
    {
      title: "Better Pricing",
      desc: "Leverage aggregated demand and benchmark pricing.",
    },
    {
      title: "Procurement History",
      desc: "Maintain structured purchase records and spending visibility.",
    },
    {
      title: "Planning & Forecasting",
      desc: "Plan purchases based on operational needs and consumption patterns.",
    },
    {
      title: "Improved Cash Flow",
      desc: "Optimize procurement cycles and avoid unplanned purchases.",
    },
  ];

  const steps = [
    "Create your FarmSphere account.",
    "Record farm operations and input usage.",
    "Receive procurement recommendations.",
    "Compare suppliers and pricing.",
    "Purchase through the marketplace.",
    "Track spending and performance impact.",
  ];

  return (
    <section
      id="marketplace"
      ref={ref}
      className={`relative w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden ${isLight ? "bg-white text-black" : "bg-black text-white"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span className="text-[#e6a756] font-semibold text-sm tracking-wider uppercase">
            FarmSphere Marketplace
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4">
            Smarter Agricultural Procurement
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isLight ? "text-black/60" : "text-white/60"}`}>
            The FarmSphere Marketplace connects professional farms with trusted
            suppliers, enabling transparent, efficient, and cost-effective
            procurement.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* LEFT COLUMN - STEPS GRAPH */}
          <div
            className={`flex flex-col transition-all duration-700 delay-200 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="text-2xl sm:text-3xl font-medium mb-10">How It Works</h3>
            <div className="relative ml-4 pl-12 space-y-16">
              {/* Background static line */}
              <div className={`absolute left-0 top-4 bottom-2 w-px ${isLight ? "bg-black/10" : "bg-white/10"}`} />

              {/* Animated growing line */}
              <div
                className="absolute left-0 top-4 w-px bg-gradient-to-b from-[#e6a756] via-[#e6a756] to-transparent transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  height: visible ? "100%" : "0%",
                  transitionDuration: "2500ms",
                  transitionDelay: "300ms"
                }}
              />

              {steps.map((step, i) => (
                <div key={i} className="relative group">
                  {/* Pulsating dot */}
                  <div
                    className={`absolute -left-[58px] top-1 transition-all duration-700 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                      }`}
                    style={{ transitionDelay: `${400 + i * 300}ms` }}
                  >
                    <div className="relative flex h-6 w-6 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6a756] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-[#e6a756] shadow-[0_0_12px_#e6a756]"></span>
                    </div>
                  </div>
                  <h4
                    className={`font-medium text-xl sm:text-2xl transition-colors duration-300 group-hover:text-[#e6a756] ${isLight ? "text-black" : "text-white"
                      }`}
                  >
                    Step {i + 1}
                  </h4>
                  <p className={`text-base sm:text-lg mt-3 max-w-sm leading-relaxed ${isLight ? "text-black/60" : "text-white/60"}`}>
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - BENEFITS & CATEGORIES */}
          <div
            className={`flex flex-col gap-12 sm:gap-16 transition-all duration-700 delay-400 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {/* BENEFITS */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium mb-8">Marketplace Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((b, i) => (
                  <div
                    key={i}
                    className={`p-6 border rounded-2xl transition-colors duration-300 ${isLight
                      ? "border-black/10 bg-black/5 hover:bg-black/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                      }`}
                  >
                    <div className="text-[#e6a756] font-bold text-xl sm:text-2xl mb-4">
                      0{i + 1}
                    </div>
                    <h4 className="font-medium text-base sm:text-lg">{b.title}</h4>
                    <p className={`text-sm mt-2 ${isLight ? "text-black/60" : "text-white/60"}`}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

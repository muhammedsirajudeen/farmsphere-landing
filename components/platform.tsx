"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function PlatformSection() {
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

  const pricing = [
    {
      plan: "Starter",
      price: "₹1,499",
      period: "/ Month",
      desc: "Perfect for small professional farms.",
      features: [
        "Farm activity recording",
        "Basic analytics",
        "Procurement access",
        "Standard support",
      ],
      highlight: false,
      buttonText: "Get Started",
    },
    {
      plan: "Professional",
      price: "₹2,999",
      period: "/ Month",
      desc: "For growing commercial farms.",
      features: [
        "Advanced analytics",
        "Procurement planning",
        "Vendor comparison",
        "Cost optimization tools",
        "Priority support",
      ],
      highlight: true,
      buttonText: "Get Started",
    },
    {
      plan: "Premium",
      price: "₹5,499",
      period: "/ Month",
      desc: "For large-scale professional operations.",
      features: [
        "Complete intelligence suite",
        "Advanced benchmarking",
        "Multi-farm management",
        "Predictive planning",
        "Dedicated account support",
      ],
      highlight: false,
      buttonText: "Get Started",
    },
    {
      plan: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Customized solution for large agricultural operations.",
      features: [
        "Everything in Premium",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantees",
        "Tailored onboarding",
      ],
      highlight: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section
      id="platform"
      ref={ref}
      className="relative w-full bg-[#fcfcfc] text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto" id="pricing">
        {/* HEADER */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-black/50 font-semibold text-sm tracking-wider uppercase">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4">
            Flexible Plans for Every Farm
          </h2>
          <p className="text-black/60 mt-4 text-base sm:text-lg">
            Choose the right FarmSphere plan to optimize your operations and scale your agricultural business.
          </p>
        </div>

        {/* PRICING */}
        <div
          className={`transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {pricing.map((p, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-6 xl:p-8 rounded-3xl ${
                  p.highlight
                    ? "bg-black text-white shadow-xl scale-100 lg:scale-105 z-10"
                    : "bg-white border border-black/10 text-black"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e6a756] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium">{p.plan}</h3>
                <p
                  className={`text-sm mt-2 h-10 ${
                    p.highlight ? "text-white/70" : "text-black/60"
                  }`}
                >
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl xl:text-4xl font-semibold">{p.price}</span>
                  <span
                    className={`text-sm ${
                      p.highlight ? "text-white/70" : "text-black/60"
                    }`}
                  >
                    {p.period}
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-4 flex-1">
                  {p.features.map((feat, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2
                         size={18}
                        className={`shrink-0 ${
                          p.highlight ? "text-[#e6a756]" : "text-black/40"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          p.highlight ? "text-white/90" : "text-black/80"
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-8 w-full py-3 rounded-full text-sm font-medium transition ${
                    p.highlight
                      ? "bg-[#e6a756] text-black hover:bg-[#d89945]"
                      : "bg-black text-white hover:bg-black/80"
                  }`}
                >
                  {p.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

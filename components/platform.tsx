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

  const features = [
    {
      title: "Farm Management",
      desc: "Track livestock, production cycles, treatments, feed consumption, and operational activities.",
    },
    {
      title: "Performance Analytics",
      desc: "Monitor efficiency metrics, cost structures, and production performance.",
    },
    {
      title: "Procurement Planning",
      desc: "Align purchasing decisions with operational requirements.",
    },
    {
      title: "Cost Management",
      desc: "Analyze spending patterns and identify cost-saving opportunities.",
    },
    {
      title: "Benchmarking",
      desc: "Compare performance across farms, regions, and production cycles.",
    },
    {
      title: "Vendor Management",
      desc: "Manage supplier relationships and procurement history.",
    },
    {
      title: "Subscription & Billing",
      desc: "Flexible plans designed for farms of different sizes.",
    },
  ];

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
    },
  ];

  return (
    <section
      id="platform"
      ref={ref}
      className="relative w-full bg-[#fcfcfc] text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-black/50 font-semibold text-sm tracking-wider uppercase">
            FarmSphere Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4">
            Your Complete Farm Operating System
          </h2>
          <p className="text-black/60 mt-4 text-base sm:text-lg">
            FarmSphere combines operational intelligence, analytics, planning, and
            procurement into one powerful platform.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-lg text-black">{feat.title}</h3>
              <p className="text-black/60 text-sm mt-2 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
          
          <div className="bg-black text-white p-6 rounded-2xl flex flex-col justify-center items-start lg:col-span-2">
            <h3 className="font-medium text-xl">Request Enterprise Pricing</h3>
            <p className="text-white/70 text-sm mt-2 max-w-md">
              Need a customized solution for large agricultural operations? Contact our team for tailored pricing and onboarding.
            </p>
            <button className="mt-4 px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition">
              Contact Sales
            </button>
          </div>
        </div>

        {/* PRICING */}
        <div
          id="pricing"
          className={`mt-24 transition-all duration-700 delay-300 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium">Pricing Plans</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((p, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-8 rounded-3xl ${
                  p.highlight
                    ? "bg-black text-white shadow-xl scale-100 md:scale-105 z-10"
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
                  className={`text-sm mt-2 ${
                    p.highlight ? "text-white/70" : "text-black/60"
                  }`}
                >
                  {p.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold">{p.price}</span>
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
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

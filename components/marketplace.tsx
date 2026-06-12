"use client";

import { useEffect, useRef, useState } from "react";
import { ShoppingCart, TrendingDown, ClipboardList, LineChart, Wallet } from "lucide-react";

export default function MarketplaceSection() {
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
      icon: <ShoppingCart size={24} className="text-[#e6a756]" />,
      title: "Vendor Transparency",
      desc: "Compare multiple suppliers and make informed purchasing decisions.",
    },
    {
      icon: <TrendingDown size={24} className="text-[#e6a756]" />,
      title: "Better Pricing",
      desc: "Leverage aggregated demand and benchmark pricing.",
    },
    {
      icon: <ClipboardList size={24} className="text-[#e6a756]" />,
      title: "Procurement History",
      desc: "Maintain structured purchase records and spending visibility.",
    },
    {
      icon: <LineChart size={24} className="text-[#e6a756]" />,
      title: "Planning & Forecasting",
      desc: "Plan purchases based on operational needs and consumption patterns.",
    },
    {
      icon: <Wallet size={24} className="text-[#e6a756]" />,
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
      className="relative w-full bg-white text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div
          className={`text-center max-w-3xl mx-auto transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#e6a756] font-semibold text-sm tracking-wider uppercase">
            FarmSphere Marketplace
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4">
            Smarter Agricultural Procurement
          </h2>
          <p className="text-black/60 mt-4 text-base sm:text-lg">
            The FarmSphere Marketplace connects professional farms with trusted
            suppliers, enabling transparent, efficient, and cost-effective
            procurement.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* BENEFITS */}
          <div
            className={`flex flex-col gap-8 transition-all duration-700 delay-200 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-medium mb-6">Marketplace Benefits</h3>
              <div className="flex flex-col gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="p-3 bg-[#f5f5f5] rounded-xl shrink-0">
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">{b.title}</h4>
                      <p className="text-black/60 text-sm mt-1">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - STEPS & CATEGORIES */}
          <div
            className={`flex flex-col gap-10 transition-all duration-700 delay-400 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* CATEGORIES */}
            <div className="bg-[#f5f5f5] p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">What you can purchase</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Feed & Nutritional Products",
                  "Veterinary Medicines",
                  "Health & Wellness Products",
                  "Farm Equipment",
                  "Agricultural Consumables",
                  "Operational Supplies",
                ].map((cat, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium border border-black/5"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {/* HOW IT WORKS */}
            <div>
              <h3 className="text-2xl font-medium mb-6">How It Works</h3>
              <div className="relative border-l border-black/10 ml-3 pl-6 space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-black border-4 border-white" />
                    <h4 className="font-medium text-base text-black/80">
                      Step {i + 1}
                    </h4>
                    <p className="text-sm text-black/60 mt-1">{step}</p>
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

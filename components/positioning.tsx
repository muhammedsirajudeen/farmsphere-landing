"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function PositioningSection() {
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
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const text =
        "FarmSphere Technologies is building the future of commercial agriculture through a unified platform that combines operational intelligence, procurement optimization, and financial performance management.";

    return (
        <section
            id="about"
            ref={ref}
            className="relative w-full bg-[#f5f5f5] text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                {/* LEFT */}
                <div className="max-w-xs text-sm text-black/60 leading-relaxed">
                    <p>
                        Our mission is to help commercial farms transform routine farming activities into measurable business outcomes through data, analytics, and smarter purchasing decisions.
                    </p>
                    <p className="mt-4">
                        We believe that successful farming is not only about production—it's about profitability, operational efficiency, and sustainable growth.
                    </p>

                    <div className="mt-4 text-black underline cursor-pointer">
                        Learn more about our Vision →
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-2">
                    <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.1] tracking-[-0.02em] font-[400] max-w-4xl flex flex-wrap">

                        {text.split(" ").map((word, i) => (
                            <span
                                key={i}
                                className={`mr-2 transition-colors duration-500 ${visible ? "text-black" : "text-black/20"
                                    }`}
                                style={{
                                    transitionDelay: visible ? `${i * 80}ms` : "0ms",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {word}
                            </span>
                        ))}

                    </h2>

                    {/* CTA */}
                    <div className="mt-8">
                        <button className="group flex items-center gap-3 bg-[#e6a756] text-black px-4 py-2 rounded-full text-sm font-medium transition hover:scale-105">

                            {/* TEXT */}
                            <span className="pl-1">Get Started</span>

                            {/* ICON CIRCLE */}
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
        </section>
    );
}
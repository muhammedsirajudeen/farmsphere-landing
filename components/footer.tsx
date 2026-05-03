"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-black text-white px-6 sm:px-10 lg:px-16 py-16"
    >
      {/* TOP */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="flex flex-col gap-5">
          {/* LOGO */}
          <div className="w-[140px]">
            <Image
              src={"/black_logo.png"}
              height={140}
              width={140}
              alt="FarmSphere logo"
              className="object-contain"
              priority
            />
          </div>

          {/* TEXT */}
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Bringing structure, visibility, and intelligence to modern farm operations.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="text-sm text-white/80 mb-4">Product</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white transition cursor-pointer">
              Features
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Pricing
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Solutions
            </span>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm text-white/80 mb-4">Company</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white transition cursor-pointer">
              About
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Careers
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Contact
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm text-white/80">Get Started</h3>

          <button className="group flex items-center gap-3 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition w-fit">
            <span>Book a Demo</span>

            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black">
              <ArrowUpRight
                size={14}
                className="text-white transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>
          </button>

          {/* subtle reinforcement */}
          <p className="text-xs text-white/40 max-w-[180px]">
            See how FarmSphere improves margins with structured intelligence.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-14 border-t border-white/10" />

      {/* BOTTOM */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <span>
          © {new Date().getFullYear()} FarmSphere. All rights reserved.
        </span>

        <div className="flex gap-6">
          <span className="hover:text-white transition cursor-pointer">
            Privacy
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
}
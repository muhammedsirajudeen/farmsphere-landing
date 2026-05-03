"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-black text-white px-6 sm:px-10 lg:px-16 py-16">

      {/* TOP */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
            <Image src={"/logo.png"} height={20} width={20} alt="logo"/>
          <h2 className="text-lg font-medium">FarmSphere</h2>
          <p className="text-sm text-white/60 mt-4 max-w-xs">
            Bringing structure, visibility, and intelligence to modern farm operations.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm text-white/80 mb-4">Product</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer">Features</span>
            <span className="hover:text-white cursor-pointer">Pricing</span>
            <span className="hover:text-white cursor-pointer">Solutions</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm text-white/80 mb-4">Company</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white cursor-pointer">About</span>
            <span className="hover:text-white cursor-pointer">Careers</span>
            <span className="hover:text-white cursor-pointer">Contact</span>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="text-sm text-white/80 mb-4">Get Started</h3>

          <button className="group flex items-center gap-3 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
            
            <span>Book a Demo</span>

            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black">
              <ArrowUpRight
                size={14}
                className="text-white transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>

          </button>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="mt-12 border-t border-white/10" />

      {/* BOTTOM */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
        
        <span>© {new Date().getFullYear()} FarmSphere. All rights reserved.</span>

        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer">Privacy</span>
          <span className="hover:text-white cursor-pointer">Terms</span>
        </div>

      </div>

    </footer>
  );
}
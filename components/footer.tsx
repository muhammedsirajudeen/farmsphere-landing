"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full bg-black text-white px-6 sm:px-10 lg:px-16 py-16"
    >
      {/* TOP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* BRAND */}
        <div className="flex flex-col gap-5 lg:col-span-2">
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
            Empowering Commercial Agriculture Through Intelligence & Procurement.
          </p>

          <div className="flex flex-col gap-2 mt-4 text-sm text-white/60">
            <span>📧 info@farmsphere.app</span>
            <span>📞 +91 XXXXX XXXXX</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Quick Links</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white transition cursor-pointer">Home</span>
            <span className="hover:text-white transition cursor-pointer">About Us</span>
            <span className="hover:text-white transition cursor-pointer">Marketplace</span>
            <span className="hover:text-white transition cursor-pointer">Platform</span>
            <span className="hover:text-white transition cursor-pointer">Pricing</span>
            <span className="hover:text-white transition cursor-pointer">Contact Us</span>
          </div>
        </div>

        {/* PLATFORM */}
        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Platform</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white transition cursor-pointer">Farm Management</span>
            <span className="hover:text-white transition cursor-pointer">Analytics</span>
            <span className="hover:text-white transition cursor-pointer">Marketplace</span>
            <span className="hover:text-white transition cursor-pointer">Procurement Planning</span>
            <span className="hover:text-white transition cursor-pointer">Vendor Network</span>
          </div>
        </div>

        {/* COMPANY & SOCIAL */}
        <div>
          <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Company</h3>
          <div className="flex flex-col gap-3 text-sm text-white/60">
            <span className="hover:text-white transition cursor-pointer">About FarmSphere</span>
            <span className="hover:text-white transition cursor-pointer">Milestones</span>
            <span className="hover:text-white transition cursor-pointer">Careers</span>
            <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="mt-14 border-t border-white/10" />

      {/* BOTTOM */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
        <span>
          © 2026 FarmSphere Technologies. All Rights Reserved.
        </span>

        <div className="flex gap-6">
          <span className="hover:text-white transition cursor-pointer">Facebook</span>
          <span className="hover:text-white transition cursor-pointer">Instagram</span>
          <span className="hover:text-white transition cursor-pointer">LinkedIn</span>
          <span className="hover:text-white transition cursor-pointer">YouTube</span>
          <span className="hover:text-white transition cursor-pointer">X (Twitter)</span>
        </div>
      </div>
    </footer>
  );
}
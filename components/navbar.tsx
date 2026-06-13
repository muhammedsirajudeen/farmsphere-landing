"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Marketplace", href: "/#marketplace" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div 
        className={`fixed top-0 left-0 w-full px-6 sm:px-10 flex justify-between items-center z-30 transition-all duration-300 ${
          isScrolled 
            ? "py-3 sm:py-4 bg-white/70 backdrop-blur-lg border-b border-black/10 shadow-[0_4px_30px_rgba(0,0,0,0.03)]" 
            : "py-4 sm:py-6 bg-transparent border-b border-transparent"
        }`}
      >

        {/* BRAND LOCKUP */}
{/* BRAND LOCKUP */}
<div className="flex items-center gap-3 cursor-pointer group">
  <div className="relative">
    <div className="absolute inset-0 rounded-xl  scale-110 group-hover:scale-125 transition-transform duration-500" />
    <Image
      src={"/logo1.png"}
      height={60}
      width={60}
      alt="FarmSphere logo"
      className="object-contain relative z-10"
    />
  </div>

  <div className="flex flex-col leading-none gap-[3px]">
    <span className="text-[15px] font-semibold tracking-[-0.02em] text-black">
      Farmsphere
    </span>
    <span className="text-[9px] font-medium tracking-[0.18em] text-black/40 uppercase">
      Technologies
    </span>
  </div>
</div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm text-black/70">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="relative hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden transition hover:scale-110"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        className={`fixed inset-0 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* PANEL */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-80"
          }`}
        >
          <div className="p-6 flex flex-col gap-10">

            {/* HEADER */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Image
                  src={"/logo1.png"}
                  height={28}
                  width={28}
                  alt="logo"
                />
                <span className="text-sm font-medium">FarmSphere</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="transition-transform duration-200 hover:rotate-90"
              >
                <X size={22} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-6 text-lg">
              {links.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`text-left hover:text-black/70 transition-all duration-500 ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 80 + 150}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
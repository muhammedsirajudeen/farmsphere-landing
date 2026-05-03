"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full px-6 sm:px-10 py-4 sm:py-5 flex justify-between items-center backdrop-blur-md bg-white border-b border-black/10 z-30">

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
            <button
              key={link.name}
              onClick={() => handleScroll(link.href.replace("#", ""))}
              className="relative hover:text-black transition"
            >
              {link.name}
            </button>
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
                <button
                  key={link.name}
                  onClick={() => handleScroll(link.href.replace("#", ""))}
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
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
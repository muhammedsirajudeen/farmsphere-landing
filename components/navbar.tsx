"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Solutions", href: "#solutions" },
  { name: "Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // prevent background scroll when open
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
      <div className="absolute top-0 left-0 w-full px-6 sm:px-10 py-4 sm:py-6 flex justify-between items-center backdrop-blur-md bg-white/60 border-b border-black/10 z-30">
        
        <a href="#home" className="text-sm font-medium cursor-pointer">
          FarmSphere
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm text-black/70">
{links.map((link) => (
  <button
    key={link.name}
    onClick={() => handleScroll(link.href.replace("#", ""))}
    className="hover:text-black cursor-pointer transition"
  >
    {link.name}
  </button>
))}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(true)} className="md:hidden">
          <Menu size={22} />
        </button>
      </div>

      {/* SIDEBAR WRAPPER */}
      <div
        className={`fixed inset-0 z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ease-out ${
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
          <div className="p-6 flex flex-col gap-8">

            {/* CLOSE */}
            <div className="flex justify-end">
              <button
                onClick={() => setOpen(false)}
                className="transition-transform duration-200 hover:rotate-90"
              >
                <X size={22} />
              </button>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-6 text-lg">
{links.map((link, i) => (
  <button
    key={link.name}
    onClick={() => handleScroll(link.href.replace("#", ""))}
    className={`text-left cursor-pointer hover:text-black/70 transition-all duration-500 ${
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
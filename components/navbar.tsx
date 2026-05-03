"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // prevent background scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full px-6 sm:px-10 py-4 sm:py-6 flex justify-between items-center backdrop-blur-md bg-white/60 border-b border-black/10 z-30">
        
        <div className="text-sm font-medium">FarmSphere</div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm text-black/70">
          {["About", "Solutions", "FAQ", "Career"].map((item) => (
            <span key={item} className="hover:text-black cursor-pointer">
              {item}
            </span>
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
              {["About", "Solutions", "FAQ", "Career"].map((item, i) => (
                <span
                  key={item}
                  onClick={() => setOpen(false)}
                  className={`cursor-pointer hover:text-black/70 transition-all duration-500 ${
                    open
                      ? "translate-x-0 opacity-100"
                      : "translate-x-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 80 + 150}ms` : "0ms",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
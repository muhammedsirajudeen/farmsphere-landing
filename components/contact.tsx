"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactSection() {
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

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full bg-white text-black px-6 sm:px-10 lg:px-16 py-16 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT - INFO */}
        <div
          className={`flex flex-col justify-center transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-[#e6a756] font-semibold text-sm tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mt-4 leading-tight">
            Ready to transform your farming operations?
          </h2>
          <p className="text-black/60 mt-6 text-base sm:text-lg max-w-md">
            Speak with our team to discover how FarmSphere can help improve
            efficiency, optimize procurement, and increase profitability.
          </p>

          <div className="mt-12 flex flex-col gap-6">
            <h3 className="font-medium text-xl">Contact Information</h3>
            <p className="text-black/80 font-medium">FarmSphere Technologies</p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-black/70 hover:text-black transition">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <span>info@farmsphere.app</span>
              </div>
              <div className="flex items-center gap-4 text-black/70 hover:text-black transition">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-4 text-black/70 hover:text-black transition">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <span>Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div
          className={`bg-[#fcfcfc] border border-black/10 rounded-3xl p-8 sm:p-10 shadow-sm transition-all duration-700 delay-200 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-medium mb-8">Let's Talk</h3>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-black/70 font-medium">Name</label>
                <input
                  type="text"
                  className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-black/70 font-medium">
                  Farm / Organization
                </label>
                <input
                  type="text"
                  className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition"
                  placeholder="Green Valley Farms"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-black/70 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition"
                  placeholder="+91"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-black/70 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-black/70 font-medium">
                  Farm Type
                </label>
                <select className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition appearance-none">
                  <option>Dairy</option>
                  <option>Poultry</option>
                  <option>Livestock</option>
                  <option>Crop Farming</option>
                  <option>Mixed Farming</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-black/70 font-medium">
                  Farm Size
                </label>
                <input
                  type="text"
                  className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition"
                  placeholder="e.g. 50 Acres"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-black/70 font-medium">Message</label>
              <textarea
                rows={4}
                className="px-4 py-3 bg-white border border-black/10 rounded-xl outline-none focus:border-black/30 transition resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="button"
              className="mt-4 group flex justify-center items-center gap-2 bg-black text-white w-full py-4 rounded-xl font-medium transition hover:bg-black/80"
            >
              <span>Request Demo</span>
              <Send
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

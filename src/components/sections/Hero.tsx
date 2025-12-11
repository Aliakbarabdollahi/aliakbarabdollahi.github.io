import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="hero"
        className="relative h-screen w-screen flex items-center pt-20"
      >
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-6">
          {/* متن بالای آواتار */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-slate-400">
              UI / UX Designer • Frontend Developer
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-slate-100">Hi, Meet </span>
              <span className="text-[#ffb320]">Aliakbar</span>
              <span className="text-[#ffb320]"> ✦</span>
            </h1>

            <p className="text-[13px] md:text-sm text-slate-300/90 leading-relaxed">
              A product–focused UI/UX designer and frontend developer crafting
              clean, modern and accessible digital experiences. From research,
              flows and design systems to pixel–perfect React and Tailwind
              implementations, I bridge the gap between design and code to ship
              interfaces that feel as good as they look.
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-[11px] md:text-xs text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                System Design
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                User Interface
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                Product Design
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10">
                Web Apps
              </span>
            </div>
          </div>

          {/* آواتار دقیقا زیر متن‌ها */}
          <div className="mt-2 flex justify-center w-full">
          
            <div className="relative w-full h-full mx-auto ">
              <img
                src="/images/AvatarSection.png" // یا /Avatar.jpg
                alt="Aliakbar avatar"
                className="w-full h-full object-cover"
              />
            </div>
          
          </div>

          {/* دکمه زیر آواتار */}
          <div className="mt-2">
            <button className="inline-flex items-center rounded-full bg-[#ffb320] px-6 py-2.5 text-sm font-semibold text-black shadow-[0_24px_60px_rgba(0,0,0,0.9)] hover:brightness-110">
              Hire Me Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

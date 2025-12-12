import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05060a] border-t border-white/5 py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0">
          {/* سمت چپ: 80% */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-50 mb-6">
                Let's bring your ideas to life!
              </h2>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl">
                You need stunning visuals, intuitive user experiences & design solutions.
              </p>
            </div>

            {/* دکمه Get in Touch */}
            <a
              href="https://www.instagram.com/Aliakbaruiuxdev"
              className="inline-flex items-center rounded-full bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-100 border border-white/10 hover:bg-white/10 hover:border-[#ffb320] transition-colors w-fit mt-8"
            >
              Get in Touch
            </a>
          </div>

          {/* سمت راست: 20% - لینک‌های Navigation */}
          <div className="flex flex-col justify-start items-end gap-4 lg:gap-6">
            <a
              href="#projects"
              className="text-sm md:text-base text-slate-300 hover:text-[#ffb320] transition-colors text-right"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm md:text-base text-slate-300 hover:text-[#ffb320] transition-colors text-right"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm md:text-base text-slate-300 hover:text-[#ffb320] transition-colors text-right"
            >
              Experience
            </a>
            <a
              href="#stack"
              className="text-sm md:text-base text-slate-300 hover:text-[#ffb320] transition-colors text-right"
            >
              Stack
            </a>
          </div>
        </div>

        {/* خط جداکننده و کپی‌رایت */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <p className="text-xs md:text-sm text-slate-400 text-center">
            © 2024 Ali Akbar Abdollahi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

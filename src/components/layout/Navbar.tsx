import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav
        className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 lg:px-6 mt-3
                       bg-[#05060a]/75 backdrop-blur-md "
      >
        {/* لوگو دایره‌ای + نام کوتاه */}
        {/* لوگو / نام */}
        <div className="flex items-center gap-2">
          <img
            src="/images/Avatar.jpg"
            alt="Aliakbar avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-sm md:text-base font-semibold tracking-tight">
            AliakbarUiUX
          </span>
        </div>

        {/* لینک‌ها در دسکتاپ */}
        <div className="hidden md:flex items-center gap-5 text-[11px] md:text-xs">
          <a
            href="#projects"
            className="text-slate-100 hover:text-[#ffb320] transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-slate-100 hover:text-[#ffb320] transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-slate-100 hover:text-[#ffb320] transition-colors"
          >
            Experience
          </a>
          {/* <a
            href="#expertise"
            className="text-slate-100 hover:text-[#ffb320] transition-colors"
          >
            Expertise
          </a> */}
          <a
            href="#stack"
            className="text-slate-100 hover:text-[#ffb320] transition-colors"
          >
            Stack
          </a>
          <a
            href="#contact"
            className="text-slate-100 hover:text-[#ffb320] transition-colors"
          >
            Contact
          </a>
        </div>

        {/* دکمه کوچک (مثلاً Download CV یا حالت مینیمال مثل طرح) */}
        <button className="hidden md:inline-flex items-center rounded-full bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-100 border border-white/10 hover:bg-white/10">
          Download CV
        </button>

        {/* موبایل: فقط لوگو و آیکن منو */}
        <button className="md:hidden w-9 h-9 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10">
          <span className="w-4 h-[2px] bg-slate-100 block relative">
            <span className="absolute -top-1.5 w-4 h-[2px] bg-slate-100" />
            <span className="absolute top-1.5 w-4 h-[2px] bg-slate-100" />
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

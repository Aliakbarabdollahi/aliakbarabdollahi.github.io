import React from "react";

const ContactCta: React.FC = () => {
  return (
    <section id="contact" className="w-screen bg-[#05060a] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.9)] border border-white/10
                     bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Letswork.png')" }}
        >
          {/* لایه‌ی تیره روی تصویر برای خوانایی متن و دکمه */}
          <div className="absolute inset-0 bg-black/40" />

          {/* محتوا */}
          <div className="relative flex flex-col items-center justify-center py-16 md:py-20 gap-4">
            {/* دکمه دایره‌ای وسط */}
            <button className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#ffb320] text-sm md:text-base font-semibold text-black shadow-[0_28px_70px_rgba(0,0,0,0.9)] hover:brightness-110 transition">
              Hire Me Now
            </button>

            {/* متن LET'S WORK */}
            <p className="text-xs md:text-sm tracking-[0.25em] text-slate-100/80 mt-2">
              LET&apos;S WORK TOGETHER
            </p>

            {/* لینک‌های سوشال پایین */}
            <div className="mt-4 flex flex-wrap justify-center gap-4 text-[11px] md:text-xs font-medium text-slate-100">
              <a href="#" className="text-slate-100 hover:text-[#ffb320]">
                FACEBOOK
              </a>
              <span className="opacity-40">•</span>
              <a href="#" className="text-slate-100 hover:text-[#ffb320]">
                INSTAGRAM
              </a>
              <span className="opacity-40">•</span>
              <a href="#" className="text-slate-100 hover:text-[#ffb320]">
                MEDIUM
              </a>
              <span className="opacity-40">•</span>
              <a href="#" className="text-slate-100 hover:text-[#ffb320]">
                DRIBBBLE
              </a>
              <span className="opacity-40">•</span>
              <a href="#" className="text-slate-100 hover:text-[#ffb320]">
                BEHANCE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;

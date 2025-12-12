import React from "react";

const ContactCta: React.FC = () => {
  return (
    <section id="contact" className="w-screen bg-[#05060a] py-4 lg:py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.9)] border border-white/10
                     bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Letswork.png')" }}
        >
          {/* لایه‌ی تیره روی تصویر برای خوانایی متن و دکمه */}
          <div className="absolute inset-0 bg-black/40" />

          {/* محتوا */}
          <div className="relative flex flex-col items-center justify-center py-8 md:py-20 gap-4">
          

            {/* متن LET'S WORK */}
            <p className="text-xs md:text-sm tracking-[0.25em] text-slate-100/80 mt-2">
              LET&apos;S WORK TOGETHER
            </p>

            {/* لینک‌های سوشال پایین */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 text-[11px] md:text-xs font-medium text-slate-100">
              <a
                href="https://github.com/Aliakbarabdollahi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-[#ffb320] transition-colors"
              >
                GITHUB
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://www.instagram.com/Aliakbaruiuxdev"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-[#ffb320] transition-colors"
              >
                INSTAGRAM
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://x.com/AliakbarUIUXDev"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-[#ffb320] transition-colors"
              >
                X
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://dribbble.com/Aliakbarabdollahi"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-[#ffb320] transition-colors"
              >
                DRIBBBLE
              </a>
              <span className="opacity-40">•</span>
              <a
                href="https://www.behance.net/shahriaabdolla"
                target="_blank"
                rel="noreferrer"
                className="text-slate-100 hover:text-[#ffb320] transition-colors"
              >
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

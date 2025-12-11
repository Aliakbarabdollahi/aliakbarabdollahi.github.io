import React from "react";
import { testimonials } from "../../data/testimonials";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="w-full bg-[#05060a] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          CLIENT&apos;S TALKS
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl bg-gradient-to-b from-[#191a27] to-[#05060a] border border-white/5 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)]"
            >
              <p className="text-xs md:text-sm text-slate-200 mb-4">
                {t.message}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ffb320] to-[#ff6b3d]" />
                
                <div className="text-xs md:text-sm">
                  <p className="font-semibold text-slate-100">{t.name}</p>
                  <p className="text-slate-400">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

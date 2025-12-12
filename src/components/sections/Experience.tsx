import React from "react";
import { experiences } from "../../data/experience";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full bg-[#05060a] py-4 lg:py-4"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
          EXPERIENCE
        </h2>

        <div className="grid gap-3 md:gap-4 md:grid-cols-2">
          {experiences.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-[#0b0c13] border border-white/5 shadow-[0_12px_28px_rgba(0,0,0,0.6)] px-4 py-3 hover:bg-white/3 transition-colors"
            >
              <p className="text-[11px] md:text-xs text-[#ffb320] mb-0.5">
                {item.period}
              </p>
              <h3 className="text-sm md:text-base font-semibold text-slate-50">
                {item.role}
              </h3>
              <p className="text-[11px] md:text-xs text-slate-300 mt-0.5">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

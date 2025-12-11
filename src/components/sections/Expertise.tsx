import React from "react";
import { skills } from "../../data/skills";

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="w-full bg-[#05060a] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          MY EXPERTISE
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          {skills.map((skill) => (
            <article
              key={skill.id}
              className="group rounded-2xl bg-gradient-to-b from-[#191a27] to-[#05060a] border border-white/5 p-5 shadow-[0_18px_40px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#ffb320]/60"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-base md:text-lg font-semibold text-slate-50">
                  {skill.title}
                </h3>
                <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10" />
              </div>
              <p className="text-xs md:text-sm text-slate-300">
                {skill.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;

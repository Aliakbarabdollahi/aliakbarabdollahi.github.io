import React from "react";
import { stack } from "../../data/stack";

const Stack: React.FC = () => {
  return (
    <section id="stack" className="w-full bg-[#05060a] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          FAVOURITE STACK
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
          {stack.map((item) => (
            <div
              key={item.id}
              className="aspect-square rounded-2xl bg-[#0b0c13] border border-white/5 flex items-center justify-center text-xs md:text-sm font-medium text-slate-100 shadow-[0_14px_30px_rgba(0,0,0,0.6)]"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

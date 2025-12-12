import React from "react";
import { stack } from "../../data/stack";

const Stack: React.FC = () => {
  return (
    <section id="stack" className="w-full bg-[#05060a] py-8 lg:py-4">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
          FAVOURITE STACK
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
          {stack.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-xl bg-[#0b0c13] border border-white/5 flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.7)]"
            >
              {/* لوگوی رنگی – بدون هیچ hover effect */}
              <img
                src={item.logo}
                alt={item.name}
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;

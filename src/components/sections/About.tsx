import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#05060a] py-4 "
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-10 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          ABOUT ME
        </h2>

        <div className="max-w-3xl text-sm md:text-base leading-relaxed text-slate-300 space-y-3">
          <p>
            Aliakbar is a passionate UI/UX designer and frontend developer
            focused on crafting visually clean and user-friendly digital
            products.
          </p>
          <p>
            With a strong background in product design, design systems and
            modern frontend tools like React and Tailwind, he turns ideas into
            usable, delightful interfaces.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <img
              src="/images/Avatar.jpg"
              alt="Aliakbar avatar"
              className="w-12 h-12 rounded-full"
            />
          <div className="text-sm">
            <p className="font-semibold text-slate-100">Aliakbar Abdollahi</p>
            <p className="text-slate-400">UI/UX Designer • Frontend Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

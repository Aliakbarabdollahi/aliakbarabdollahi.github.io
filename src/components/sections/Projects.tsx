import React, { useMemo } from "react";
import { projects } from "../../data/projects";

const Projects: React.FC = () => {
  const visibleProjects = useMemo(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 6); // هر بار ۵ تا رندوم
  }, []);

  return (
    <section id="projects" className="w-full bg-[#05060a] py-4 lg:py-4">
      <div className="max-w-6xl mx-auto px-4 lg:px-10">
        {/* هدر بدون دکمه جانبی */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            PROJECTS
          </h2>
        </div>

        {/* گرید کارت‌ها */}
        <div className="grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-[18px] bg-gradient-to-b from-[#191a27] to-[#05060a] shadow-[0_14px_32px_rgba(0,0,0,0.7)] border border-white/5"
            >
              {/* تصویر پروژه */}
              <a
                href={project.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="block relative w-full overflow-hidden"
              >
                <div className="relative w-full pt-[65%]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </a>

              {/* متن پایین کارت */}
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>{project.year}</span>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xs md:text-sm font-semibold text-slate-50">
                  {project.title}
                </h3>
                <p className="text-[11px] text-slate-300">{project.subtitle}</p>

                {/* دکمه کوچک داخل کارت */}
                <a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center mt-2 text-[11px] text-[#ffb320] hover:underline"
                >
                  See on LinkedIn
                </a>
              </div>
            </article>
          ))}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {/* کارت‌های پروژه که از visibleProjects.map رندر می‌کنی */}
          </div>

          {/* دکمه وسط‌چین زیر پروژه‌ها */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.linkedin.com/in/aliakbar-abdollahi-508b92174"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-white/5 px-6 py-2.5 text-xs md:text-sm font-medium text-slate-100 border border-white/10 hover:bg-white/10 hover:border-[#ffb320] transition-colors"
            >
              View more projects on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

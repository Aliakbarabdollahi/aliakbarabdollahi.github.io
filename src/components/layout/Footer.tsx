import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen bg-[#05060a] border-t border-white/5 py-6">
      <div className="max-w-6xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Aliakbar Abdollahi. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#work" className="hover:text-[#ffb320]">
            Work
          </a>
          <a href="#about" className="hover:text-[#ffb320]">
            About
          </a>
          <a href="#contact" className="hover:text-[#ffb320]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

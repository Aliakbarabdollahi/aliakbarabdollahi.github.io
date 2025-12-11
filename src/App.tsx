import React from "react";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Expertise from "./components/sections/Expertise";
import Stack from "./components/sections/Stack";
import Testimonials from "./components/sections/Testimonials";
import ContactCta from "./components/sections/ContactCta";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-screen bg-[#05060a] text-slate-100 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Expertise />
      <Stack />
      <Testimonials />
      <ContactCta />
      <Footer />
    </div>
  );
};

export default App;

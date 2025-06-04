import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  const [aboutRef, inViewAbout] = useInView({ threshold: 0.3 });
  const [expRef, inViewExp] = useInView({ threshold: 0.3 });
  const [projRef, inViewProj] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inViewAbout) setActiveSection("about");
    else if (inViewExp) setActiveSection("experience");
    else if (inViewProj) setActiveSection("projects");
  }, [inViewAbout, inViewExp, inViewProj]);

  return (
    <div className="grid grid-cols-10 min-h-screen">
      {/* 좌측 4/10 - 소개 + 메뉴 */}
      <div className="col-span-4 border-r border-gray-200">
        <Navbar active={activeSection} />
      </div>

      {/* 우측 6/10 - 콘텐츠 */}
      <main className="col-span-6">
        <section id="about" ref={aboutRef} className="border-b border-gray-200">
          <div className="px-10 py-32 max-w-3xl mx-auto">
            <About />
          </div>
        </section>

        <section
          id="experience"
          ref={expRef}
          className="border-b border-gray-200"
        >
          <div className="px-10 py-32 max-w-3xl mx-auto">
            <Experience />
          </div>
        </section>

        <section id="projects" ref={projRef}>
          <div className="px-10 py-32 max-w-3xl mx-auto">
            <Projects />
          </div>
        </section>
      </main>
    </div>
  );
}

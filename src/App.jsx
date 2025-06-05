import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import MouseHighlight from "./components/MouseHighlight"; // ✅ 마우스 강조 효과 컴포넌트
import SocialLinks from "./components/SocialLinks"; // ✅ 소셜 링크 컴포넌트
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
    <>
      <MouseHighlight />
      <SocialLinks /> {/* ✅ 하단 소셜 링크 추가 */}
      <div className="grid grid-cols-10 min-h-screen bg-[#0a192f] text-[#ccd6f6]">
        {/* 좌측 4/10 - 소개 + 메뉴 */}
        <div className="col-span-4 border-r border-[#112240]">
          <Navbar active={activeSection} />
        </div>

        {/* 우측 6/10 - 콘텐츠 */}
        <main className="col-span-6">
          <section
            id="about"
            ref={aboutRef}
            className="border-b border-[#112240]"
          >
            <div className="px-10 py-32 max-w-3xl mx-auto">
              <About />
            </div>
          </section>

          <section
            id="experience"
            ref={expRef}
            className="border-b border-[#112240]"
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
    </>
  );
}

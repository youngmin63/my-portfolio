import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import MouseHighlight from "./components/MouseHighlight";

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

      {/* ✅ 모바일 + 태블릿 전용 Hero + 소셜링크 */}
      <div className="lg:hidden px-6 pt-4 pb-2 sm:pt-8 sm:pb-4 bg-[#0a192f]">
        <Hero />
        <div className="mt-3">
          <SocialLinks inline />
        </div>
      </div>

      {/* ✅ 데스크탑에서만 하단 소셜 링크 표시 */}
      <div className="hidden lg:block">
        <SocialLinks />
      </div>

      {/* ✅ 전체 콘텐츠 구조 */}
      <div className="grid grid-cols-1 lg:grid-cols-10 min-h-screen bg-[#0a192f] text-[#ccd6f6] mt-0">
        {/* ✅ 데스크탑 전용 사이드 네비게이션 */}
        <div className="hidden lg:block lg:col-span-4 border-b lg:border-r border-[#112240]">
          <Navbar active={activeSection} />
        </div>

        {/* ✅ 콘텐츠 영역 */}
        <main className="lg:col-span-6 w-full">
          <section
            id="about"
            ref={aboutRef}
            className="border-b border-[#112240]"
          >
            <div className="px-6 sm:px-10 py-24 sm:py-32 max-w-3xl mx-auto">
              <About />
            </div>
          </section>

          <section
            id="experience"
            ref={expRef}
            className="border-b border-[#112240]"
          >
            <div className="px-6 sm:px-10 py-24 sm:py-32 max-w-3xl mx-auto">
              <Experience />
            </div>
          </section>

          <section id="projects" ref={projRef}>
            <div className="px-6 sm:px-10 py-24 sm:py-32 max-w-3xl mx-auto">
              <Projects />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

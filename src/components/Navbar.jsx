import React from "react";
import Hero from "./Hero";

export default function Navbar({ active }) {
  const linkStyle = (id) =>
    active === id ? "text-blue-600 font-bold" : "text-gray-400";

  return (
    <nav className="fixed top-0 left-0 h-screen max-w-[40vw] px-16 py-16 bg-white flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        {/* Hero 소개글 */}
        <Hero />

        {/* 네비게이션 메뉴 (가운데 정렬을 위해 items-start → items-center 또는 padding 조정) */}
        <ul className="space-y-6 text-lg font-semibold tracking-wide pl-2">
          <li>
            <a href="#about" className={`${linkStyle("about")} transition`}>
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={`${linkStyle("experience")} transition`}
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`${linkStyle("projects")} transition`}
            >
              PROJECTS
            </a>
          </li>
        </ul>
      </div>

      {/* 하단 소셜 아이콘은 그대로 */}
    </nav>
  );
}

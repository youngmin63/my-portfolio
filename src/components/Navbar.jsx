import React from "react";
import Hero from "./Hero";

export default function Navbar({ active }) {
  const menuItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen max-w-[40vw] px-16 py-16 bg-[#0a192f] flex flex-col justify-between">
      <div className="flex flex-col gap-12">
        {/* Hero 소개글 */}
        <Hero />

        {/* 네비게이션 메뉴 */}
        <ul className="space-y-6 text-lg font-semibold tracking-wide pl-2">
          {menuItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-4 group"
                >
                  {/* 막대 라인 */}
                  <span
                    className={`
                      h-[2px] bg-[#ccd6f6] transition-all duration-300
                      ${isActive ? "w-12" : "w-6"} group-hover:w-12
                    `}
                  ></span>

                  {/* 텍스트 */}
                  <span
                    className={`transition
                      ${isActive ? "text-[#ccd6f6]" : "text-[#565c70]"}
                      group-hover:text-[#ccd6f6]`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 하단 소셜 아이콘은 그대로 */}
    </nav>
  );
}

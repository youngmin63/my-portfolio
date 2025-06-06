import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="px-6 py-20  bg-[#0a192f] text-[#8892b0]" id="projects">
      {/* ✅ 모바일 전용 sticky 제목 */}
      <h2 className="lg:hidden sticky top-0 z-30 bg-[#0a192f] py-2 sm:py-2 mb-4 text-[#ccd6f6] text-lg font-semibold shadow">
        {t("projects_title")}
      </h2>

      <div className="bg-[#112240] shadow-md rounded-xl p-6 max-w-3xl leading-relaxed text-lg">
        <p className="text-sm font-medium mb-2 text-[#ccd6f6]">
          {t("projects_type")}
        </p>
        <h3 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
          {t("projects_name")}
        </h3>

        <p className="mb-4">{t("projects_desc1")}</p>
        <p className="mb-4">{t("projects_desc2")}</p>
        <p className="mb-4">{t("projects_desc3")}</p>
        <p className="mb-4">{t("projects_desc4")}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {[
            "React Native",
            "Expo",
            "Spring Boot",
            "FastAPI",
            "OpenAI API",
            "Scikit-learn",
            "Render",
          ].map((tech) => (
            <div
              key={tech}
              className="bg-[#233554] text-[#64ffda] px-2 py-1 rounded-lg shadow-md text-xs font-medium text-center transition hover:scale-[1.03]"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <div className="w-[400px] h-[640px] rounded-xl overflow-hidden shadow-lg bg-black">
            <video
              src="/AppVideo.MP4"
              controls
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

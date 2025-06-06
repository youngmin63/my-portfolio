import React from "react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <section className="px-6 py-20 bg-[#0a192f] text-[#ccd6f6]" id="experience">
      {/* ✅ 모바일 전용 sticky 제목 */}
      <h2 className="lg:hidden sticky top-0 z-30 bg-[#0a192f] py-2 sm:py-2 mb-4 text-[#ccd6f6] text-lg font-semibold shadow">
        {t("experience_title")}
      </h2>

      <div className="space-y-14">
        {isEnglish && (
          <div>
            <h3 className="text-2xl font-semibold">
              Combat Medical Technician (Republic of Korea Army)
            </h3>
            <p className="text-md text-[#8892b0] mt-1">
              9th Infantry Division, 28th Regiment, Medical Company · Oct 2020 –
              Apr 2022
            </p>
            <ul className="list-disc pl-5 mt-3 text-[#ccd6f6] space-y-2 text-lg leading-relaxed">
              <li>
                Provided medical support and first aid to soldiers during
                training and operations
              </li>
              <li>
                Assisted in health management, triage, and evacuation procedures
                under military protocols
              </li>
              <li>
                Collaborated with medical officers and maintained readiness for
                emergency deployment
              </li>
            </ul>
          </div>
        )}
        {/* 수영 강사 */}
        <div>
          <h3 className="text-2xl font-semibold">{t("exp_swim_title")}</h3>
          <p className="text-md text-[#8892b0] mt-1">{t("exp_swim_period")}</p>
          <ul className="list-disc pl-5 mt-3 text-[#ccd6f6] space-y-2 text-lg leading-relaxed">
            <li>{t("exp_swim_1")}</li>
            <li>{t("exp_swim_2")}</li>
            <li>{t("exp_swim_3")}</li>
          </ul>
        </div>

        {/* 영어 강사 */}
        <div>
          <h3 className="text-2xl font-semibold">{t("exp_eng_title")}</h3>
          <p className="text-md text-[#8892b0] mt-1">{t("exp_eng_period")}</p>
          <ul className="list-disc pl-5 mt-3 text-[#ccd6f6] space-y-2 text-lg leading-relaxed">
            <li>{t("exp_eng_1")}</li>
            <li>{t("exp_eng_2")}</li>
            <li>{t("exp_eng_3")}</li>
          </ul>
        </div>

        <div className="mt-16">
          <a
            href="../public/이력서.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#ccd6f6] font-medium hover:text-[#64ffda] transition"
          >
            {t("exp_resume_link")}
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

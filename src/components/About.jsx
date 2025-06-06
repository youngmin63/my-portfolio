import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      className="px-6 sm:px-10 pt-12 pb-24 sm:pt-32 sm:pb-32 max-w-3xl ml-auto text-[#8892b0] leading-loose"
      id="about"
    >
      {/* ✅ 모바일 + 태블릿에서만 보이는 sticky 제목 */}
      <h2 className="lg:hidden sticky top-0 z-30 bg-[#0a192f] py-2 sm:py-2 mb-4 text-[#ccd6f6] text-lg font-semibold shadow">
        {t("about_title")}
      </h2>

      <p className="mb-6 text-lg">{t("about_1")}</p>
      <p className="mb-6 text-lg">{t("about_2")}</p>
      <p className="mb-6 text-lg">{t("about_3")}</p>
      <p className="mb-6 text-lg">{t("about_4")}</p>
      <p className="mb-6 text-lg">{t("about_5")}</p>
    </section>
  );
}

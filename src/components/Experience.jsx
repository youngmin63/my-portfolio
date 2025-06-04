import React from "react";

export default function Experience() {
  return (
    <section className="px-6 py-20 bg-white text-gray-900" id="experience">
      <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-200 inline-block">
        Experience
      </h2>

      <div className="space-y-14">
        {/* 수영 강사 */}
        <div>
          <h3 className="text-2xl font-semibold">수영 강사</h3>
          <p className="text-md text-gray-500 mt-1">
            충주수영장 · 2022.06 - 2022.09, 2023.06 - 2023.09
          </p>
          <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2 text-lg leading-relaxed">
            <li>초등학생 대상 수영 지도 및 안전 관리 수행</li>
            <li>개별 수준에 맞춘 수업 계획 수립 및 학부모 상담 진행</li>
            <li>충주 시내 초등학교 대상 생존수영 강습 프로그램 제공</li>
          </ul>
        </div>

        {/* 영어 강사 */}
        <div>
          <h3 className="text-2xl font-semibold">초등부 영어 시간제 강사</h3>
          <p className="text-md text-gray-500 mt-1">
            윤선생 IGSE · 2023.09 - 2023.11
          </p>
          <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-2 text-lg leading-relaxed">
            <li>초등학생 대상 영어 회화 및 문법 수업 진행</li>
            <li>학생 출석 관리 및 학부모 대상 알림 제공</li>
            <li>피드백을 바탕으로 학습 방식 개선 및 수업 내용 유연하게 조정</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

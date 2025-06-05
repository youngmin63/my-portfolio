import React from "react";

export default function Projects() {
  return (
    <section className="px-6 py-20  bg-[#0a192f] text-[#ccd6f6]" id="projects">
      <div className="bg-[#112240] shadow-md rounded-xl p-6 max-w-3xl leading-relaxed text-lg">
        <p className="text-sm text-[#ccd6f6] font-medium mb-2">팀 프로젝트</p>
        <h3 className="text-2xl font-semibold mb-4">균형 마당 (JudeBalance)</h3>

        <p className="mb-4">
          균형마당은 중장년층의 균형 감각 향상을 위한 AI 기반 헬스케어 앱입니다.
          사용자가 스마트폰을 귀에 댄 채 20초간 센서 데이터를 측정하면, 이를
          바탕으로 개인 맞춤형 운동을 추천합니다.
        </p>

        <p className="mb-4">
          프론트엔드는 Expo 기반의 React Native로 구현하여 다양한 모바일
          환경에서 안정적인 실행을 보장하며, 백엔드는 Spring Boot와 FastAPI로
          구성되어 각각 사용자 데이터 관리와 AI 분석 기능을 담당합니다.
        </p>

        <p className="mb-4">
          OpenAI API를 활용한 LLM 기반 피드백 기능과, scikit-learn 기반의
          머신러닝 추천 모델을 연동해, 사용자 상태에 최적화된 운동 가이드를
          제공합니다.
        </p>

        <p className="mb-4">
          전체 백엔드 시스템은 Render를 이용해 클라우드에 배포하였으며,
          클라이언트와 AI 서버 간의 통신은 RESTful API 구조로 구현해 높은
          안정성과 확장성을 확보했습니다.
        </p>
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
      </div>
    </section>
  );
}

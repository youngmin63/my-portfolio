import React from "react";

export default function Projects() {
  {
    return (
      <section className="px-6 py-20 bg-[#0a192f] text-[#8892b0]" id="projects">
        {/* ✅ 모바일 상단에 고정되는 제목 */}
        <h2 className="lg:hidden sticky top-0 z-30 bg-[#0a192f] py-2 sm:py-2 mb-4 text-[#ccd6f6] text-lg font-semibold shadow">
          PROJECTS
        </h2>

        <div className="bg-[#112240] shadow-md rounded-xl p-6 max-w-3xl leading-relaxed text-lg">
          <p className="text-sm font-medium mb-2 text-[#ccd6f6]">팀 프로젝트</p>
          <h3 className="text-2xl font-semibold mb-4 text-[#ccd6f6]">
            균형 마당 (JudeBalance)
          </h3>

          <p className="mb-4">
            <span className="font-medium">균형마당</span>은 중장년층의 균형 감각
            향상을 위한 <span className="font-medium">AI 기반 헬스케어 앱</span>
            입니다. 사용자가 스마트폰을 귀에 댄 채{" "}
            <span className="font-medium">20초간 센서 데이터를 측정</span>하면,
            이를 바탕으로 개인 맞춤형 운동을 추천합니다.
          </p>

          <p className="mb-4">
            프론트엔드는 <span className="font-medium">Expo</span> 기반의{" "}
            <span className="font-medium">React Native</span>로 구현하여 다양한
            모바일 환경에서 안정적인 실행을 보장하며, 백엔드는{" "}
            <span className="font-medium">Spring Boot</span>와{" "}
            <span className="font-medium">FastAPI</span>로 구성되어 각각 사용자
            데이터 관리와 AI 분석 기능을 담당합니다.
          </p>

          <p className="mb-4">
            <span className="font-medium">OpenAI API</span>를 활용한 LLM 기반
            피드백 기능과, <span className="font-medium">scikit-learn</span>{" "}
            기반의 머신러닝 추천 모델을 연동해, 사용자 상태에 최적화된 운동
            가이드를 제공합니다.
          </p>

          <p className="mb-4">
            전체 백엔드 시스템은 <span className="font-medium">Render</span>를
            이용해 클라우드에 배포하였으며, 클라이언트와 AI 서버 간의 통신은{" "}
            <span className="font-medium">RESTful API 구조</span>로 구현해 높은
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
                className="bg-[#233554] text-[#64ffda]  px-2 py-1 rounded-lg shadow-md text-xs font-medium text-center transition hover:scale-[1.03]"
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
}

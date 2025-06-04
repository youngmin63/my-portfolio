import React from "react";

export default function Projects() {
  return (
    <section className="px-6 py-20 bg-gray-50 text-gray-900" id="projects">
      <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-200 inline-block">
        Featured Project
      </h2>

      <div className="bg-white shadow-md rounded-xl p-6 max-w-3xl leading-relaxed text-lg">
        <p className="text-sm text-blue-600 font-medium mb-2">팀 프로젝트</p>
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

        <ul className="flex flex-wrap gap-3 text-sm text-gray-600 mb-6">
          <li>Expo / React Native</li>
          <li>Spring Boot (Java)</li>
          <li>FastAPI (Python)</li>
          <li>OpenAI API</li>
          <li>Scikit-learn</li>
          <li>Render</li>
        </ul>

        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/youngmin63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://your-live-app-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

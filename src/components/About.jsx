import React from "react";

export default function About() {
  return (
    <section
      className="px-10 py-32 max-w-3xl ml-auto text-[#ccd6f6]leading-loose"
      id="about"
    >
      <p className="text-sm  text-white font-medium mb-2">ABOUT</p>
      <h2 className="text-4xl font-bold text-white mb-8">Who I am</h2>

      <p className="mb-6 text-lg">
        저는 사람과 기술을 연결하는 AI 기반 서비스를 만드는 데 열정을 가진
        개발자입니다.
      </p>

      <p className="mb-6 text-lg">
        처음에는 간호학을 전공했지만, 병동 실습 중 다양한 의료 기술을 접하면서
        ‘기술로 사람을 도울 수 있다’는 가능성에 매력을 느꼈습니다. 이후 진로에
        대해 깊이 고민한 끝에 과감히 휴학을 결심하고, 프로그래밍과 인공지능
        분야로 방향을 전환했습니다.
      </p>

      <p className="mb-6 text-lg">
        최근에는 균형마당이라는 헬스케어 앱 개발을 주도했습니다. <br />
        React Native, FastAPI, Spring Boot로 구성된 이 앱은 사용자의 균형
        데이터를 측정하고 분석하여, OpenAI API와 머신러닝 기반 추천 모델을 통해
        개인 맞춤형 운동 가이드를 제공합니다. 사용자 상태에 따라 실시간 피드백을
        제공하는 AI 분석 시스템을 직접 설계하고 구현했습니다.
      </p>

      <p className="mb-6 text-lg">
        수영 강사와 영어 강사로 활동하며 다양한 연령대의 사람들과 소통했던
        경험은, 사용자 중심의 AI 시스템을 설계하는 데 큰 도움이 되고 있습니다.
        단순한 기술 구현이 아니라, 사람을 이해하고 배려하는 개발을 지향합니다.
      </p>

      <p className="mb-6 text-lg">
        여가 시간에는 주로 축구와 러닝을 하고있습니다.{" "}
      </p>
    </section>
  );
}

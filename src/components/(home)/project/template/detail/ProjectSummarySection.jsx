// ProjectSummarySection 
import React from "react";

export default function ProjectSummarySection({ title }) {
  return (
    <div className="w-[657px] mb-8 ml-[40px] mr-[184px]">
      <h2
        style={{ fontFamily: "Space Grotesk", fontSize: "40px", fontWeight: 700, }}
        className="mb-[24px]"
      >
        {title}
      </h2>
      <p
        style={{ fontFamily: "Space Grotesk", fontSize: "24px", fontWeight: 500 }}
        className="leading-relaxed"
      >
        학사정보 기반 진로 상담 챗봇 어야양여야 어쩌고 저쩌고 어쩌고 저
        강의평, 커리큘럼, 강의계획서를 확인하는 강의탐색 기능,
        나의 성적과 졸업요건을 확인하는 학업현황 기능, 어쩌고 저쩌고
        맞춤형 커리어 조언을 제공하는 진로 상담 챗봇 기능까지!
        학사정보 기반 진로 상담 챗봇 어야양여야 어쩌고 저쩌고 어쩌고 저
        학생들이 더 쉽게 학업을 계획하고, 효율적으로 강의를 선택하며,
        자신의 진로를 명확하게 설정할 수 있도록 돕는 것을 목표로 함
      </p>
    </div>
  );
}

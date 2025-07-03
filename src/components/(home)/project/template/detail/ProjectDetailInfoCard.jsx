import React from "react";

export default function ProjectDetailInfoCard() {
  return (
    <div style={{fontFamily: 'Space Grotesk'}} className="ml-[300px] px-[45px] pt-[32px] border rounded-[20px] w-[548px] h-[383px]">
        <h2 style={{fontSize: "24px", fontWeight: 700}} className="mb-[20px]">헌터X헌터</h2>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}} className="font-semibold">팀원</div>
            <div className="ml-[83px]">
                frontend · 유승연 <span style={{ display: "inline-block", width: "21px" }}></span> frontend · 유승연 <br />
                frontend · 유승연 <span style={{ display: "inline-block", width: "21px" }}></span> frontend · 유승연 <br />
                frontend · 유승연 <span style={{ display: "inline-block", width: "21px" }}></span> frontend · 유승연
            </div>
        </div>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>기술스택</div>
            <div className="ml-[120px]">
                React Django
            </div>
        </div>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>프로젝트 형태</div>
            <div className="ml-[80px]">
                WEB
            </div>
        </div>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>프로젝트 기간</div>
            <div className="ml-[80px]">
                2024-09-01 ~ 2025-06-30
            </div>
        </div>
      <div className="flex gap-4 mt-4">
        <img src="/images/insta_svg.svg" alt="instagram" className="w-6 h-6" />
        <img src="/images/git_svg.svg" alt="github" className="w-6 h-6" />
      </div>
    </div>
  );
}
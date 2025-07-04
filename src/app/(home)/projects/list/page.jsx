import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/(home)/_widget/Input";
import ProjectListSection from "../../../../components/(home)/project/template/list/ProjectListSection";
import ProjectFooter from "../../../../components/(home)/project/template/main/ProjectFooter";

export default function ProjectListPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-10 flex flex-col justify-center items-center mt-[88px]">
        <div className="flex flex-row items-center self-start ml-[100px]">
          <button onClick={()=>navigate(`/projects`)} className="text-4xl text-white w-[20px] z-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-11 h-24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div style={{fontFamily: 'Space Grotesk', fontSize: "32px", fontWeight: 700}} className="ml-[36px] text-white" >멋쟁이사자처럼에서 진행된 프로젝트</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <div className="w-[85%] mt-[51px] flex flex-col">
          <Input state={[query, setQuery]} placeholder="멋쟁이 사자 처럼의 다양한 프로젝트를 검색해보세요!" option={{ cursor: "pointer" }} />
          <ProjectListSection query={query} />
        </div>
      </div>
      <ProjectFooter/>
    </div>
  );
}

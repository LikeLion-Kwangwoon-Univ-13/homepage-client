import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import ProjectSummarySection from "../../../../components/(home)/project/template/list/ProjectSummarySection";
import ProjectDetailInfoCard from "../../../../components/(home)/project/template/list/ProjectDetailInfoCard";

export default function ProjectDetailPage() {
  const { title } = useParams();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-24">
         <button onClick={()=>navigate(`/projects`)} className="ml-[70px] mt-[78px] text-4xl w-[20px] z-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-11 h-24">
            <path strokeLinecap="round" strokeLinejoin="round"d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="mt-[-50px] flex flex-col items-center">
            <div>
                <div className="relative w-full flex flex-row items-center">
                    <button className="mr-[100px] text-gray-300 text-4xl z-10 cursor-pointer">
                        ❮
                    </button>
                    <img
                        src="/images/kwvizer.png"
                        alt="Project"
                        className="w-[768px] h-[432px] object-cover rounded-[24px]"
                    />
                    <button className="ml-[100px] text-gray-300 text-4xl z-10 cursor-pointer">
                        ❯
                    </button>
                </div>
            </div>

            <div className="mt-[40px] flex flex-row items-center">
                <ProjectDetailInfoCard />
                <ProjectSummarySection title={title} />
            </div>

            <footer style={{fontFamily: 'Space Grotesk', fontSize: 20}} className="fixed pt-[30px] left-0 w-full z-10 text-center text-l text-gray-500 flex flex-row justify-between items-center gap-3 relative">
                <div className="text-white font-semibold ml-[23px]">광운대 멋쟁이사자처럼</div>
                <div className="text-gray-400">© 2025 LIKE LION KWUNIV</div>
                <div className="flex items-center gap-3 mr-[23px]">
                    <span>Contact us!</span>
                    <img src="/images/Email.png" alt="mail" className="w-4 h-4" />
                    <img src="/images/insta.png" alt="insta" className="w-4 h-4" />
                    <img src="/images/git.png" alt="github" className="w-4 h-4" />
                </div>
            </footer> 
      </div>
    </div>
  );
}

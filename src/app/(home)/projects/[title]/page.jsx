import React, { useState } from "react";
import { useParams,useNavigate, useLocation } from "react-router-dom";
import ProjectSummarySection from "../../../../components/(home)/project/template/detail/ProjectSummarySection";
import ProjectDetailInfoCard from "../../../../components/(home)/project/template/detail/ProjectDetailInfoCard";
import ProjectFooter from "../../../../components/(home)/project/template/main/ProjectFooter";
import ListDummyProjects from "../../../../components/(home)/project/template/Projectdummy";

export default function ProjectDetailPage() {
  const { title } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = ListDummyProjects.find(p=> p.title === decodeURIComponent(title));
  const images = project?.images || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
  };

  const backPath = location.state?.from === "main" ? "/projects" : "/projects/projectlist";

  return (
    <div className="min-h-screen flex flex-col bg-black text-white px-6 md:px-24">
         <button onClick={()=>navigate(backPath)} className="ml-[70px] mt-[78px] text-4xl w-[20px] z-0 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-11 h-24">
            <path strokeLinecap="round" strokeLinejoin="round"d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="mt-[-50px] flex flex-col flex-1 items-center">
            <div>
                <div className="relative w-full flex flex-row items-center">
                    <button className="mr-[100px] z-10 cursor-pointer" onClick={goPrev}>
                        <img src="/images/img-leftBtn.svg" />
                    </button>
                    <img
                        src={images[currentIndex]} 
                        alt="Project"
                        className="w-[768px] h-[432px] rounded-[24px]"
                    />
                    <button className="ml-[100px] z-10 cursor-pointer" onClick={goNext}>
                        <img src="/images/img-rightBtn.svg" />
                    </button>
                </div>
            </div>

            <div className="mt-[40px] flex flex-row">
                <ProjectDetailInfoCard project={project}/>
                <ProjectSummarySection title={title} />
            </div>
        </div>
        <ProjectFooter/>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectMainCard from "./ProjectMainCard";


const dummyProjects = [
  {
    id: 1,
    title: "KW-VIZER",
    description: "학사정보 기반 AI 진로 상담 챗봇",
    image: "/images/kwvizer.png",
  },
  {
    id: 2,
    title: "KW-VIZER",
    description: "학사정보 기반 AI 진로 상담 챗봇",
    image: "/images/kwvizer.png",
  },
  {
    id: 3,
    title: "KW-VIZER",
    description: "학사정보 기반 AI 진로 상담 챗봇",
    image: "/images/kwvizer.png",
  },
  {
    id: 4,
    title: "KW-VIZER",
    description: "학사정보 기반 AI 진로 상담 챗봇",
    image: "/images/kwvizer.png",
  },
  {
    id: 5,
    title: "KW-VIZER",
    description: "학사정보 기반 AI 진로 상담 챗봇",
    image: "/images/kwvizer.png",
  },
];

export default function ProjectSection() {
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();

    const CARD_WIDTH=545;
    const GAP=48;

    const handlePrev = () => {
        if (startIndex !== 0) 
            setStartIndex(startIndex - 1);
        
    };

    const handleNext = () => {
        if (startIndex < 4) setStartIndex(startIndex + 1);
    };

    return (
        <section className="flex flex-row relative z-10 mt-[140px] pl-6 md:pl-24">
            <div className="mr-[139px]">
                <h2 style={{fontFamily:'Space Grotesk', fontSize: 48}} className="text-white text-3xl font-bold mb-8 mt-[50px]">Works</h2>

                <div className="flex items-center gap-3">
                    <button onClick={handlePrev} className="w-[96px] h-[96px] rounded-full border border-white text-white text-5xl flex items-center justify-center cursor-pointer">
                        ←
                    </button>
                    <button onClick={handleNext} className="w-[96px] h-[96px] rounded-full border border-white text-5xl bg-white text-black flex items-center justify-center cursor-pointer">
                        →
                    </button>
                </div>

                <button onClick={() => navigate("/projects/projectlist")} style={{fontFamily: 'Space Grotesk', fontSize: 20}} className="w-[217px] h-[71px] mt-[32px] px-4 py-2 bg-black text-white border border-white rounded-[16px] cursor-pointer">
                    More project?
                </button>
            </div>


            <div className="overflow-hidden w-full">
                <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${startIndex * (CARD_WIDTH + GAP)}px)`,
                }}
                >
                {dummyProjects.map((project) => (
                    <ProjectMainCard key={project.id} project={project} />
                ))}
                </div>
            </div>
        </section>
    );
}

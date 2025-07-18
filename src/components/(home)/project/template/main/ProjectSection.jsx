import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectMainCard from "./ProjectMainCard";

export default function ProjectSection({projects =[]}) {
    const [startIndex, setStartIndex] = useState(0);
    const navigate = useNavigate();

    const CARD_WIDTH=545;
    const GAP=48;

    const handlePrev = () => {
        if (startIndex !== 0) 
            setStartIndex(startIndex - 1);
        
    };

    const handleNext = () => {
        if (startIndex < projects.length -1) setStartIndex(startIndex + 1);
    };

    if (!Array.isArray(projects) || projects.length === 0) {
    return <p className="text-white pl-24">프로젝트가 없습니다.</p>;
    }

    return (
        <section className="flex flex-row relative z-10 mt-[140px] pl-6 md:pl-24">
            <div className="mr-[139px]">
                <h2 style={{fontFamily:'Space Grotesk', fontSize: 48}} className="text-white text-3xl font-bold mb-8 mt-[50px]">Works</h2>

                <div className="flex items-center gap-3">
                    <button onClick={handlePrev} className="w-[96px] h-[96px] flex items-center justify-center cursor-pointer">
                        <img src="/images/leftBtn.svg" />
                    </button>
                    <button onClick={handleNext} className="w-[96px] h-[96px] flex items-center justify-center cursor-pointer">
                        <img src="/images/rightBtn.svg" />
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
                {projects.map((project, index) => {
                    console.log("project in map:", project); 
                    return (
                    <ProjectMainCard key={index} project={{
                        idx: index + 1,
                        title: project.title,
                        description: project.line_introduction,
                        thumbnail: project.url }} />
                )})}
                </div>
            </div>
        </section>
    );
}

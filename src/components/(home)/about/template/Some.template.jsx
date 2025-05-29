import React, { useState, useEffect, useRef } from "react";
import backend from "../curriculumData/backendCurriculum";
import frontend from "../curriculumData/frontendCurriculum";
import design from "../curriculumData/designCurriculum";
import CurriculumBt from "./curriculumBt";

const Curriculum = () => {
  const [selected, setSelected] = useState("backend");
  const [activeIndex, setActiveIndex] = useState(null);

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        if (rect.top <= centerY && rect.bottom >= centerY) {
          setActiveIndex(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const current = selected === "backend" ? backend : selected === "frontend" ? frontend : design;

	return (
	<div className="relative bg-black text-white min-h-screen px-6 md:px-24 py-12 overflow-hidden">
		<img
		src="/images/g91 2.png"
		alt="background globe"
		className="absolute bottom-100 right-0 w-[1000px] opacity-90 brightness-125 pointer-events-none select-none z-0"
		/>

		<div className="relative z-10">
		<h2 className="text-center text-lg md:text-2xl mt-[180px] mb-[110px]">
			광운대 멋쟁이사자처럼 13기 커리큘럼을 소개합니다
		</h2>

		<CurriculumBt selected={selected} onSelect={setSelected} />

		<h3 className="text-2xl font-semibold mb-8 mt-[164px] ml-[96px]">
			{selected === "backend"	? "백엔드 커리큘럼 상세보기": selected === "frontend" ? "프론트엔드 커리큘럼 상세보기" : "디자인 커리큘럼 상세보기"}
		</h3>

		<ul className="space-y-12 mt-[140px]">
			{current.map((item, index) => (
			<li
			key={item.number}
			ref={(el) => (sectionRefs.current[index] = el)}
			className="relative flex items-start mt-[134px] ml-[96px] mr-[176px]"
			>
			<div className="relative flex flex-col items-center mr-6">
				{index !== current.length -1 && (
				<div className="absolute top-[47.44px] h-[calc(100%+160px)] w-px bg-white"></div>
				)}

				<div
				className={`w-[47.44px] h-[47.44px] rounded-full text-[24px] font-bold flex items-center justify-center transition-all duration-300 z-10 ${
					activeIndex === index
					? "bg-white text-[#E74F13] shadow-[0px_4px_30px_rgba(231,79,19,1)]"
					: "bg-[#1A1A1A] text-white border-2 border-white"
				}`}
				>
				{item.number}
				</div>
			</div>

			<div>
				<h4 className="text-xl font-bold mb-2">{item.title}</h4>
				<p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-line">
				{item.description}
				</p>
			</div>
			</li>
			))}
		</ul>

		<footer className="mt-[576px] text-sm text-gray-500 text-center flex flex-row justify-between item-center gap-3">
    		<div className="font-semibold">광운대 멋쟁이사자처럼</div>
    		<div className="text-gray-400">© 2025 LIKE LION KWUNIV</div>
			<div className="flex items-center gap-3">
				<span>Contact us!</span>
				<img src="/images/Email.png" alt="mail" className="w-4 h-4" />
				<img src="/images/insta.png" alt="insta" className="w-4 h-4" />
				<img src="/images/git.png" alt="github" className="w-4 h-4" />
			</div>
		</footer>
		</div>
	</div>
	);
};

export default Curriculum;

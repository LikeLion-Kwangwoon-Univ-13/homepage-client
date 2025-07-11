import React from "react";
import ProjectSection from "./ProjectSection";
import ProjectFooter from "./ProjectFooter";
import { useQuery } from "@tanstack/react-query";
import http from "../../../../../service/api/axios";

const fetchProjectHome = async () => {
  const res = await http.get("/api/projects", {
    params: { section: "home" },
  });
  return res.data;
}

const ProjectMain = () => {
  const {data, isLoading, isError, error } = useQuery({
    queryKey: ["project-home"],
    queryFn: fetchProjectHome,
});

  const containerStyle = {
    width: "100%",
    overflow: "hidden",
    height: "280px",
    marginTop: "98px",
    position: "relative",
  };

  const textStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    color: "white",
    fontFamily: "Space Grotesk",
    fontSize: "220px",
    fontWeight: 400,
    textShadow: "0px 4px 25px rgba(229, 50, 15, 0.5)",
    animation: "slideLeft 25s linear infinite",
  };
console.log("data:", data);
console.log("data.projects:", data?.projects);

  const projectsToShow =(() => {
    if (!data || !Array.isArray(data.projects)) return [];
    return data.projects.slice(0, 5);
  })();

  if (isLoading) return <p style={{fontFamily: 'Space Grotesk', fontSize: '20px'}} className="text-white">로딩 중...</p>;

  if(isError) {
    if(error.response?.status ===404) {
      return <p style={{fontFamily: 'Space Grotesk', fontSize: '20px'}} className="text-white">ERROR : 해당 정보를 찾을 수 없습니다.</p>;
    }
    return <p style={{fontFamily: 'Space Grotesk', fontSize: '20px'}} className="text-white">문제가 발생했습니다: {error.message}</p>;
  }

  return (
    <>
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      
      <div className="flex-1 min-h-screen">
        <div style={containerStyle}>
          <div style={textStyle}>
            OUR PROJECTS - EXPLORE<span style={{ display: "inline-block", width: "200px" }}></span>OUR PROJECTS - EXPLORE<span style={{ display: "inline-block", width: "200px" }}></span>OUR PROJECTS - EXPLORE<span style={{ display: "inline-block", width: "200px" }}></span>OUR PROJECTS - EXPLORE
          </div>
        </div>

        <img src="/images/project-bg.png" className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[467px] z-[-1/2] pointer-events-none select-none" />

        <ProjectSection projects={projectsToShow}/>
      </div>
      <ProjectFooter/>
    </>
  );
};

export default ProjectMain;

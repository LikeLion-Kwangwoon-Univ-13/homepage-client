import React from "react";
import ProjectSection from "./ProjectSection";
import ProjectFooter from "./ProjectFooter";

const ProjectMain = () => {
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
    animation: "slideX 10s ease-in-out infinite alternate",
  };

  return (
    <>
      <style>{`
        @keyframes slideX {
          0% {
            transform: translateX(2%);
          }
          100% {
            transform: translateX(-10%);
          }
        }
      `}</style>
      
      <div className="flex-1">
        <div style={containerStyle}>
          <div style={textStyle}>
            OUR PROJECTS - EXPLORE<span style={{ display: "inline-block", width: "200px" }}></span>OUR PROJECTS - EXPLORE
          </div>
        </div>

        <img src="/images/project-bg.png" className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[467px] z-[-1/2] pointer-events-none select-none" />

        <ProjectSection/>
      </div>
      <ProjectFooter/>
    </>
  );
};

export default ProjectMain;

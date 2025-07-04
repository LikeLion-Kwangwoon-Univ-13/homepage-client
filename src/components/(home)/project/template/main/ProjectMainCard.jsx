import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProjectMainCard({ project }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/projectpage/${encodeURIComponent(project.title)}`)}
      className="group flex-shrink-0 w-[545px] h-[365px] bg-[#1A1A1A] text-white p-4 rounded-[32px] border border-[1px] cursor-pointer hover:shadow-xl transition mr-[48px]"
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="rounded-full w-[185px] h-[185px] mt-[20px] ml-[50px]"
      />
      <div className="flex justify-between items-start mt-[10px] pl-[54px]">
        <div>
            <h3 style={{fontFamily: 'Space Grotesk', fontSize: 40, fontWeight: 700}} className="mt-[10px]">{project.title}</h3>
            <h3 style={{fontFamily: 'Space Grotesk', fontSize: 24, fontWeight: 700}} className="w-[320px] truncate">{project.description}</h3>
        </div>
        <span style={{fontFamily: 'Space Grotesk', fontSize: 70, fontWeight: 700}} className="mr-[20px] text-right text-rgba(94, 94, 94, 1) opacity-30 mt-2 transition-all duration-300 group-hover:opacity-100 group-hover:drop-shadow-[0_0_10px_rgba(233,115,24,1)]">
            {String(project.id).padStart(2, "0")}
        </span>
      </div>
    

    </div>
  );
}

ProjectMainCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

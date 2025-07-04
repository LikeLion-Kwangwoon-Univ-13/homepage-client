import React from "react";

const ProjectListCard = ({ title, type, description, image }) => {
  return (
    <div className="rounded-[24px] p-[34px] text-white min-w-[450px] aspect-[450/410] border border-white-1px">
      <div className="flex items-center justify-center min-w-[375px] aspect-[375/211] rounded-[24px] border border-white-1px">
        <img src={image} alt="project-image" className="min-w-[375px] aspect-[375/211] opacity-30" />
      </div>
      <div style={{fontFamily: 'Space-Grotesk', fontSize: '24px'}}className="mt-[32px] font-bold">{title} <span style={{fontFamily: 'Space-Grotesk', fontSize: '20x'}} className="ml-[20px] text-gray-400">{type}</span></div>
      <div style={{fontFamily: 'Space-Grotesk', fontSize: '20px'}} className="mt-[32px] whitespace-nowrap overflow-hidden text-ellipsis">{description}</div>
    </div>
  );
};

export default ProjectListCard;

import React from "react";

const ProjectListCard = ({ title, type, description, image }) => {
  return (
    <div className="rounded-[24px] p-[34px] text-white w-[450px] h-[410px] border border-white-1px">
      <div className="flex items-center justify-center rounded-[24px] border border-white-1px">
        <img src={image} alt="project-thumbnail" className="w-[375px] h-[211px] opacity-30" />
      </div>
      <div style={{fontFamily: 'Space-Grotesk', fontSize: '24px'}}className="mt-[32px] font-bold">{title} <span style={{fontFamily: 'Space-Grotesk', fontSize: '20x'}} className="ml-[20px] text-gray-400">{type}</span></div>
      <div style={{fontFamily: 'Space-Grotesk', fontSize: '20px'}} className="mt-[32px] whitespace-nowrap overflow-hidden text-ellipsis">{description}</div>
    </div>
  );
};

export default ProjectListCard;

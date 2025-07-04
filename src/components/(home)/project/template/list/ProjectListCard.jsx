import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectListCard = ({ title, type, description, image, isFixedSize }) => {

  const navigate = useNavigate();

  const cardClasses = isFixedSize
    ? "w-[450px] h-[410px]"
    : "min-w-[450px] aspect-[450/410]";

  const imageClasses = isFixedSize
    ? "w-[375px] h-[211px]"
    : "min-w-[375px] aspect-[375/211]";

  const handleClick = () => {
    navigate(`/projects/projectpage/${encodeURIComponent(title)}`,{state: {from: "list" },});
  };

  return (
    <div onClick={handleClick} className={`rounded-[24px] p-[34px] text-white cursor-pointer border border-white-1px ${cardClasses}`}>
      <div className="flex items-center justify-center min-w-[375px] aspect-[375/211] rounded-[24px] border border-white-1px">
        <img src={image} alt="project-image" className={` ${imageClasses} opacity-30`} />
      </div>
      <div style={{fontFamily: 'Space-Grotesk', fontSize: '24px'}}className="mt-[32px] font-bold">{title} <span style={{fontFamily: 'Space-Grotesk', fontSize: '20x'}} className="ml-[20px] text-gray-400">{type}</span></div>
      <div style={{fontFamily: 'Space-Grotesk', fontSize: '20px'}} className="mt-[32px] whitespace-nowrap overflow-hidden text-ellipsis">{description}</div>
    </div>
  );
};

export default ProjectListCard;

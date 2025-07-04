import React from "react";

const TeamList = ({ team }) => {
  return (
    <div style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }} className="text-white">
      <div className="flex flex-wrap justify-end gap-x-[21px] leading-tight">
        {team.map((member, idx) => (
          <span key={idx} className="m-0 p-0 whitespace-nowrap">
            {member.role} · {member.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TeamList;

import React from "react";

const roleMap = {
  프론트엔드: "frontend",
  백엔드: "backend",
  디자인: "design",
};

const TeamList = ({ team }) => {
  if (!Array.isArray(team) || team.length === 0) {
    return (
      <div style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }} className="text-white text-right">
        팀 정보 없음
      </div>
    );
  }

  // 2명 이하면 한 줄
  if (team.length <= 2) {
    return (
      <div style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }} className="text-white">
        <div className="flex justify-end gap-x-5 leading-tight flex-wrap">
          {team.map((member) => (
            <span key={`${member.name}-${member.role}`} className="whitespace-nowrap">
              {roleMap[member.role] || member.role} · {member.name}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // 3명 이상이면 2명씩 줄바꿈
  const chunkedTeam = [];
  for (let i = 0; i < team.length; i += 2) {
    chunkedTeam.push(team.slice(i, i + 2));
  }

  return (
    <div style={{ fontFamily: 'Space Grotesk', fontSize: '20px' }} className="text-white space-y-[4px]">
      {chunkedTeam.map((pair, rowIdx) => (
        <div key={rowIdx} className="flex justify-end gap-x-5 leading-tight">
          {pair.map((member) => (
            <span key={`${member.name}-${member.role}`} className="whitespace-nowrap">
              {roleMap[member.role] || member.role} · {member.name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeamList;

// ProjectSummarySection 
import React from "react";

export default function ProjectSummarySection({ title, introduction }) {
  return (
    <div className="w-[657px] mb-8 ml-[40px] mr-[184px]">
      <h2
        style={{ fontFamily: "Space Grotesk", fontSize: "40px", fontWeight: 700, }}
        className="mb-[24px]"
      >
        {title}
      </h2>
      <p
        style={{ fontFamily: "Space Grotesk", fontSize: "24px", fontWeight: 500 }}
        className="leading-relaxed"
      >
        {introduction}
      </p>
    </div>
  );
}

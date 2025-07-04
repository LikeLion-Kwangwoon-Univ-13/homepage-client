import React, { useEffect, useState } from "react";
import ProjectListCard from "./ProjectListCard";
import ListDummyProjects from "../Projectdummy";
import ListDropdown from "./ListDropdown";

const ProjectListSection = ({query}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ListDummyProjects);
  }, []);

  const [selectedGen, setSelectedGen] = useState("전체");
  const [selectedAct, setSelectedAct] = useState("전체");

  const handleGenChange = (val) => setSelectedGen(val);
  const handleActChange = (val) => setSelectedAct(val);

  const filteredProjects = ListDummyProjects.filter((projects) => {
    const matchGen = selectedGen === "전체" || projects.generation === selectedGen;
    const matchAct = selectedAct === "전체" || projects.activity === selectedAct;
    const matchQuery = query.trim() === "" || projects.title.toLowerCase().includes(query.toLowerCase());

    return matchGen && matchAct && matchQuery;
  })

  const isSmallCount = filteredProjects.length <= 2;
  return (
    <div className="mb-10">
        <div className="flex gap-[12px] mt-[80px] mb-[31px]">
            <ListDropdown label="기수" options={["전체", "13기", "12기"]} onSelect={handleGenChange}/>
            <ListDropdown label="활동" options={["전체", "해커톤", "아이디어톤", "프로젝트", "개인"]} onSelect={handleActChange} />
        </div>

<div className="w-full">
  <div
        className={`${
          isSmallCount
            ? "flex flex-row flex-wrap gap-[32px]"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[32px]"
        }`}
    style={{
      gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
    }}
  >
    {filteredProjects.map((project, idx) => (
      <ProjectListCard
        key={idx}
        title={project.title}
        type={project.type}
        description={project.description}
        image={project.image}
        isFixedSize={isSmallCount}
      />
    ))}
  </div>
</div>
    </div>

  );
};

export default ProjectListSection;

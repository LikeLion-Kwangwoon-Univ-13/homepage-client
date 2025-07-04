import React, { useEffect, useState } from "react";
import ProjectListCard from "./ProjectListCard";
import ListDummyProjects from "../Projectdummy";
import ListDropdown from "./ListDropdown";

const ProjectListSection = () => {
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
    return matchGen && matchAct;
  })
  return (
    <div className="mb-10">
        <div className="flex gap-[12px] mt-[80px] mb-[31px]">
            <ListDropdown label="기수" options={["12기", "13기"]} onSelect={handleGenChange} />
            <ListDropdown label="활동" options={["해커톤", "아이디어톤", "개인 활동"]} onSelect={handleActChange} />
        </div>

<div className="w-full">
  <div
    className="grid gap-[32px]"
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
      />
    ))}
  </div>
</div>
    </div>

  );
};

export default ProjectListSection;

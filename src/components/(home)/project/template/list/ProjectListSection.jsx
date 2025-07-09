import React, { useEffect, useState } from "react";
import ProjectListCard from "./ProjectListCard";
import ListDummyProjects from "../Projectdummy";
import ListDropdown from "./ListDropdown";
import http from "../../../../../service/api/axios";

const ProjectListSection = ({query}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await http.get("/api/projects/history", {
          params: {
            cursor: 0,
            limit: 12,
          },
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("프로젝트 목록 api 응답: ", res.data);
        setProjects(res.data.projects || [] );
      } catch (error) {
        console.error("프로젝트 목록 불러오기 실패: ",error);
        if(error.response) {
          console.log("응답 상태: ", error.response.status);
          console.log("응답 내용", error.response.data);
        }
      }
    };
    fetchProjects();
  }, []);

  const [selectedGen, setSelectedGen] = useState("전체");
  const [selectedAct, setSelectedAct] = useState("전체");

  const handleGenChange = (val) => setSelectedGen(val);
  const handleActChange = (val) => setSelectedAct(val);

  const filteredProjects = projects.filter((project) => {
    const matchGen = selectedGen === "전체" || project.generation === selectedGen;
    const matchAct = selectedAct === "전체" || project.activity === selectedAct;
    const matchQuery = query.trim() === "" || project.title.toLowerCase().includes(query.toLowerCase());

    return matchGen && matchAct && matchQuery;
  });

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
        id={project.id}
        title={project.title}
        type={project.part}
        description={project.line_introduction}
        image={project.url}
        isFixedSize={isSmallCount}
      />
    ))}
  </div>
</div>
    </div>

  );
};

export default ProjectListSection;

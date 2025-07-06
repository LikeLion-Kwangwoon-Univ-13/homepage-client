import TeamList from "./TeamList";

export default function ProjectDetailInfoCard({project}) {
  if (!project) return null;

  return (
    <div style={{fontFamily: 'Space Grotesk'}} className="ml-[300px] px-[45px] pt-[32px] border rounded-[20px] w-[548px] h-[423px]">
        <h2 style={{fontSize: "24px", fontWeight: 700}} className="mb-[20px]">헌터X헌터</h2>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}} className="font-semibold whitespace-nowrap">팀원</div>
            <TeamList team={project.team} />
        </div>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>기술스택</div>
            <div style={{fontSize: "20px", fontWeight: 400}} className="ml-[120px]">
                {project.stack}
            </div>
        </div>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>진행 기수</div>
            <div style={{fontSize: "20px", fontWeight: 400}} className="ml-[120px]">
                {project.generation}
            </div>
        </div>
        <div className="mb-[20px] flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>프로젝트 형태</div>
            <div style={{fontSize: "20px", fontWeight: 400}} className="ml-[80px]">
                {project.type}
            </div>
        </div>
        <div className="flex flex-row">
            <div style={{fontSize: "20px", fontWeight: 700}}>프로젝트 기간</div>
            <div style={{fontSize: "20px", fontWeight: 400}} className="ml-[80px]">
                {project.term}
            </div>
        </div>
      <div className="flex gap-4 mt-4">
        <img src="/images/insta_svg.svg" alt="instagram" className="w-6 h-6" />
        <img src="/images/git_svg.svg" alt="github" className="w-6 h-6" />
      </div>
    </div>
  );
}
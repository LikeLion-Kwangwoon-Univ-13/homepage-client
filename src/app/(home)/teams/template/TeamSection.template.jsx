import { useQuery } from "@tanstack/react-query";
import TeamCard from "./TeamCard";
import http from "@/service/api/axios";

export default function TeamSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["team-members"],
    queryFn: async () => {
      const res = await http.get("api/members/13");
      return res.data;
    },
  });

  if (isLoading) {
    return <p className="text-white text-center mt-20">불러오는 중...</p>;
  }

  if (isError || !data) {
    return <p className="text-red-500 text-center mt-20">데이터를 불러오지 못했습니다.</p>;
  }

  const execMembers = data.members.filter((m) => m.position === "운영진");
  const babyLions = data.members.filter((m) => m.position === "아기사자");

  return (
    <section className="relative w-full bg-[#1A1A1A] text-white py-12 min-h-[100vh]">
      <div className="max-w-[1411px] mx-auto px-2 relative z-10">
        <h2 className="text-[30px] font-bold mb-6">광운대 멋쟁이사자를 소개합니다.</h2>

        {/* 운영진 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[24px] font-semibold whitespace-nowrap">13기 운영진</h3>
            <div className="h-[1px] bg-white flex-1"></div>
          </div>
          <div className="flex flex-wrap justify-start gap-[10px]">
            {execMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={`${member.generation}기 ${member.part}`}
                stack={member.stacks}
                github={member.github}
                instagram={member.instagram}
                profile={member.profile}
              />
            ))}
          </div>
        </div>

        {/* 아기사자 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[24px] font-semibold whitespace-nowrap">13기 아기사자</h3>
            <div className="h-[1px] bg-white flex-1"></div>
          </div>
          <div className="flex flex-wrap justify-start gap-[10px]">
            {babyLions.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={`${member.generation}기 ${member.part}`}
                stack={member.stacks}
                github={member.github}
                instagram={member.instagram}
                profile={member.profile}
              />
            ))}
          </div>
        </div>
      </div>

      <img
        src="/images/BlendGroup11.png"
        alt="배경"
        className="absolute bottom-0 left-0 w-screen h-auto z-[0]"
      />
    </section>
  );
}

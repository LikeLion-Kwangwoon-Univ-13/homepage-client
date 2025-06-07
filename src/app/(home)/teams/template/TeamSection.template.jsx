import TeamCard from "./TeamCard";
import { execMembers, babyLions } from "../teamData";

export default function TeamSection() {
  return (
    <section className="text-white w-full px-6 py-12 max-w-[1500px] mx-auto">
      {/* 상단 제목 */}
      <h2 className="text-[30px] font-bold mb-6">광운대 멋쟁이사자를 소개합니다.</h2>

      {/* 운영진 */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <h3 className="text-[24px] font-semibold whitespace-nowrap">13기 운영진</h3>
          <div className="h-[1px] bg-white flex-1"></div>
        </div>

        {/* 위 5명 */}
        <div className="flex gap-[24px] mb-6">
          {execMembers.slice(0, 5).map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>

        {/* 아래 4명 */}
        <div className="flex gap-[24px]">
          {execMembers.slice(5).map((member, idx) => (
            <TeamCard key={idx} {...member} />
          ))}
        </div>
      </div>
      <div className="relative">
        <img
            src="/images/BlendGroup11.png"
            alt="배경"
            className="absolute top-0 left-0 w-full max-w-[1728px] h-auto object-cover -z-10"
        />
        
        {/* 아기사자 */}
        <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
            <h3 className="text-[24px] font-semibold whitespace-nowrap">13기 아기사자</h3>
            <div className="h-[1px] bg-white flex-1"></div>
            </div>

            {/* 위 5명 */}
            <div className="flex gap-[24px] mb-6">
            {babyLions.slice(0, 5).map((member, idx) => (
                <TeamCard key={idx} {...member} />
            ))}
            </div>

            {/* 가운데 5명 */}
            <div className="flex gap-[24px] mb-6">
            {babyLions.slice(5, 10).map((member, idx) => (
                <TeamCard key={idx} {...member} />
            ))}
            </div>

            {/* 아래 3명 */}
            <div className="flex gap-[24px]">
            {babyLions.slice(10).map((member, idx) => (
                <TeamCard key={idx} {...member} />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}

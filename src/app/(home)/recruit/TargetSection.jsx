import { cn } from "@/utils";

export default function TargetSection() {
  const wrapper = cn( 
    "w-[1203px]", 
    "h-[536px]",
    "mx-auto",
    "mt-[-530px]", //모집파트, 모집대상 사이거리
    "pt-[200px]",
    "flex",
    "flex-col",
    "items-center"
  );

  const title = cn(
    "text-[45px]",
    "font-bold",
    "mb-[84px]",
    "font-space",
    "text-white"
  );

  const cardRow = cn("flex", "gap-[31.5px]");

  const cardBox = cn(
    "w-[380px]",
    "h-[350px]",
    "bg-[#F0F0F0]/50",
    "rounded-[24px]",
    "shadow-[0_4px_15px_0_rgba(255,205,132,0.25)]",
    "px-[48px]",
    "pt-[43px]",
    "pb-[43px]",
    "text-left"
  );

  const image = cn("w-[153px]", "h-[148px]", "mx-auto", "mb-[30px]");
  const cardTitle = cn(
    "text-black",
    "text-[30px]",
    "font-bold",
    "leading-[100%]",
    "mb-[10px]",
    "font-space"
  );
  const cardDesc = cn(
    "w-[300px]",
    "text-black",
    "text-[14px]",
    "whitespace-pre-line",
    "leading-[140%]",
    "tracking-[-0.3px]",
    "font-space"
  );

  const cards = [
    {
      title: "열정",
      description: `새로운 지식과 프로젝트에 끊임없이 도전하는
      열정과 탐구심을 가진 분을 원해요.`,
      imgSrc: "/images/passion.png",
    },
    {
      title: "협업",
      description: `팀원들과의 소통을 중요하게 여기고, 서로의 의견을
      존중하며 함께 성장하고자 하는 분을 원해요.`,
      imgSrc: "/images/network.png",
    },
    {
      title: "책임",
      description: `매주 정기 세션과 필수 활동에 1년간 꾸준히
      참여하며 책임감을 가지고 임할 수 있는 분을 원해요.`,
      imgSrc: "/images/responsibility.png",
    },
  ];

  return (
    
    <div className={wrapper}>
      <img
        src="/images/Ellipse28.png"
        alt="달28"
        className="absolute top-[1796px] left-[-884px] w-[1705px] h-[1705px] pointer-events-none select-none z-10"
      />
      <div className={title}>모집 대상</div>
      <div className={cardRow}>
        {cards.map((card, idx) => (
          <div key={idx} className={cardBox}>
            <img src={card.imgSrc} alt={card.title} className={image} />
            <div className={cardTitle}>{card.title}</div>
            <div className={cardDesc}>{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

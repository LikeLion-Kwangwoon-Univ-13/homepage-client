import { cn } from "@/utils";

export default function PartSection() {
  const container = cn(
    "w-[1240px] h-[383.28px]",
    "mx-auto",
    "mt-[400px]",
    "text-white",
    "text-center"
  );

  const title = cn(
    "text-[45px]",
    "font-bold",
    "mb-[84px]", // title과 cardWrap 사이 간격
    "font-space"
  );

  const cardWrap = cn(
    "flex",
    "justify-between",
    "gap-x-[50px]"
  );

  const cardBox = cn(
    "w-[380px]",
    "h-[168.56px]",
    "rounded-[24px]",
    "bg-[#151515]/50",
    "flex flex-col items-start justify-center",
    "px-[48px]",
    "pt-[43px]",
    "pb-[43px]",
    "gap-[10px]",
    "text-white",
    "text-[20px]",
    "text-left",
    "font-bold",
    "shadow-[0px_4px_15px_0px_#FFCD84]"
  );

  const cardText = cn(
    "text-[32px]",
    "font-semibold",
    "leading-tight",
    "whitespace-pre-line",
    "font-space"
  );

  return (
    <div className="relative w-full h-[976px]"> {/* 전체 높이 확보 */}
      <img
        src="/images/Ellipse40.png"
        alt="달 배경"
        className="absolute top-[-300px] w-[2000px] h-[900px] pointer-events-none select-none z-10"
      />

      <div className={cn(container, "mt-[201px]")}>
        <div className={title}>모집 파트</div>

        <div className={cardWrap}>
          {[
            "UXUI\nDESIGNER",
            "FRONTEND\nDEVELOPER",
            "BACKEND\nDEVELOPER",
          ].map((text, i) => (
            <div key={i} className={cardBox}>
              <div className={cardText}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

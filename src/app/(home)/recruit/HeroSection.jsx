import { cn } from "@/utils";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const router = useNavigate();

  const container = {
    layout: "relative flex flex-col items-center justify-center",
    padding: "pt-[400px] pb-[50px]",
    text: "text-center"
  };

  const title = {
    base: cn(
      "w-[1225px]",
      "h-[204px]",
      "opacity-80",
      "text-[80px]",
      "leading-[100%]",
      "text-center",
      "font-space",
      "font-light",
      "tracking-[0%]"
    )
  };

  const inlineWhite = cn("inline text-white font-space");
  const inlineGold = cn("inline text-[#FFCD84] font-space");

  const rectWrap = cn(
    "flex",
    "gap-x-[13px]",
    "mt-[60px]",
    "w-[832px]",
    "h-[62px]",
    "justify-between",
    "mx-auto"
  );

  const rectBox = cn(
    "w-[156px]",
    "h-[62px]",
    "bg-[#1A1A1A]",
    "border-[2px] border-white",
    "rounded-full",
    "text-white",
    "text-[16px]",
    "font-medium",
    "flex items-center justify-center",
    "pointer-events-none"
  );

  const applyBtn = {
    base: cn("absolute cursor-pointer")
  };

  return (
    <div className={cn(container.layout, container.padding, container.text)}>
      {/* 배경 원 이미지 */}
      <img
        src="/images/Ellipse30.png"
        alt="배경 원"
        className="absolute w-[400px] h-[716px] pointer-events-none select-none"
        style={{
          top: "200px",
          right: "0px",
          position: "absolute"
        }}
      />

      {/* 문구 */}
      <div className={cn(title.base)}>
        <div className={cn(inlineWhite)}>BE THE </div>
        <div className={cn(inlineGold)}>LION</div>
        <div className={cn(inlineWhite)}>, CODE YOUR FUTURE</div>
        <br />
        <div className={cn(inlineWhite)}>AND </div>
        <div className={cn(inlineGold)}>RULE YOUR WORLD</div>
      </div>

      {/* 버튼 목록 */}
      <div className={cn(rectWrap)}>
        {["INSPIRE", "NETWORK", "INNOVATE", "PASSION", "JOURNEY"].map((word, i) => (
          <div key={i} className={cn(rectBox)}>
            {word}
          </div>
        ))}
      </div>

      {/* 지원하기 버튼 */}
      <img
        src="/images/applyBtn.png"
        alt="지원하기 버튼"
        className={applyBtn.base}
        style={{
          position: "fixed",          
          bottom: "40px",               
          right: "90px",     
          width: "282.71px",
          height: "70.78px",
          zIndex: 50, 
        }}
        onClick={() => {
          //외부 폼 이동
          window.open("https://example.com/apply", "_blank");
        }}
      />
    </div>
  );
}

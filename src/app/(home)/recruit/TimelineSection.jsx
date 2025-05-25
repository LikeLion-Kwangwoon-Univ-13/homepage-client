//footer 양쪽 끝 더 길게하기
//타임라인 위에 점이 있지 않음
import { cn } from "@/utils";

export default function TimelineSection() {
  const items = [
    { date: "2.3~2.21", label: "서류모집", color: "bg-white" },
    { date: "2.3~2.21", label: "서류 합격자 발표", color: "bg-[#E74F13]" },
    { date: "2.3~2.21", label: "면접 진행", color: "bg-[#E74F13]" },
    { date: "3.9", label: "최종 합격자 발표", color: "bg-[#E74F13]" },
    { date: "3.13", label: "OT", color: "bg-white" }
  ];

  const wrapper = cn(
    "w-[1626px] h-[468px] mt-[425px] mx-auto relative flex flex-col items-center"
  );

  const title = cn("text-white text-[45px] font-bold font-space mb-[61.7px]");
  const timeline = cn("absolute top-[160px] left-0 w-full h-[0px] border-t-[4px]");
  const itemWrapper = cn("flex justify-between w-full px-[40px] mt-[36px]");
  const itemDot = (color) => cn("w-[12px] h-[12px] rounded-full", color);
  const itemDate = cn("text-[14px] mt-[49px] text-white font-space");
  const itemLabel = cn("text-[18px] text-white font-bold whitespace-nowrap font-space");

  const footer = cn(
    "w-[1928px] h-[79px] absolute -bottom-[78px] flex justify-between items-center text-white text-[20px] font-space"
  );

  return (
    <div className={wrapper}>
      <div className={title}>모집 일정</div>

      <div
        className={timeline}
        style={{
          borderImage: "linear-gradient(to right, #ffffff00, #E74F13, #ffffff00) 1"
        }}
      />

      <div className={itemWrapper}>
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-start gap-[6px]"
          >
            <div className={itemDot(item.color)} style={{ marginTop: "-10px" }} />
            <div className={itemDate}>{item.date}</div>
            <div className={itemLabel}>{item.label}</div>
          </div>
        ))}
      </div>

      <div className={footer}>
        <footer
          className="w-full bg-cover bg-center bg-no-repeat text-white text-[20px] font-space"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundColor: "#1A1A1A"
          }}
        >
          <div className="max-w-[1728px] h-[79px] mx-auto px-[64px] flex justify-between items-center">
            <div>광운대 멋쟁이사자처럼</div>
            <div className="text-center">© 2025 LIKELION KWUNIV</div>
            <div className="flex gap-[12px] items-center">
              <div>Contact us!</div>
              <img src="/images/EmailIcon.png" alt="mail" className="w-[16px]" />
              <img src="/images/insta.png" alt="instagram" className="w-[16px]" />
              <img src="/images/git.png" alt="github" className="w-[16px]" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

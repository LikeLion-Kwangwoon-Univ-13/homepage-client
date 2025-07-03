import HeroSection from "./HeroSection";
import PartSection from "./PartSection";
import TargetSection from "./TargetSection";
import TimelineSection from "./TimelineSection";

export default function RecruitPage() {
  return (
    <div
      className="w-full overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundColor: "#1A1A1A"
      }}
    >
      <HeroSection />
      <PartSection />
      <TargetSection />
      <TimelineSection />

      <footer
        className="w-full h-[79px] bg-cover bg-center bg-no-repeat text-white text-[20px] font-space mt-[310px]"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundColor: "#1A1A1A"
        }}
      >
        <div className="max-w-[1728px] h-full mx-auto px-[64px] flex justify-between items-center">
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
  );
}


import HeroSection from "./HeroSection";
import PartSection from "./PartSection";
import TargetSection from "./TargetSection";
import TimelineSection from "./TimelineSection";

export default function RecruitPage() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.png')",
        backgroundColor: "#1A1A1A"
      }}
    >
      <HeroSection />
      <PartSection />
      <TargetSection />
      <TimelineSection />
    </div>
  );
}


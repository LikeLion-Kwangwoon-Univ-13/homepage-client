const CurriculumBt = ({ selected, onSelect }) => {
  const tabs = [
    { id: "backend", label: "백엔드" },
    { id: "frontend", label: "프론트엔드" },
    { id: "design", label: "디자인" },
  ];

  return (
    <div className="flex justify-center gap-x-[100px] mb-10">
      {tabs.map((tab) => 
      (
        <button
          key={tab.id}
          onClick={() => onSelect(tab.id)}
          style={{fontFamily: 'Space Grotesk', fontSize: 30, width: "225.5px", height: "73.8px", borderRadius: "30px", cursor: "pointer"}}
          className={`font-space text-curriculum-title font-bold rounded-full text-lg transition-all duration-200 ${
            selected === tab.id
              ? "bg-white text-black font-bold"
              : "border border-white text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default CurriculumBt;

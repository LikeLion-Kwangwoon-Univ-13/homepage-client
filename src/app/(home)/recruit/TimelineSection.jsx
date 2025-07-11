import { useQuery } from "@tanstack/react-query";
import http from "@/service/api/axios";

export default function TimelineSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recruit"],
    queryFn: async () => {
      const res = await http.get("/api/recruit");
      return res.data;
    },
  });

  const items = data
    ? [
        { date: data.documentDate, label: "서류모집", color: "bg-white" },
        { date: data.candidateDate, label: "서류 합격자 발표", color: "bg-[#E74F13]" },
        { date: data.interviewDate, label: "면접 진행", color: "bg-[#E74F13]" },
        { date: data.acceptDate, label: "최종 합격자 발표", color: "bg-[#E74F13]" },
        { date: data.otDate, label: "OT", color: "bg-white" },
      ]
    : [];

  if (isLoading)
    return <p className="text-white text-center mt-20">불러오는 중입니다...</p>;
  if (isError)
    return <p className="text-red-500 text-center mt-20">데이터 불러오기 실패</p>;

  return (
    <div className="relative flex flex-col items-center w-full max-w-[1200px] h-auto mt-[425px] mx-auto px-4">
      <div className="text-white text-[45px] font-bold font-space mb-[61.7px]">
        모집 일정
      </div>

      <div
        className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[calc(100%+100px)] h-[3px] bg-gradient-to-r from-transparent via-[#E74F13] to-transparent"
      />

      <div className="flex justify-between w-full mt-[36px] px-2 sm:px-20">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-start gap-[6px]"
          >
            
            <div
              className={
                `relative w-[12px] h-[12px] rounded-full z-10 ${item.color} ` +
                (item.color === "bg-white"
                  ? "shadow-[0_0_4px_2px_white]"
                  : "shadow-[0_0_4px_2px_#E74F13]")
              }
              style={{ marginTop: "-10px" }}
            />
            <div className="text-[24px] mt-[49px] text-white font-space text-center">
              {item.date}
            </div>
            <div className="text-[32px] text-white font-bold whitespace-nowrap font-space text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

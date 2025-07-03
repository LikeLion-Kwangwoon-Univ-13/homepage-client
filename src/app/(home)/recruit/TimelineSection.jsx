import axios from "axios";
import { useEffect, useState } from "react";

export default function TimelineSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/recruit", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const items = data
    ? [
        { date: data.documentDate, label: "서류모집", color: "bg-white" },
        { date: data.candidateDate, label: "서류 합격자 발표", color: "bg-[#E74F13]" },
        { date: data.interviewDate, label: "면접 진행", color: "bg-[#E74F13]" },
        { date: data.acceptDate, label: "최종 합격자 발표", color: "bg-[#E74F13]" },
        { date: data.otDate, label: "OT", color: "bg-white" },
      ]
    : [];

  return (
    <div className="relative flex flex-col items-center w-full max-w-[1200px] h-auto mt-[425px] mx-auto px-4">
      <div className="text-white text-[45px] font-bold font-space mb-[61.7px]">
        모집 일정
      </div>

      <div
        className="absolute top-[160px] left-0 w-full border-t-[4px]"
        style={{
          borderImage: "linear-gradient(to right, #ffffff00, #E74F13, #ffffff00) 1",
        }}
      />

      <div className="flex justify-between w-full mt-[36px] px-2 sm:px-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-start gap-[6px]"
          >
            <div
              className={`w-[12px] h-[12px] rounded-full ${item.color}`}
              style={{ marginTop: "-10px" }}
            />
            <div className="text-[14px] mt-[49px] text-white font-space text-center">
              {item.date}
            </div>
            <div className="text-[18px] text-white font-bold whitespace-nowrap font-space text-center">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

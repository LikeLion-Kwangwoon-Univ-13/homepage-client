import { useNavigate } from "react-router-dom"
import { cn } from "@/utils"

export default function PostPreviewCard({ id, title, summary, tags, imageUrl, url  }) {
  const navigate = useNavigate()

  const cardOuter = {
    layout:
      "flex items-center text-white cursor-pointer hover:border-white transition duration-200",
    border: "border-b border-gray-700",
    size: "w-[1490px] h-[300px]",
  }

  const innerWrapper = {
    layout: "flex items-center text-white",
    border: "border-b border-gray-700",
    size: "w-[1490px] h-[300px]",
  }

  const textBlock = {
    layout: "flex flex-col flex-1 pl-7",
  }

  const titleStyle = "text-[26px] font-bold mb-2"
  const summaryStyle = "text-[18px] text-gray-400 mb-6 line-clamp-2 max-w-[800px]"
  const tagListStyle = "flex gap-2 flex-wrap"
  const tagStyle = {
    appearance: "rounded-full text-xs px-3 py-1 border",
    custom: "border-[#D9D9D9]",
  }

  const imageWrapper = {
    layout: "bg-[#111] border rounded-xl p-2",
    size: "w-[375px] h-[211px] mr-[49px]",
    border: "border-[#D9D9D9]",
  }

  const imageStyle = "w-full h-full object-contain rounded-md"

  return (
    <div onClick={() => window.open(url,"_blank")} className={cn(cardOuter)}>
      <div className={cn(innerWrapper)}>
        {/* 텍스트 */}
        <div className={cn(textBlock)}>
          <h3 className={titleStyle}>{title}</h3>
          <p className={summaryStyle}>{summary}</p>
          <div className={tagListStyle}>
            {tags.map((tag, i) => (
              <span key={i} className={cn(tagStyle)}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 이미지 */}
        <div className={cn(imageWrapper)}>
          <img
            src={imageUrl || "/kw_univ_emblem.png"}
            alt={title}
            className={imageStyle}
          />
        </div>
      </div>
    </div>
  )
}

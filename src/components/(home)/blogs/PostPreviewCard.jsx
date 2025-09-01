import { useNavigate } from "react-router-dom"
import { cn } from "@/utils"

export default function PostPreviewCard({ id, title, summary, tags, imageUrl, url  }) {
  const navigate = useNavigate()

  const cardOuter = {
    layout: "flex items-center text-white cursor-pointer",
    border: "border-b border-gray-700",
    size: "w-full max-w-[1490px] min-h-[300px] py-8",
  }

  const innerWrapper = {
    layout: "flex items-center text-white w-full",
    spacing: "gap-8",
  }

  const textBlock = {
    layout: "flex flex-col flex-1 px-6",
  }

  const titleStyle = "text-[26px] font-bold mb-2"
  const summaryStyle = "text-[18px] text-[#B3B3B3] mb-6 line-clamp-2 max-w-[800px]"
  const tagListStyle = "flex gap-2 flex-wrap"
  const tagStyle = {
    appearance: "rounded-full text-xs px-3 py-1 border",
    custom: "border-[#D9D9D9]",
  }

  const imageWrapper = {
    layout: "bg-[#111] border rounded-[12px] p-2 flex-shrink-0",
    size: "w-[375px] h-[211px]",
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
            {tags && tags.map((tag, i) => (
              <span key={i} className={cn(tagStyle)}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 이미지 */}
        <div className={cn(imageWrapper)}>
          <img
            src={imageUrl || "/images/kwlogo.png"}
            alt={title}
            className={imageStyle}
            onError={(e) => {
              e.target.src = "/images/kwlogo.png"
            }}
          />
        </div>
      </div>
    </div>
  )
}

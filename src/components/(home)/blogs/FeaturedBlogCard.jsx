import { cn } from "@/utils"

export default function BlogHighlightCard({ title, description, tags, imageUrl }) {
  const cardContainer = {
    layout: 'flex items-center',
    size: 'w-[726px] h-[307px]',
    style: 'bg-[#1a1a1a] text-white rounded-2xl',
  }

  const textContainer = {
    padding: 'pl-[42.78px]',
    width: 'w-[403.17px]',
  }

  const titleStyle = 'text-[32px] font-bold mb-2'
  const descriptionStyle = 'text-[22px] text-gray-300 mb-4 line-clamp-1'
  const tagList = 'flex gap-2 flex-wrap'
  const tagStyle = {
    appearance: 'rounded-full text-xs px-3 py-1 border',
    custom: 'border-[#D9D9D9]',
  }

  const imageWrapper = {
    box: 'border rounded-xl bg-[#111] p-2',
    size: 'w-[245px] h-[140px] mr-[35.05px]',
    border: 'border-[#D9D9D9]',
  }

  const imageStyle = 'w-full h-full object-contain rounded-md'

  return (
    <div className={cn(cardContainer)}>
      <div className={cn(textContainer)}>
        <h2 className={titleStyle}>{title}</h2>
        <p className={descriptionStyle}>{description}</p>
        <div className={tagList}>
          {tags.map((tag, i) => (
            <span key={i} className={cn(tagStyle)}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={cn(imageWrapper)}>
        <img src={imageUrl} alt={title} className={imageStyle} />
      </div>
    </div>
  )
}

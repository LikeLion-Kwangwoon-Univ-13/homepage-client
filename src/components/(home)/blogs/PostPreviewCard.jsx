export default function PostPreviewCard({ title, summary, tags, imageUrl }) {
  return (
    <div
      className="flex items-center border-b border-gray-700 text-white"
      style={{ width: 1490, height: 300 }}
    >
      
      {/* 텍스트 */}
      <div
        className="flex flex-col flex-1"
        style={{ paddingLeft: 28 }}
      >
        <h3 className="text-8 font-bold mb-2">{title}</h3>
        <p className="text-[22px] text-gray-400 mb-4">{summary}</p>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full text-xs px-3 py-1 border"
              style={{ borderColor: "#D9D9D9" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 이미지 */}
      <div
        className="bg-[#111] border rounded-xl p-2 w-[]"
        style={{
          width: 375,
          height: 211,
          marginRight: 49,
          borderColor: "#D9D9D9"
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
    </div>
  );
}

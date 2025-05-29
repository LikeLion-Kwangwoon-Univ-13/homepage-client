export default function BlogHighlightCard({ title, description, tags, imageUrl }) {
  return (
    <div className="flex bg-[#1a1a1a] text-white h-[307px] w-[726px] items-center rounded-2xl">
      <div style={{ paddingLeft: 42.78, width: 403.17 }}>
        <h2 className="text-[32px] font-bold mb-2">{title}</h2>
        <p className="text-[22px] text-gray-300 mb-4">{description}</p>
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

      <div
        className="border rounded-xl bg-[#111] p-2"
        style={{
          width: 245,
          height: 140,
          marginRight: 35.05,
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

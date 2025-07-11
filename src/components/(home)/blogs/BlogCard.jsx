export default function BlogCard({ title, summary, tags }) {
	return (
		<div className="border-b border-gray-700 pb-6">
			<div className="flex justify-between items-start gap-4">
				{/* 텍스트 */}
				<div className="flex-1">
					<h3 className="text-lg font-bold mb-2">{title}</h3>
					<p className="text-sm text-gray-300 mb-2 line-clamp-2">{summary}</p>
					<div className="flex flex-wrap gap-2">
						{tags.map((tag, idx) => (
							<span key={idx} className="border border-white px-2 py-1 rounded-full text-xs">
								{tag}
							</span>
						))}
					</div>
				</div>

				{/* 이미지 */}
				<div className="w-[160px] h-[100px] rounded-xl border border-white flex items-center justify-center shrink-0">
					<img
						src="/kw_univ_emblem.png"
						alt="썸네일"
						className="w-16 opacity-20"
					/>
				</div>
			</div>
		</div>
	);
}

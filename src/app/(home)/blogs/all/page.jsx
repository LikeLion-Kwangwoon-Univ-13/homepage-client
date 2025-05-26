import { useNavigate } from "react-router-dom";
import BlogCard from "../../../../components/(home)/blogs/BlogCard";

const dummyPosts = Array(10).fill({
	title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
	summary: "글 내용 그거 아세요 끝에 붙어있는 하얀거 이름은 골락입니다. 찰떡 아이스는 원래 3알이었고 우리 아빠 오늘 일본어 공부 하심 우리엄마 독일어 하는데...",
	tags: ["13기", "해커톤", "안드로이드"]
});

export default function BlogAllPage() {
	const navigate = useNavigate();

	return (
		<div className="w-full min-h-screen bg-black text-white">
			{/* 뒤로가기 버튼 */}
			<div className="max-w-4xl mx-auto px-6 pt-10 pb-4">
				<button onClick={() => navigate(-1)} className="mr-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
						className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
			</div>

			{/* 최신글 헤더 */}
			<div className="max-w-4xl mx-auto px-6 mb-6">
				<h2 className="text-xl font-bold">최신글</h2>
			</div>

			{/* 블로그 카드 리스트 */}
			<div className="space-y-10 max-w-4xl mx-auto px-6">
				{dummyPosts.map((post, i) => (
					<BlogCard key={i} {...post} />
				))}
			</div>
		</div>
	);
}

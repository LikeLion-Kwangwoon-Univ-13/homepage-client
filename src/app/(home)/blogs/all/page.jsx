import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import Input from "../../../../components/(home)/_widget/Input";
import PostPreviewCard from "../../../../components/(home)/blogs/PostPreviewCard";

const recentPosts = [
  {
    title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
    summary: "무슨 말인지 모르겠음 그냥 쏼라쏼라쏼라쏼라쏼라.",
    tags: ["배고파", "마니", "꼬르륵"],
    imageUrl: "/images/blog1.jpg",
  },
   {
    title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
    summary: "무슨 말인지 모르겠음 그냥 쏼라쏼라쏼라쏼라쏼라.",
    tags: ["배고파", "마니", "꼬르륵"],
    imageUrl: "/images/blog1.jpg",
  },
   {
    title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
    summary: "무슨 말인지 모르겠음 그냥 쏼라쏼라쏼라쏼라쏼라.",
    tags: ["배고파", "마니", "꼬르륵"],
    imageUrl: "/images/blog1.jpg",
  },
];

export default function BlogAllPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-12">
		<div className="max-w-[1450px] mx-auto mb-6" style={{ marginTop: "30px" }}>
				<button onClick={() => navigate(-1)} className="mr-4">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none"
						viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
						className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</button>
			</div>
      {/* 검색창 */}
      <div className="mb-10 flex justify-center" style={{ marginTop: "50px" }}>
        <div className="w-full max-w-[1400px]">
          <Input state={[query, setQuery]} placeholder="멋쟁이 사자처럼의 다양한 프로젝트를 검색해보세요!" />
        </div>
      </div>

      {/* 최신글 헤더 + 더보기 */}
      <div className="max-w-[1450px] mx-auto" style={{ marginTop: "100px" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-bold">최신글</h2>
          
        </div>

        {/* 최신글 리스트 */}
        <div className="flex flex-col items-center divide-y divide-gray-700">
          {recentPosts.slice(0, 5).map((post, i) => (
            <PostPreviewCard key={i} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

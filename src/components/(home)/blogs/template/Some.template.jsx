import BlogHighlightCard from "../FeaturedBlogCard";
import PostPreviewCard from "../PostPreviewCard";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/(home)/_widget/Input";
import { Query } from "@tanstack/react-query";
import { useState } from "react";

const highlightedPosts = [
  {
    title: "제목",
    description: "쏼라쏼라쏼라쏼라쏼라쏼라",
    tags: ["13기", "해커톤", "안드로이드"],
    imageUrl: "/images/blog1.jpg",
  },
  {
    title: "제목",
    description: "얄라얄라얄라얄라얄라얄라얄라",
    tags: ["아이디어톤", "화이팅"],
    imageUrl: "/images/blog2.jpg",
  },
  {
    title: "제목",
    description: "울라울라울라울라울라울라",
    tags: ["방학은", "언제"],
    imageUrl: "/images/blog3.jpg",
  },
  {
    title: "제목",
    description: "뷁뷁뷁뷁뷁뷁뷁뷁뷁뷁뷁뷁뷁",
    tags: ["왜벌써", "시험기간"],
    imageUrl: "/images/blog3.jpg",
  },
];

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
    imageUrl: "/images/blog2.jpg",
  },
    {
    title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
    summary: "무슨 말인지 모르겠음 그냥 쏼라쏼라쏼라쏼라쏼라.",
    tags: ["배고파", "마니", "꼬르륵"],
    imageUrl: "/images/blog2.jpg",
  },
    {
    title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
    summary: "무슨 말인지 모르겠음 그냥 쏼라쏼라쏼라쏼라쏼라.",
    tags: ["배고파", "마니", "꼬르륵"],
    imageUrl: "/images/blog2.jpg",
  },
    {
    title: "제목 : 쯔양이 먹고 가서 유명해진 호반 닭갈비",
    summary: "무슨 말인지 모르겠음 그냥 쏼라쏼라쏼라쏼라쏼라.",
    tags: ["배고파", "마니", "꼬르륵"],
    imageUrl: "/images/blog2.jpg",
  },

];

export default function BlogHighlightSection() {
	const navigate = useNavigate();
  const [query, setQuery] = useState("");

  return (
    <section className="px-6 py-12 max-w-[1600px] mx-auto text-white">
      <div style={{ marginTop: "150px", marginBottom: "110px"}}>
      <div className="mb-6 w-full flex justify-center">
        <div className="w-[1450px]">
          <Input state = {[query,setQuery]} placeholder="멋쟁이 사자처럼의 다양한 프로젝트를 검색해보세요!" />
        </div>
      </div>
      </div>
      <h1 className="text-4xl font-bold mb-10">이달의 멋사 블로그 우수작</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
        {highlightedPosts.map((post, index) => (
          <div
  			key={index}
  			className="border-2 border-[#D9D9D9] w-[726px] h-[307px] rounded-2xl overflow-hidden"
		  >
            <BlogHighlightCard {...post} />
          </div>
        ))}
      </div>

	        <div style={{ marginTop: "110px" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-bold">최신글</h2>
          <button
        onClick={() => navigate("/blogs/all")}
		  	className="text-white text-sm flex items-center gap-1">
            더보기 <span className="text-xl">+</span>
          </button>
        </div>

        <div className="flex flex-col divide-y divide-gray-700">
          {recentPosts.slice(0, 5).map((post, i) => (
            <PostPreviewCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
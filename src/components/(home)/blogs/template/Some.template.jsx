import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import BlogHighlightCard from "../FeaturedBlogCard";
import PostPreviewCard from "../PostPreviewCard";
import { useNavigate } from "react-router-dom";
import Input from "../../../../components/(home)/_widget/Input";
import { useState } from "react";

export default function BlogHighlightSection() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // API 요청
  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/api/blog");
      return res.data;
    }
  });

  // 로딩/에러 처리
  if (isLoading) return <p className="text-white text-center mt-20">불러오는 중입니다~~</p>;
  if (isError) return <p className="text-red-500 text-center mt-20">데이터를 불러오는 데 실패했습니다.</p>;

  const highlightedPosts = data.best ?? [];
  const recentPosts = data.posts ?? [];

  return (
    <section className="px-6 py-12 max-w-[1600px] mx-auto text-white">
      {/* 검색창 */}
      <div style={{ marginTop: "150px", marginBottom: "110px"}}>
        <div className="mb-6 w-full flex justify-center">
          <div className="w-[1450px]">
            <Input state={[query, setQuery]} placeholder="멋쟁이 사자처럼의 다양한 프로젝트를 검색해보세요!" />
          </div>
        </div>
      </div>

      {/* 우수작 */}
      <h1 className="text-4xl font-bold mb-10">이달의 멋사 블로그 우수작</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center">
        {highlightedPosts.map((post) => (
          <div key={post.id} className="border-2 border-[#D9D9D9] w-[726px] h-[307px] rounded-2xl overflow-hidden">
            <BlogHighlightCard
              title={post.title}
              description={post.contents}
              tags={post.tags}
              imageUrl={post.thumbnail}
            />
          </div>
        ))}
      </div>

      {/* 최신글 */}
      <div style={{ marginTop: "110px" }}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[24px] font-bold">최신글</h2>
          <button onClick={() => navigate("/blogs/all")} className="text-white text-sm flex items-center gap-1">
            더보기 <span className="text-xl">+</span>
          </button>
        </div>

        <div className="flex flex-col divide-y divide-gray-700">
          {recentPosts.slice(0, 5).map((post) => (
            <PostPreviewCard
              key={post.id}
              title={post.title}
              summary={post.contents}
              tags={post.tags}
              imageUrl={post.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
import { useQuery } from "@tanstack/react-query"
import http from "@/service/api/axios"
import BlogHighlightCard from "../FeaturedBlogCard"
import PostPreviewCard from "../PostPreviewCard"
import { useNavigate } from "react-router-dom"
import Input from "../../../../components/(home)/_widget/Input"
import { useState, useMemo } from "react"
import { cn } from "@/utils"

export default function BlogHighlightSection() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await http.get("/api/blog")
      return res.data
    },
  })

  const highlightedPosts = data?.best ?? []
  const recentPosts = data?.posts ?? []

  // 검색 필터링
  const filteredHighlighted = useMemo(() => {
    if (!query.trim()) return highlightedPosts
    return highlightedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.contents.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        )
    )
  }, [query, highlightedPosts])

  const filteredRecent = useMemo(() => {
    if (!query.trim()) return recentPosts
    return recentPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.contents.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        )
    )
  }, [query, recentPosts])

  if (isLoading)
    return <p className="text-white text-center mt-20">로딩중</p>
  if (isError)
    return (
      <p className="text-red-500 text-center mt-20">
        데이터를 불러오는 데 실패했습니다.
      </p>
    )

  const sectionStyle = {
    layout: "px-6 py-12 max-w-[1600px] mx-auto",
    text: "text-white",
  }

  const searchWrap = {
    outer: "mt-[150px] mb-[110px]",
    row: "mb-6 w-full flex justify-center",
    input: "w-[1450px]",
  }

  const headingStyle = "text-4xl font-bold mb-10"

  const highlightCardWrapper = {
    grid: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 justify-items-center",
    card: "border-2 border-[#D9D9D9] w-[726px] h-[307px] rounded-2xl overflow-hidden",
  }

  const recentSection = {
    wrapper: "mt-[110px]",
    headerRow: "flex justify-between items-center mb-6",
    heading: "text-[24px] font-bold",
    moreBtn: "text-[24px] font-bold text-white text-sm flex items-center gap-1",
    postList: "flex flex-col divide-y divide-gray-700",
    noResult: "text-gray-600 text-center mt-4",
  }

  return (
    <section className={cn(sectionStyle)}>
      {/* 검색창 */}
      <div className={cn(searchWrap.outer)}>
        <div className={cn(searchWrap.row)}>
          <div className={cn(searchWrap.input)}>
            <Input
              state={[query, setQuery]}
              placeholder="멋쟁이 사자처럼의 다양한 프로젝트를 검색해보세요!"
            />
          </div>
        </div>
      </div>

      {/* 우수작 */}
      <h1 className={headingStyle}>이달의 멋사 블로그 우수작</h1>
      <div className={cn(highlightCardWrapper.grid)}>
        {filteredHighlighted.length > 0 ? (
          filteredHighlighted.map((post) => (
            <div key={post.id} className={cn(highlightCardWrapper.card)}>
              <BlogHighlightCard
                title={post.title}
                description={post.contents}
                tags={post.tags}
                imageUrl={post.thumbnail}
              />
            </div>
          ))
        ) : (
        <div className="col-span-full flex justify-center items-center h-[300px]">
          <p className={recentSection.noResult}>검색 결과가 없습니다.</p>
          </div>
        )}
      </div>

      {/* 최신글 */}
      <div className={cn(recentSection.wrapper)}>
        <div className={cn(recentSection.headerRow)}>
          <h2 className={recentSection.heading}>최신글</h2>
          <button
            onClick={() => navigate("/blogs/all")}
            className={recentSection.moreBtn}
          >
            더보기 <span className="text-[24px] font-bold">+</span>
          </button>
        </div>

        <div className={cn(recentSection.postList)}>
          {filteredRecent.length > 0 ? (
            filteredRecent.slice(0, 5).map((post) => (
              <PostPreviewCard
                key={post.id}
                title={post.title}
                summary={post.contents}
                tags={post.tags}
                imageUrl={post.thumbnail}
                url={post.url}
              />
            ))
          ) : (
            <p className={recentSection.noResult}>검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </section>
  )
}

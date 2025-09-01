import { useNavigate } from "react-router-dom"
import { useEffect, useState, useMemo } from "react"
import Input from "../../../../components/(home)/_widget/Input"
import PostPreviewCard from "../../../../components/(home)/blogs/PostPreviewCard"
import { useQuery } from "@tanstack/react-query"
import { cn } from "@/utils"
import http from "../../../../service/api/axios"


export default function BlogAllPage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await http.get("/api/blog")
      return res.data
    },
  })

  const recentPosts = data?.posts ?? [];

  const filteredPosts = useMemo(() => {
    if (!query.trim()) return recentPosts
    return recentPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.contents.toLowerCase().includes(query.toLowerCase()) ||
        (post.tags && post.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        ))
    )
  }, [query, recentPosts])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage
    return filteredPosts.slice(startIndex, startIndex + postsPerPage)
  }, [filteredPosts, currentPage, postsPerPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [query])

  if (isLoading) {
    return (
      <p className={cn({ text: "text-white text-center mt-20" })}>로딩중</p>
    )
  }

  if (isError) {
    return (
      <p className={cn({ text: "text-red-500 text-center mt-20" })}>
        오류 : 관리자에게 문의하세요.
      </p>
    )
  }

  const pageStyle = {
    layout: "w-full min-h-screen bg-[#1A1A1A] text-white px-8 py-12",
  }

  const backBtnWrapper = {
    container: "max-w-[1450px] mx-auto mb-6 mt-[30px]",
  }

  const backBtn = {
    icon: "w-8 h-8",
    button: "mr-4 p-2 hover:bg-gray-800 rounded-full transition-colors",
  }

  const searchWrapper = {
    container: "mb-10 flex justify-center mt-[50px]",
    inner: "w-full max-w-[1400px]",
  }

  const contentWrapper = {
    container: "max-w-[1450px] mx-auto mt-[100px]",
    header: "flex justify-between items-center mb-6",
    heading: "text-[24px] font-bold",
    postList: "flex flex-col items-center divide-y divide-gray-700",
    noResult: "text-gray-600 text-center mt-4",
  }



  const paginationStyle = {
    container: "flex justify-center items-center mt-12 gap-4",
    button: "text-white hover:text-gray-300 transition-colors text-lg font-medium",
    currentButton: "text-white font-bold text-lg",
    separator: "text-white mx-2",
    nextButton: "text-white hover:text-gray-300 transition-colors text-lg font-medium ml-4"
  }

  return (
    <div className={cn(pageStyle)}>
      <div className={cn(backBtnWrapper.container)}>
        <button onClick={() => navigate(-1)} className={cn(backBtn.button)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={cn(backBtn.icon)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className={cn(searchWrapper.container)}>
        <div className={cn(searchWrapper.inner)}>
          <Input
            state={[query, setQuery]}
            placeholder="멋쟁이 사자처럼의 다양한 프로젝트를 검색해보세요!"
          />
        </div>
      </div>

      <div className={cn(contentWrapper.container)}>
        <div className={cn(contentWrapper.header)}>
          <h2 className={cn(contentWrapper.heading)}>최신글</h2>
        </div>

        <div className={cn(contentWrapper.postList)}>
          {currentPosts.length > 0 ? (
            currentPosts.map((post) => (
              <PostPreviewCard
                key={post.id}
                title={post.title || '제목 없음'}
                summary={post.contents || '내용이 없습니다.'}
                tags={post.tags || []}
                imageUrl={post.thumbnail}
                url={post.url}
              />
            ))
          ) : (
            <p className={cn(contentWrapper.noResult)}>검색 결과가 없습니다.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className={cn(paginationStyle.container)}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={currentPage === page ? cn(paginationStyle.currentButton) : cn(paginationStyle.button)}
              >
                {page}
              </button>
            ))}
            
            <span className={cn(paginationStyle.separator)}>|</span>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={cn(paginationStyle.nextButton)}
            >
              다음 >
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/utils";
import http from "../../../../service/api/axios";

export default function BlogDetailPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog-detail", id],
    queryFn: async () => {
      const res = await http.get("/api/blog");
      return res.data.posts.find((post) => String(post.id) === id);
    },
    enabled: !!id, // id가 있을 때만 쿼리 실행
    retry: 2, // 실패 시 2번 재시도
  });

  const loadingStyle = { text: "text-white text-center mt-20" };
  const errorStyle = { text: "text-red-500 text-center mt-20" };

  const pageWrapper = {
    size: "max-w-[1200px] mx-auto",
    style: "text-white p-10",
  };

  const titleStyle = "text-4xl font-bold mb-4";
  const contentStyle = "text-gray-400 mb-6";
  const imageStyle = "rounded-xl w-full mb-6";

  const tagList = "flex gap-2 flex-wrap";
  const tagStyle = "px-3 py-1 text-xs border border-white rounded-full";

  if (isLoading) return <p className={cn(loadingStyle)}>로딩중</p>;
  if (isError || !data)
    return <p className={cn(errorStyle)}>게시글을 찾을 수 없습니다.</p>;

  return (
    <div className={cn(pageWrapper)}>
      <h1 className={titleStyle}>{data.title}</h1>
      <div className={contentStyle}>{data.contents}</div>
      {data.thumbnail && (
        <img src={data.thumbnail} alt={data.title} className={imageStyle} />
      )}
      <div className={tagList}>
        {data.tags && data.tags.map((tag, idx) => (
          <span key={idx} className={tagStyle}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

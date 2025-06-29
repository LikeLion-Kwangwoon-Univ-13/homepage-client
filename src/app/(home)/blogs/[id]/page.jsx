import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function BlogDetailPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blog-detail", id],
    queryFn: async () => {
      const res = await axios.get("/api/blog");
      return res.data.posts.find((post) => String(post.id) === id);
    }
  });

  if (isLoading) return <p className="text-white text-center mt-20">불러오는 중입니다~~</p>;
  if (isError || !data) return <p className="text-red-500 text-center mt-20">게시글을 찾을 수 없습니다.</p>;

  return (
    <div className="max-w-[1200px] mx-auto text-white p-10">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <div className="text-gray-400 mb-6">{data.contents}</div>
      <img src={data.thumbnail} alt={data.title} className="rounded-xl w-full mb-6" />
      <div className="flex gap-2 flex-wrap">
        {data.tags.map((tag, idx) => (
          <span key={idx} className="px-3 py-1 text-xs border border-white rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

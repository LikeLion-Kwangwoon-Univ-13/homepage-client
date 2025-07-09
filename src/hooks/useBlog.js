import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import blogApi from "../service/api/server/blog"

/**
 * 블로그 게시글 관리를 위한 React Query 훅
 * @returns {Object} 블로그 관련 데이터와 mutation 함수들
 */
export default function useBlog() {
  const queryClient = useQueryClient()

  // 일반 블로그 게시글 목록 조회
  const { data: blogData } = useQuery({
    queryKey: ['blog'],
    queryFn: blogApi.get
  })

  // 관리자용 블로그 게시글 목록 조회
  const { data: postsData } = useQuery({
    queryKey: ['blog', 'posts'],
    queryFn: blogApi.getPosts
  })

  // 새 게시글 작성
  const createPost = useMutation({
    mutationFn: blogApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['blog'])
      queryClient.invalidateQueries(['blog', 'posts'])
    }
  })

  // 게시글 수정
  const updatePost = useMutation({
    mutationFn: ({ id, ...data }) => blogApi.patch(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['blog'])
      queryClient.invalidateQueries(['blog', 'posts'])
    }
  })

  // 베스트 게시글로 설정
  const setBestPost = useMutation({
    mutationFn: blogApi.patchSetBest,
    onSuccess: () => {
      queryClient.invalidateQueries(['blog'])
      queryClient.invalidateQueries(['blog', 'posts'])
    }
  })

  // 베스트 게시글 설정 해제
  const cancelBestPost = useMutation({
    mutationFn: (id) => {
      return blogApi.patchCancelBest(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['blog'])
      queryClient.invalidateQueries(['blog', 'posts'])
    }
  })

  // 게시글 삭제
  const deletePost = useMutation({
    mutationFn: blogApi._delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['blog'])
      queryClient.invalidateQueries(['blog', 'posts'])
    }
  })

  return {
    // 일반 블로그 데이터
    bestPosts: blogData?.best || [],
    posts: blogData?.posts || [],
    totalPages: blogData?.total_page || 0,

    // 관리자용 게시글 목록
    adminPosts: postsData?.posts || [],
    createPost,
    updatePost,
    setBestPost,
    cancelBestPost,
    deletePost
  }
}
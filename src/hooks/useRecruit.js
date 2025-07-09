import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { recruitApi } from '../service/api/server/recruit'

export default function useRecruit() {
  const queryClient = useQueryClient()

  // 모집 공고 조회
  const { data: recruit } = useQuery({
    queryKey: ['recruit'],
    queryFn: recruitApi.get
  })

  // 모집 공고 등록
  const createRecruit = useMutation({
    mutationFn: recruitApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['recruit'])
    }
  })

  // 모집 공고 수정
  const updateRecruit = useMutation({
    mutationFn: ({ id, data }) => recruitApi.patch(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['recruit'])
    }
  })

  return {
    recruit,
    createRecruit,
    updateRecruit
  }
}

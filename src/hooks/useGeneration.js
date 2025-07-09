import { useMutation, useQueryClient } from "@tanstack/react-query"
import generationApi from "../service/api/server/generation"

export default function useGeneration() {
  const queryClient = useQueryClient()
  const createGeneration = useMutation({
    mutationFn: (data) => generationApi.post(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['generations'] })
    },
		onError: (error) => {
			if(error.status !== 400){
				alert('기수 생성 중 오류가 발생했습니다.')
			}
		}
  })

  const deleteGeneration = useMutation({
    mutationFn: (id) => generationApi._delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['generations'] })
    },
  })

  return {
    createGeneration,
    deleteGeneration,
  }
}
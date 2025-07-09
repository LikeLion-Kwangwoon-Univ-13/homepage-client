import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import memberApi from "../service/api/server/member"

export default function useMember(generationId) {
  const queryClient = useQueryClient()

  const { data } = useQuery({
    queryKey: ['members', generationId],
    queryFn: () => memberApi.get(generationId),
  })

  const createMember = useMutation({
    mutationFn: memberApi.post,
    onSuccess: () => {
      queryClient.invalidateQueries(['members', generationId])
    }
  })

  const updateMember = useMutation({
    mutationFn: ({id,data})=>memberApi.patch(id,data),
    onSuccess: () => {
      queryClient.invalidateQueries(['members', generationId])
    }
  })

  const deleteMember = useMutation({
    mutationFn: memberApi._delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['members', generationId])
    }
  })

  return {
    members: data?.members || [],
    createMember,
    updateMember,
    deleteMember,
  }
}
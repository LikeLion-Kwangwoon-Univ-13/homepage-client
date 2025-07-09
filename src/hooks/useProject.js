import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import projectApi from "../service/api/server/project";

export default function useProject(){
	const queryClient = useQueryClient()
	const {data}=useQuery({
		queryKey:["projects"],
		queryFn:projectApi.get,
	})

	const createProject = useMutation({
		mutationFn: (data) => projectApi.post(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] })
		},
	})

	const updateProject = useMutation({
		mutationFn: ({ id, data }) => projectApi.patch(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] })
		},
	})

	const deleteProject = useMutation({
		mutationFn: (id) => projectApi.delete(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] })
		},
	})

	return {
		projects: data?.projects || [],
		createProject,
		updateProject,
		deleteProject,
	}
}

export function useProjectById(id){
	const {data:project, isLoading, error}=useQuery({
		queryKey:["project",id],
		queryFn:()=>projectApi.getById(id),
		enabled: !!id
	})
	return {project, isLoading, error}
}
	
export function useProjectHistory(){
	const {data}=useQuery({
		queryKey:["projects","history"],
		queryFn:projectApi.getHistory
	})
	return {projects:data?.projects || []}
}

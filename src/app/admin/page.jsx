import { useQuery } from "@tanstack/react-query"
import http from "../../service/api/axios";

export default function Page() {
	const { data } = useQuery({
		queryKey: ['test'],
		queryFn: async () => {
			const res = await http.get("/api/blog");
			return res.data;
		}
	})
	console.log(data)
	return <div>admin</div>
}
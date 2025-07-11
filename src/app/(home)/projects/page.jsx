import { Routes, Route } from "react-router-dom"
import ProjectMain from "../../../components/(home)/project/template/main/Some.template";
import ProjectListPage from "./list/page";
import ProjectDetailPage from "./[title]/page";

export default function Page() {
	return (
		<>
			<Routes>
				<Route index element={<ProjectMain/>}/>
				<Route path="projectlist" element={<ProjectListPage/>}/>
				<Route path=":id" element={<ProjectDetailPage/>}/>
			</Routes>
		</>
	)
}

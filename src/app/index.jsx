import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdminHome } from "./admin";
import { Home, About, Project, Blog, Team, Recruit } from "./(home)";
import Layout from "@/components/(home)/_common/template/Layout.template.jsx";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about">
						<Route index element={<About />} />
						<Route path="ciuriculimms" element={<div>contact</div>} />
					</Route>
					<Route path="projects" element={<Project />} />
					<Route path="blogs" element={<Blog />} />
					<Route path="teams" element={<Team />} />
					<Route path="recruit" element={<Recruit />} />
				</Route>
				<Route path="/admin">
					<Route index element={<AdminHome />} />
				</Route>
				<Route path="*" element={<div>404</div>} />
			</Routes>
		</BrowserRouter>
	);
}

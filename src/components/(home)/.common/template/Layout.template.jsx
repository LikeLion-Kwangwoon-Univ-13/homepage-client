import { Outlet } from "react-router-dom";
import Header from "../organism/Header.organism";
import { cn } from "@/utils";
export default function Layout() {
	return <div className="bg-[url(/images/background.png)] w-full min-h-screen bg-[#1A1A1A]">
		<Header />
		<Outlet />
	</div>
}   
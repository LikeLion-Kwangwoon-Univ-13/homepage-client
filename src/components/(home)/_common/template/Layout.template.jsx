import { Outlet, useLocation } from "react-router-dom";
import Header from "../organism/Header.organism";
import { cn } from "@/utils"

export default function Layout() {
	const { pathname } = useLocation()
	const contianer = {
		display: 'flex flex-col w-full min-h-screen',
		style: ' overflow-y-auto bg-[url(/images/background.png)] bg-[#1A1A1A]',
		padding: pathname !== '/' ? 'pt-[92px]' : 'pt-0'
	}
	return (
		<div className={cn(contianer)}>
			<Header />
			<Outlet />
		</div>
	)
}
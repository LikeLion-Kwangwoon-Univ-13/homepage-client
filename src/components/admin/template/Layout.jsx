import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { cn } from "@/utils"
import { useAdminStore } from "../../../store/useAdminStore";
import useEnterAdmin from "../../../hooks/useEnterAdmin";
import NotFound from "@/app/not-found";

export default function AdminLayout() {
	const { setIsOpenSidebar } = useAdminStore()
	const { isEnterAdmin } = useEnterAdmin();
	const container = {
		display: 'flex flex-col',
		background: 'bg-[url(/images/background.png)] bg-[#1A1A1A]',
		size: 'w-screen h-screen',
		style: 'overflow-hidden'
	}

	const content = {
		position: 'relative z-10',
		display: 'flex',
		margin: 'mt-[80px]',
	}

	const main = {
		padding: 'p-6 ',
		size: 'w-full h-[calc(100vh-80px)] overflow-y-scroll',
	}

	if (!isEnterAdmin) return <NotFound />;
	return (
		<div className={cn(container)}>
			<Header />
			<img src="/images/sun-back.png" className="absolute z-0 left-1/2 -translate-x-1/2 h-full top-0 object-cover opacity-60 blur-sm" />
			<div className={cn(content)}>
				<Sidebar />
				<main className={cn(main)} onClick={() => {
					setIsOpenSidebar(false)
				}}>
					<Outlet />
				</main>
			</div>
		</div>
	)
}
import { cn } from "@/utils"
import { useAdminStore } from '../../../store/useAdminStore'

export default function Header() {
	const { toggleSidebar } = useAdminStore()

	const container = {
		positions: 'fixed top-0 left-0 right-0',
		display: 'flex items-center',
		size: 'w-full h-[80px]',
		background: 'bg-[#1A1A1A]',
		z: 'z-50',
		padding: 'px-6',
	}

	return <div className={cn(container)}>
		<button
			className="cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-colors"
			onClick={toggleSidebar}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
		<div className="text-white text-[24px] font-bold ml-4">
			LIKE LION Admin
		</div>
	</div>
} 
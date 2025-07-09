import { cn } from '../../../utils'
import { useAdminStore } from '../../../store/useAdminStore'
import { Link } from 'react-router-dom'
import useSignStore from '../../../store/signStore';

export default function Sidebar() {
	const { isOpenSidebar } = useAdminStore();
	const { resetPassword } = useSignStore();

	const container = {
		size: ' h-[calc(100vh-80px)]',
		background: 'bg-[#1A1A1A]',
		transform: isOpenSidebar ? 'translate-x-0 w-[280px] opacity-100' : '-translate-x-full w-0 opacity-0',
		animation: 'transition-transform duration-300 ease-in-out',
	}

	const menuItem = {
		display: 'flex items-center',
		padding: 'px-6 py-4',
		text: 'text-white text-lg font-medium',
		hover: 'hover:bg-white/10',
		animation: 'transition-colors',
	}

	const menus = [
		{ name: '대시보드', path: '/admin' },
		{ name: '블로그 관리', path: '/admin/blogs' },
		{ name: '멤버 관리', path: '/admin/generations' },
		{ name: '프로젝트 관리', path: '/admin/projects' },
		{ name: '지원 관리', path: '/admin/recruits' },
	]
	const button = {
		padding: 'py-4',
		text: 'text-white text-sm font-medium',
		position: 'absolute bottom-4 left-6',
		pointer: 'cursor-pointer',
	}

	return (
		<div className={cn(container)}>
			{menus.map((menu) => (
				<Link key={menu.path} to={menu.path} className={cn(menuItem)}>
					{menu.name}
				</Link>
			))}
			<button className={cn(button)} onClick={
				async () => {
					window.location.href = '/';
					await resetPassword();
				}}>로그아웃</button>
		</div>
	)
}

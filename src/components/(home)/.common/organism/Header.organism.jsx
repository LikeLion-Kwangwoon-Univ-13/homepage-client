import { cn } from "@/utils"
import { Link, useLocation } from "react-router-dom"
import useInitStore from "@/store/initStore"
const links = [
	{
		name: 'ABOUT',
		path: '/about'
	},
	{
		name: 'PORJECT',
		path: '/projects'
	},
	{
		name: 'BLOG',
		path: '/blogs'
	},
	{
		name: 'TEAM',
		path: '/teams'
	}
]

export default function Header() {
	const { init } = useInitStore()
	const pathname = useLocation().pathname;
	const flag = pathname === '/' ? init : true;

	const container = {
		positions: 'fixed left-0 right-0',
		top: !flag ? '-top-[92px]' : 'top-0',
		size: "w-full h-[92px]",
		display: 'flex justify-between items-center',
		bg: "bg-[#1A1A1A]",
		paddings: 'px-4',
		z: 'z-50',
		animations: 'transition-all duration-300 ease-in-out',
	}
	return <div className={cn(container)}>
		<div
			onClick={() => router('/')}
			className="flex items-center gap-x-[4.91px]">
			<img src="/images/logo.png" className="w-[47px] " />
			<div className="text-white text-[24px] font-bold">광운대학교 멋쟁이 사자처럼</div>
		</div>
		<div className="flex items-center gap-x-[52px] leading-none">
			{links.map((link, index) => (
				<Link key={index} to={link.path} className="text-white text-[24px] font-bold px-5">{link.name}</Link>
			))}
			<button
				onClick={() => router('/recruit')}
				className="text-white text-[24px] font-bold px-5 border border-white w-[129px] h-[44px] rounded-[10px]" >
				지원하기
			</button>
		</div>
	</div>
}
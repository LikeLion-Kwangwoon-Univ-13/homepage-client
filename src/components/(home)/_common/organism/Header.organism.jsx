import { cn } from "@/utils"
import { Link, useLocation, useNavigate } from "react-router-dom"
import useInitStore from "@/store/initStore"
import { useEffect, useState } from "react"
const links = [
	{
		name: 'ABOUT',
		path: '/about'
	},
	{
		name: 'PROJECT',
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
	const [hover, setHover] = useState()
	const { init } = useInitStore()
	const router = useNavigate()
	const pathname = useLocation().pathname;
	const flag = pathname === '/' ? init : true;

	const container = {
		positions: 'fixed left-0 right-0',
		top: !flag ? '-top-[92px]' : 'top-0',
		size: "w-full h-[92px]",
		display: 'flex justify-between items-center',
		bg: "bg-[#1A1A1A]",
		z: 'z-50',
		animations: 'transition-all duration-500 ease-in-out delay-[2s]',
	}

	return <div className="relative">
		<div className={cn(container)}>
			<div
				onClick={() => router('/')}
				className="pl-5 hidden xl:flex items-center gap-x-[4.91px] cursor-pointer">
				<img src="/images/logo.png" className="w-[47px] " />
				<div className="text-white text-[24px] font-bold">광운대 멋쟁이 사자처럼</div>
			</div>
			<div className="pr-5 flex items-center gap-x-[52px] leading-none h-full justify-between xl:justify-start w-full xl:w-auto">
				{links.map((link, index) => (
					<Link key={index} to={link.path}
						onMouseEnter={() => setHover(link.path)}
						onMouseLeave={() => setHover(undefined)}
						className="text-white text-[16px] xl:text-[24px] font-bold px-5 h-full flex flex-col gap-y-2 justify-center">
						<div>{link.name}</div>
						<div className={cn("border-1 border-white/80 w-full", hover === link.path ? "opacity-100" : "opacity-0")} />
					</Link>
				))}
				<button
					onClick={() => router('/recruit')}
					className="text-white text-[16px] xl:text-[24px] font-bold px-5 border border-white w-[129px] h-[44px] rounded-[10px]" >
					지원하기
				</button>
			</div>
			<AboutMenu
				hover={hover}
				setHover={setHover}
			/>
		</div>
	</div>
}

function AboutMenu({ hover, setHover }) {
	const container = {
		display: 'flex justify-center items-center gap-x-12',
		positions: 'absolute bottom-0 translate-y-[100%]',
		size: "w-full",
		height: hover === '/about' ? 'h-[92px]' : 'h-[0px]',
		backgrounds: 'bg-[#1A1A1A]',
		animations: 'transition-all duration-500 ease-in-out',
		styles: 'overflow-hidden',
		fonts: 'text-white text-[24px] font-bold '
	}

	return <div
		onMouseEnter={() => setHover('/about')}
		onMouseLeave={() => setHover(undefined)}
		className={cn(container)}>
		<Link to="/teams">팀 소개</Link>
		<Link to="/about/parts">파트 소개</Link>
		<Link to="/about/curriculums">커리큘럼</Link>
	</div>
}
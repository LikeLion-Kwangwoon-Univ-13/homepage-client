import { cn } from "../../../../utils"
import Footer from "../../../../components/(home)/_common/organism/Footer.organism"
import { useState } from "react"
import { Link } from "react-router-dom"

const contents = [
	{
		part: 'design',
		name: 'UXUI DESIGN',
		imgSrc: '/images/brand-uiux.png'
	},
	{
		part: 'frontend',
		name: 'FRONTEND',
		imgSrc: '/images/brand-front.png'
	},
	{
		part: 'backend',
		name: 'BACKEND',
		imgSrc: '/images/brand-back.png'
	},
	{
		part: 'likelion',
		name: 'LIKELION KW.UNIV',
		imgSrc: null,
	}
]
export default function AboutPartsPage() {
	const [hover, setHover] = useState()
	const container = {
		position: 'relative',
		size: 'w-full h-[calc(100vh-92px)]',
		padding: 'py-[40px] pb-[100px] px-0 xs:px-[4px] sm:px-[12px]  md:px-[24px] xl:px-[70px]',
	}
	const body = {
		display: 'flex',
		size: 'w-full h-full',
		styles: 'z-10 h-full overflow-hidden',
		border: 'border-[1px] border-white rounded-[60px]',
	}
	const box = (index) => ({
		position: 'relative',
		background: 'bg-transparent',
		hover: index !== 3 ? 'hover:bg-white hover:text-black' : '',
		font: 'text-white font-bold',
		size: 'w-1/4 h-full',
		duration: 'transition-all duration-400 ease-in-out',
		border: index !== 3 ? 'border-r-[1px] border-white' : '',
		poninter: index !== 3 ? 'cursor-pointer' : 'cursor-default',
		styles: 'overflow-hidden'
	})
	const image = (index) => ({
		position: 'absolute z-10',
		size: 'w-[254px] h-[311px]',
		right: hover === index ? 'right-0' : 'right-[-100%]',
		bottom: 'bottom-[10%]',
		duration: 'transition-all duration-400 ease-in-out',
	})
	return (
		<div className={cn(container)}>
			<div className={cn(body)}>
				{contents.map((content, index) => (
					<Link key={index} to={index !== 3 ? `/about/curriculums?part=${content.part}` : `/`}
						className={cn(box(index))}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(undefined)}>
						{index !== 3 && <div className={cn(image(index))}>
							<img src={content.imgSrc} alt={content.name} className="w-full h-full" />
						</div>}
						<div
							className="flex items-center justify-center w-full h-full rotate-270 text-[110px] leading-none whitespace-break-spaces">
							{content.name}
						</div>
					</Link>
				))}
			</div>
			<Footer />
		</div>
	)
}

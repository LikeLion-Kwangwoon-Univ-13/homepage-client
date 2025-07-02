import { cn } from "@/utils"
import style from "../../style"
import JoinButton from "../atom/Join"
import { useEffect, useState } from "react"
import Footer from "../../_common/organism/Footer.organism";

export default function SectionD() {
	const [twincle, setTwincle] = useState(false);
	useEffect(() => {
		const timer = setInterval(() => {
			setTwincle(!twincle);
		}, 300)
		return () => clearInterval(timer)
	}, [twincle])

	const container = {
		size: style.size,
		text: 'text-white',
		displays: 'flex flex-col relative',
		padding: 'px-[15%]',
		backgrounds: 'bg-[url(/images/noise.png)]'
	}

	const titleStyle = {
		displays: 'flex flex-col gap-y-4',
		text: 'text-[132px] font-bold leading-[1.1] tracking-wide',
		background: 'bg-gradient-to-b from-white to-white/80 bg-clip-text',
	}

	const subtitleStyle = {
		text: 'text-[48px] tracking-wide',
		margin: '-mt-2',
		fonts: 'font-bold',
		style: twincle ? 'text-white' : 'text-white/70',
	}



	return (
		<div className={cn(container)}>
			<div className="relative w-full h-[614px] flex flex-col gap-y-7 text-white pl-[90px] pt-[31px]">
				<img src="/images/shape2.png" className="absolute top-4 right-12" />
				<div className={cn(titleStyle)}>
					<div>Be the LION,</div>
					<div>Rule Your World!</div>
				</div>
				<div className={cn(subtitleStyle)}>: 멋사랑 어흥해</div>
				<img src="/images/shape1.png" className="absolute bottom-0 left-0" />
			</div>
			<div className="h-[5%] w-full" />
			<JoinButton />
			<Footer />
		</div>
	)
}
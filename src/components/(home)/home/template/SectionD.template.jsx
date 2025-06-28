import { cn } from "@/utils"
import style from "../../style"

export default function SectionD() {
	const container = {
		size: style.size,
		text: 'text-white',
		displays: 'flex flex-col justify-center relative',
		padding: 'px-[15%]',
		gap: 'gap-10'
	}

	const titleStyle = {
		text: 'text-[96px] font-bold leading-[1.1] tracking-wide',
		background: 'bg-gradient-to-b from-white to-white/80 bg-clip-text',
	}

	const subtitleStyle = {
		text: 'text-[28px] tracking-wide',
		margin: '-mt-2'
	}

	const buttonStyle = {
		positions: 'relative',
		border: 'border-[1px] border-white',
		padding: 'pl-[31px] pt-[18px]',
		text: 'text-[24px] leading-none text-white',
		width: 'w-[282px] h-[70px]',
	}

	const footerStyle = {
		positions: 'absolute bottom-0 left-0 right-0',
		displays: 'flex justify-between items-center',
		sizes: 'h-[80px]',
		backgrounds: 'bg-[#1A1A1A]',
		padding: 'px-[23px] ',
		text: 'text-white/40 text-[15px] tracking-wide'
	}

	const socialLinks = {
		displays: 'flex items-center gap-3.5',
		text: 'text-[16px]',
		hover: '[&_a]:hover:text-white/60 [&_a]:transition-colors'
	}

	return (
		<div className={cn(container)}>
			<div className="w-full flex flex-col text-white">
				<h1 className={cn(titleStyle)}>
					Be the LION,<br />
					Rule Your World!
				</h1>
			</div>
			<p className={cn(subtitleStyle)}>: 멋사랑 어흥해</p>
			<div className="w-full flex justify-center">
				<div className={cn(buttonStyle)} onClick={() => window.location.href = '/recruit'}>
					<div>지원하기</div>
					<img src="/images/arrow.png" className="absolute bottom-[15.81px]" />
				</div>
			</div>
			<div className={cn(footerStyle)}>
				<div className="text-white text-[20px]">광운대하교 멋쟁이사자처럼</div>
				<span className="text-white text-[20px]">© 2025 LIKELION KWUNIV</span>
				<div className={cn(socialLinks)}>
					<a href="#">Contact us!</a>
					<a href="#" className="text-[20px]">📧</a>
					<a href="#" className="text-[20px]">📷</a>
					<a href="#" className="text-[20px]">🐱</a>
				</div>
			</div>
		</div>
	)
}
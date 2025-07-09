import { cn } from "@/utils";

export default function NotFound() {
	const container = {
		size: 'w-full h-screen z-10',
		display: 'flex flex-col items-center justify-center gap-[30px]',
		background: 'bg-[url(/images/background.png)] bg-[#1A1A1A]',
	}

	const title = {
		position: 'relative z-10',
		font: 'font-bold',
		size: 'text-[48px] md:text-[64px]',
		color: 'text-white'
	}

	const description = {
		position: 'relative z-10',
		font: 'font-light',
		size: 'text-[18px] md:text-[24px]',
		color: 'text-white/80'
	}

	const button = {
		position: 'relative z-10',
		size: 'px-[24px] py-[12px]',
		background: 'bg-white/20 hover:bg-white/30 transition-colors',
		border: 'rounded-full',
		font: 'font-medium',
		color: 'text-white'
	}

	return (
		<div className="relative w-full h-full">
			<img
				src="/images/sun-back.png"
				className="absolute z-0 left-1/2 -translate-x-1/2 h-screen w-full object-contain"
			/>
			<div className={cn(container)}>
				<div className={cn(title)}>404</div>
				<div className={cn(description)}>
					페이지를 찾을 수 없습니다
				</div>
				<a href="/" className={cn(button)}>
					홈으로 돌아가기
				</a>
			</div>
		</div>
	)
}
import { cn } from "@/utils"
import style from "../../style"

export default function SectionC() {
	const container = {
		size: 'w-screen h-[200vh]',
		text: 'text-white',
		displays: 'flex flex-col items-center justify-center relative',
		gap: 'gap-28',
	}

	const valueStyle = {
		displays: 'flex flex-col items-center',
		gap: 'gap-8',
		text: 'text-center',
		size: 'flex-1'
	}

	const valueTitle = {
		text: 'text-[28px] font-bold tracking-wide'
	}

	const valueDesc = {
		text: 'text-[18px] text-white/70 leading-relaxed',
		size: 'max-w-[280px]'
	}

	const iconContainer = {
		size: 'w-[240px] h-[240px]',
		border: 'border-[3px] border-white/20',
		displays: 'flex items-center justify-center',
		margin: 'mb-8',
		transform: 'rotate-45',
		hover: 'hover:border-white/40 transition-colors duration-300'
	}


	return (
		<div className={cn(container)}>
			<img src="/images/cosmos-background.png" className="absolute inset-0 w-screen z-10" />
			<div className='flex flex-col gap-y-24 w-full justify-center items-center relative z-20'>
				<div className="text-[51px] font-light tracking-[0.2em] uppercase">Core Values</div>
				<div className="flex gap-x-32 items-start">
					<div className={cn(valueStyle)}>
						<img
							src="/images/core1.png"
						/>
						<h3 className={cn(valueTitle)}>Responsibility</h3>
						<p className={cn(valueDesc)}>덧푸를 성실하고 공개적 목표를 위해 결과를 만들어내는 자세</p>
					</div>
					<div className={cn(valueStyle)}>
						<img
							src="/images/core2.png"
						/>
						<h3 className={cn(valueTitle)}>Curiosity</h3>
						<p className={cn(valueDesc)}>자발적인 구구 새로운 도전을 시도하고 상황을 누려보지 않는 자세</p>
					</div>
					<div className={cn(valueStyle)}>
						<img
							src="/images/core3.png"
						/>
						<h3 className={cn(valueTitle)}>Cooperation</h3>
						<p className={cn(valueDesc)}>팀원들과 함께 목표를 달성하기 위해 유연하게 협력하는 자세</p>
					</div>
				</div>
			</div>
		</div>
	)
}


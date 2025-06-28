import { cn } from "@/utils"
import style from "../../style"

export default function SectionB() {
	const container = {
		size: style.size,
		text: 'text-white',
		displays: 'flex flex-col items-center justify-center',
		gap: 'gap-24',
		padding: 'px-20'
	}

	const titleStyle = {
		text: 'text-[96px] font-light tracking-[0.2em] uppercase',
		margin: '-mb-4'
	}

	const statsContainer = {
		displays: 'flex justify-between items-start',
		size: 'w-full max-w-[1440px]',
		padding: 'px-12'
	}

	const statStyle = {
		displays: 'flex flex-col items-center',
		gap: 'gap-4',
		text: 'text-center'
	}

	const statNumber = {
		text: 'text-[80px] font-bold text-white font-[Space_Grotesk] tabular-nums',
		margin: '-mb-2',
		shadow: 'drop-shadow-[0px_4px_30px_#E74F13]'
	}

	const statLabel = {
		text: 'text-[24px] font-bold text-white font-[Space_Grotesk] text-center',
		shadow: 'drop-shadow-[0px_4px_30px_#E74F13]'
	}

	const contents = [{
		startNumber: '13',
		description: '시작된지'
	}, {
		startNumber: '11,947',
		description: '멋사 대학 총신 학생 수'
	}, {
		startNumber: '1,634',
		description: '누적 참여 대학'
	}, {
		startNumber: '97',
		description: '누적 참여 대학'
	},]

	return (
		<div className={cn(container)}>
			<div className={cn(statsContainer)}>
				{contents.map((content, index) => (
					<div className={cn(statStyle)} key={index}>
						<span className={cn(statNumber)}>{content.startNumber}</span>
						<span className={cn(statLabel)}>{content.description}</span>
					</div>
				))}
			</div>
		</div>
	)
}
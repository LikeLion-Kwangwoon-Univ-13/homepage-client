import { cn } from "@/utils"
import useInitStore from "@/store/initStore"
import Sun from "../atom/Sun"

export default function SectionA() {
	const { init, setInit } = useInitStore()

	const container = {
		positions: 'relative',
		displays: 'flex flex-col justify-center items-center',
		size: 'w-full h-full',
		background: 'bg-[url(/images/noise.png)] bg-repeat',
		text: 'text-white',
		overflows: 'overflow-hidden'
	}

	return (
		<div className={cn(container)}>
			<Sun init={init} />
			{!init && <Init setInit={setInit} />}
			<FloatButton init={init} />
		</div>
	)
}

function Init({ setInit }) {
	const container = {
		postions: 'relative z-10',
		displays: 'flex flex-col justify-center items-center',
		text: 'text-[96px] font-light tracking-[0.2em] uppercase',
		style: 'cursor-pointer select-none',
		animation: 'animate-pulse',
		hover: 'hover:text-white/80 transition-colors'
	}

	return (
		<div className={cn(container)} onClick={() => setInit(true)}>
			Click
		</div>
	)
}

function FloatButton({ init }) {
	const container = {
		positions: 'fixed bottom-16 right-16 z-50',
		opacity: !init ? 'opacity-0' : 'opacity-100',
		transform: !init ? 'translate-y-10' : 'translate-y-0',
		animations: 'transition-all duration-1000 delay-[2s]'
	}

	const buttonStyle = {
		size: 'w-[140px] h-[140px]',
		background: 'bg-[#E97318]',
		style: 'rounded-full flex items-center justify-center relative',
		animation: 'animate-spin-slow',
		padding: 'p-4',
		hover: 'hover:bg-[#FF8534] transition-colors duration-300',
		shadow: 'shadow-xl shadow-black/20'
	}

	const textStyle = {
		text: 'text-[18px] fill-white font-bold tracking-wider'
	}

	return (
		<div className={cn(container)}>
			<svg className={cn(buttonStyle)} viewBox="0 0 100 100">
				<defs>
					<path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
				</defs>
				<text className={cn(textStyle)}>
					<textPath href="#circle" startOffset="0%" textLength="214" lengthAdjust="spacing">
						멋사에서같이어흥해
					</textPath>
				</text>
			</svg>
		</div>
	)
}
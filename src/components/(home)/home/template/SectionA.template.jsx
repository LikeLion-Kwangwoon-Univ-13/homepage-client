import { cn } from "@/utils"
import useInitStore from "@/store/initStore"
export default function SectionA() {
	const { init, setInit } = useInitStore()
	const container = {
		positons: 'relative',
		displays: 'flex flex-col justify-center items-center',
		size: 'w-full h-full',
		background: 'bg-[url(/images/noise.png)]',
		text: 'text-white',
		overflows: 'overflow-hidden',
	}
	return (
		<div className={cn(container)}>
			{!init && <Init setInit={setInit} />}
			<Sun init={init} />
			<FloatButton init={init} />
		</div>
	)
}
function Init({ setInit }) {
	const container = {
		displays: 'flex flex-col justify-center items-center',
		text: 'text-white text-[50px]',
		style: 'cursor-pointer'
	}
	return (
		<div className={cn(container)}
			onClick={() => setInit(true)}>
			CLICK
		</div>
	)
}
function Sun({ init }) {
	const container = {
		positions: 'absolute',
		location: !init ? '-bottom-[680px]' : 'bottom-0',
		animations: 'transition-all duration-[3s] ease-in-out',
	}
	return <img src="/images/sun.png" className={cn(container)} />
}

function FloatButton({ init }) {
	const container = {
		positions: 'fixed bottom-[52px] right-[52px]',
	}

	const buttonStyle = {
		size: 'w-[127px] h-[127px]',
		background: 'bg-[#E97318]',
		style: 'rounded-full flex items-center justify-center relative',
		animation: 'animate-spin-slow',
		padding: 'p-[14px]'
	}
	return (
		<div className={cn(container)}>
			<svg className={cn(buttonStyle)} viewBox="0 0 100 100">
				<defs>
					<path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
				</defs>
				<text className="text-[16px] fill-white font-bold">
					<textPath href="#circle" startOffset="0%" textLength="214" lengthAdjust="spacing">
						멋사에서같이어흥해
					</textPath>
				</text>
			</svg>
		</div>
	)
}
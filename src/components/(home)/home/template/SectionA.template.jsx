import { cn } from "@/utils"
import useInitStore from "@/store/initStore"
import Sun from "../atom/Sun"
import { useEffect, useState } from "react"
import JoinButton from '../atom/Join'

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
			<Values init={init} />
			<FloatButton init={init} />
		</div>
	)
}

function Init({ setInit }) {
	const container = {
		postions: 'relative z-50',
		displays: 'flex flex-col justify-center items-center',
		text: 'text-[50px] font-light tracking-[0.2em] uppercase',
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

function Values({ init }) {
	const container = {
		positions: 'z-20',
		opacity: init ? 'opacity-100' : 'opacity-0',
		animations: 'transition-all duration-1000 delay-[2s]',
		fontFamily: 'font-space',
	}
	const likeLion = {
		positions: 'absolute ',
		location: !init ? ' left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : ' top-1/2 -translate-y-1/2 left-[5%]',
		animations: 'transition-all duration-1000 delay-[2s]',
		texts: 'text-[64px] leading-none ',
	}
	const frontText = {
		positions: 'absolute top-[36%] -translate-y-1/2 ',
		text: 'text-[64px] leading-none',
		location: !init ? ' left-1/2 -translate-x-1/2' : ' left-[30%]',
		animations: 'transition-all duration-1000 delay-[2s]',
		textStyle: 'text-[64px] leading-none',
	}
	const backText = {
		positions: 'absolute top-[43%] -translate-y-1/2 ',
		text: 'text-[64px] leading-none',
		location: !init ? ' left-1/2 -translate-x-1/2' : ' left-[25%]',
		animations: 'transition-all duration-1000 delay-[2s]',
		textStyle: 'text-[64px] leading-none',
	}
	const uiuxText = {
		positions: 'absolute bottom-[36%] -translate-y-1/2 ',
		text: 'text-[64px] leading-none',
		location: !init ? ' left-1/2 -translate-x-1/2' : ' left-[30%]',
		animations: 'transition-all duration-1000 delay-[2s]',
		textStyle: 'text-[64px] leading-none',
	}
	const univ = {
		positions: 'absolute',
		displays: 'flex items-center gap-6',
		text: 'text-[64px] leading-none',
		location: !init ? ' left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' : ' top-1/2 -translate-y-1/2 right-[5%]',
		animations: 'transition-all duration-1000 delay-[2s]',
		textStyle: 'text-[64px] leading-none',
	}
	return <div className={cn(container)}>
		<div className={cn(likeLion)}>
			<div>LIKE</div>
			<div>LION</div>
		</div>
		<div className={cn(backText)}>BACKEND</div>
		<div className={cn(frontText)}>FRONTEND</div>
		<div className={cn(uiuxText)}>UXUI DESIGN</div>
		<div className={cn(univ)}>
			<div className="text-[60px] font-[100]">Exploding</div>
			<div className="text-[98px]">X</div>
			<div className="text-[63px] flex flex-col items-end">
				<div>KWANG</div>
				<div>WOON</div>
				<div>UNIV</div>
			</div>
		</div>
	</div>
}

function FloatButton({ init }) {
	const [deg, setDeg] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setDeg((prev) => prev + 90)
		}, 3000)
		return () => clearInterval(timer)
	}, [])
	const container = {
		positions: 'absolute bottom-16 right-16 z-20',
		display: 'flex gap-[17.5px] items-center',
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
		shadow: 'shadow-xl shadow-black/20',
		transform: 'transition-transform duration-1000',
	}

	const textStyle = {
		text: 'text-[18px] fill-white font-bold tracking-wider',
	}

	return (
		<div className={cn(container)}>
			<JoinButton />
			<div>
				<svg className={cn(buttonStyle)} viewBox="0 0 100 100" transform={`rotate(${deg})`}>
					<defs>
						<path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
					</defs>
					<text className={cn(textStyle)} >
						<textPath href="#circle" startOffset="0%" textLength="214" lengthAdjust="spacing" >
							멋사에서같이어흥해
						</textPath>
					</text>
				</svg>
			</div>
		</div>
	)
}
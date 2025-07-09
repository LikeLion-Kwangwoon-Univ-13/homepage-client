import { cn } from "@/utils"
import { useState, useEffect, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'
import useEnterAdmin from "../../../../hooks/useEnterAdmin";

export default function Sun({ init }) {
	const { isAdminInit } = useEnterAdmin();
	const [count, setCount] = useState(0)
	const [isReversing, setIsReversing] = useState(false)
	const [shouldSpin, setShouldSpin] = useState(false)
	const intervalRef = useRef()

	useEffect(() => {
		if (isAdminInit) {
			const timer = setTimeout(() => {
				setShouldSpin(true);
			}, 4000); // 5초 후에 spin 시작
			return () => clearTimeout(timer);
		}
	}, [isAdminInit]);

	useEffect(() => {
		intervalRef.current = setInterval(() => {
			setCount(prev => {
				if (isReversing) {
					if (prev <= 0) {
						setIsReversing(false)
						return 1
					}
					return prev - 1
				} else {
					if (prev >= 5) {
						setIsReversing(true)
						return 4
					}
					return prev + 1
				}
			})
		}, 2000)
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}
	}, [isReversing])

	const [springs, api] = useSpring(() => ({}))

	useEffect(() => {
		api.start({
			from: { shadow: `drop-shadow(0 0 ${((count - 1) / 5) * 96 + 4}px rgba(${((count - 1) / 5) * 100 + 155}, 155, 24, ${(count - 1) / 5 * 0.15 + 0.3}))` },
			to: { shadow: `drop-shadow(0 0 ${(count / 5) * 96 + 200}px rgba(${((count / 5) * 100 + 155)}, 155, 24, ${(count / 5) * 0.25 + 0.3}))` },
			config: { duration: 500 },
			// loop: true,
			reverse: true
		})
	}, [count, api])

	const container = {
		base: 'absolute left-1/2 -translate-x-1/2',
		location: !init ? 'bottom-0 translate-y-1/2' : 'absolute left-1/2 -translate-x-1/2',
		movement: 'transition-all ease-out',
		admin: shouldSpin ? 'animate-spin scale-[8] duration-[10s]' : 'duration-[2s]',
	}
	return (
		<animated.img
			src={`/images/sun.png`}
			className={cn(container)}
			style={{
				filter: springs.shadow,
			}}
			alt="Rising Sun"
		/>
	)
}

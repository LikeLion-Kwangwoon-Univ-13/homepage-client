import { cn } from "@/utils"
import { useEffect, useRef, useState } from 'react'

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
	const [isVisible, setIsVisible] = useState([false, false, false]);
	const valueRefs = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = valueRefs.current.findIndex(ref => ref === entry.target);
					if (index !== -1) {
						if (entry.isIntersecting) {
							// 나타날 때는 앞에서부터 순차적으로
							setTimeout(() => {
								setIsVisible(prev => {
									const newState = [...prev];
									newState[index] = true;
									return newState;
								});
							}, index * 200);
						} else {
							// 사라질 때는 뒤에서부터 순차적으로
							setTimeout(() => {
								setIsVisible(prev => {
									const newState = [...prev];
									newState[index] = false;
									return newState;
								});
							}, (2 - index) * 200); // 2는 마지막 인덱스
						}
					}
				});
			},
			{
				root: null,
				rootMargin: '-100px',
				threshold: 0.1
			}
		);

		valueRefs.current.forEach(ref => {
			if (ref) observer.observe(ref);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<div className={cn(container)}>
			<img src="/images/cosmos-background.png" className="absolute inset-0 w-screen z-10" />
			<div className='flex flex-col gap-y-24 w-full justify-center items-center relative z-20'>
				<div className="text-[51px] font-light tracking-[0.2em] uppercase">Core Values</div>
				<div className="values flex gap-x-32 items-start z-40">
					<div
						className={cn(
							valueStyle,
							'transform transition-all duration-700',
							isVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'
						)}
						ref={el => valueRefs.current[0] = el}
					>
						<img src="/images/core1.png" />
						<h3 className={cn(valueTitle)}>Responsibility</h3>
						<div className={cn(valueDesc)}>
							<div>목표를 설정하고 끝까지 책임게 있게</div>
							<div>결과를 만들어내는 자세</div>
						</div>
					</div>
					<div
						className={cn(
							valueStyle,
							'transform transition-all duration-700',
							isVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'
						)}
						ref={el => valueRefs.current[1] = el}
					>
						<img
							src="/images/core2.png"
						/>
						<h3 className={cn(valueTitle)}>Curiosity</h3>
						<div className={cn(valueDesc)}>
							<div>자신감을 갖고 새로운 도전을 시도하고</div>
							<div>실패를 두려워하지 않는 자세</div>
						</div>
					</div>
					<div
						className={cn(
							valueStyle,
							'transform transition-all duration-700',
							isVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'
						)}
						ref={el => valueRefs.current[2] = el}
					>
						<img src="/images/core3.png" />
						<h3 className={cn(valueTitle)}>Cooperation</h3>
						<div className={cn(valueDesc)}>
							<div>팀원들과 함께 목표를 달성하기 위해</div>
							<div>유연하게 협력하는 자세</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


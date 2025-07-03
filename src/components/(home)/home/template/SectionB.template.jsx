import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import style from "../../style";

export default function SectionB() {
	const container = {
		positions: 'relative',
		size: style.size,
		text: 'text-white',
		displays: 'flex flex-col items-center justify-center',
		gap: 'gap-24',
		styles: 'overflow-hidden',
	}

	const statsContainer = {
		displays: "flex justify-between items-start",
		size: "w-full max-w-[1440px]",
		padding: "px-12",
	};

	const statStyle = {
		displays: "flex flex-col items-center",
		gap: "gap-4",
		text: "text-center",
	};

	const statNumber = {
		text: "text-[80px] font-bold text-white font-[Space_Grotesk] tabular-nums",
		margin: "-mb-2",
		shadow: "drop-shadow-[0px_4px_30px_#E74F13]",
	};

	const statLabel = {
		text: "text-[24px] font-bold text-white font-[Space_Grotesk] text-center",
		shadow: "drop-shadow-[0px_4px_30px_#E74F13]",
	};

	const contents = [
		{
			startNumber: "13",
			description: "시작된지",
		},
		{
			startNumber: "11,947",
			description: "멋사 대학 출신 학생 수",
		},
		{
			startNumber: "1,634",
			description: "해커톤 최대 참여 인원",
		},
		{
			startNumber: "97",
			description: "누적 참여 대학",
		},
	];

	const [init, setInit] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInit(true);
					} else {
						setInit(false);
					}
				});
			},
			{
				root: null,
				rootMargin: "-100px",
				threshold: 0.5,
			}
		);

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const about = {
		positions: "absolute top-0",
		left: init
			? "left-[3%] duration-1200"
			: "left-0 translate-x-[-100%] duration-100",
		text: "text-[64px] sm:text-[100px] md:text-[220px] xl:text-[280px] 2xl:text-[280px]  leading-none",
		transition: "transition-all  ease-linear",
	};
	const likeLion = {
		positions: "absolute bottom-[120px]",
		left: init
			? "right-[3%] duration-1200"
			: "right-0 translate-x-[100%] duration-100",
		text: "text-[64px] sm:text-[100px] md:text-[220px] xl:text-[240px] 2xl:text-[280px] leading-none",
		transition: "transition-all  ease-linear",
	};
	const viewMore = {
		positions: "absolute right-1/2 translate-x-1/2",
		top: init
			? "bottom-0 -translate-y-1/2 duration-1200"
			: "-bottom-100 duration-100",
		size: "w-[264px] h-[70px]",
		boundaries: "rounded-full border-2",
		fonts: "text-[36px] leading-none",
		transition: "transition-all ",
	};

	return (
		<div className={cn(container)} ref={containerRef}>
			<div className={cn(statsContainer)}>
				<div className={cn(about)}>ABOUT</div>
				{contents.map((content, index) => (
					<div className={cn(statStyle)} key={index}>
						<span className={cn(statNumber)}>{content.startNumber}</span>
						<span className={cn(statLabel)}>{content.description}</span>
					</div>
				))}
				<div className={cn(likeLion)}>LIKELION</div>
				<button className={cn(viewMore)}>View More</button>
			</div>
		</div>
	);
}

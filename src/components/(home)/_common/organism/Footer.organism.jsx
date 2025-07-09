import { cn } from "../../../../utils"

export default function Footer() {
	const footerStyle = {
		positions: 'absolute bottom-0 left-0 right-0',
		displays: 'flex justify-between items-center',
		sizes: 'h-[80px]',
		backgrounds: 'bg-[#1A1A1A]',
		padding: 'px-[23px] ',
		text: 'text-white/40 text-[15px] tracking-wide'
	}
	const socialLinks = {
		displays: 'flex items-start gap-3.5',
		text: 'text-[16px]',
		hover: '[&_a]:hover:text-white/60 [&_a]:transition-colors'
	}
	return (
		<div className={cn(footerStyle)}>
			<div className="text-white text-[20px] font-bold">광운대 멋쟁이사자처럼</div>
			<span className="text-white text-[20px]">© 2025 LIKELION KWUNIV</span>
			<div className={cn(socialLinks)}>
				<div>Contact us!</div>
				<img src="/images/Email.png" onClick={() => window.open('kwu@likelion.org')} alt="mail" className="w-[26px] h-[26px]" />
				<img src="/images/insta.png" onClick={() => window.open('https://www.instagram.com/likelion_kwangwoon/')} alt="insta" className="w-[26px] h-[26px]" />
				<img src="/images/git.png" onClick={() => window.open('https://github.com/LikeLion-Kwangwoon-Univ-13')} alt="github" className="w-[26px] h-[26px]" />
			</div>
		</div>
	)
}
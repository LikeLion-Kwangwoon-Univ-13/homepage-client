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
		displays: 'flex items-center gap-3.5',
		text: 'text-[16px]',
		hover: '[&_a]:hover:text-white/60 [&_a]:transition-colors'
	}
	return (
		<div className={cn(footerStyle)}>
			<div className="text-white text-[20px]">광운대 멋쟁이사자처럼</div>
			<span className="text-white text-[20px]">© 2025 LIKELION KWUNIV</span>
			<div className={cn(socialLinks)}>
				<a href="#">Contact us!</a>
				<img src="/images/Email.png" alt="mail" className="w-6 h-6" />
				<img src="/images/insta.png" alt="insta" className="w-6 h-6" />
				<img src="/images/git.png" alt="github" className="w-6 h-6" />
			</div>
		</div>
	)
}
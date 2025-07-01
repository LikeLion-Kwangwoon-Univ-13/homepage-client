import { cn } from "@/utils"
import { useNavigate } from "react-router-dom"
export default function JoinButton() {
	const router = useNavigate();

	const buttonStyle = {
		positions: 'relative',
		border: 'border-[1px] border-white',
		padding: 'pl-[31px] pt-[18px]',
		text: 'text-[24px] leading-none text-white',
		width: 'w-[282px] h-[70px]',
		pointer: 'cursor-pointer',
	}
	return (
		<div className="w-full flex justify-center">
			<div className={cn(buttonStyle)} onClick={() => router('/recruit')}>
				<div>지원하기</div>
				<img src="/images/arrow.png" className="absolute bottom-[15.81px]" />
			</div>
		</div>
	)
}
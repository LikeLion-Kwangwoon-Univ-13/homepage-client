import { cn } from "@/utils"
import style from "../../style"
export default function SectionB() {
	const container = {
		size: style.size,
		text: 'text-white'
	}
	return (
		<div className={cn(container)}>SectionB</div>
	)
}
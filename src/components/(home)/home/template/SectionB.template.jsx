import { cn } from "@/utils"
import style from "../../style"
import Input from "../../_widget/Input"
import { useState } from "react"
export default function SectionB() {
	const container = {
		size: style.size,
		text: 'text-white'
	}
	const [text, setText] = useState()
	return (
		<div className={cn(container)}>
			<Input state={[text, setText]} placeholder="이름" onKeyDown={(e) => {
				if (e.key === 'Enter') return alert(text)
			}
			} />
		</div>
	)
}
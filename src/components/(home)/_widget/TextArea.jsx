import { cn } from "../../../utils";

export default function TextArea({ state, placeholder, option }) {
	const [value, setValue] = state;
	const container = {
		size: 'px-[14px] border border-white rounded-[10px]',
		width: option?.width ?? 'w-full',
		height: option?.height ?? 'h-[44px]',
		style: 'overflow-hidden'
	}
	const body = {
		style: 'border-transparent focus:border-transparent focus:ring-0 resize-none focus:outline-none'
	}

	return <div className={cn(container)}>
		<textarea
			className={cn(body)}
			onChange={(e) => setValue(e.target.value)}
			placeholder={placeholder}
			value={value}
		/>
	</div>

}
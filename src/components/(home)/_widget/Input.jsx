import { cn } from "../../../utils";

/**
 * 검색 아이콘이 포함된 입력 컴포넌트
 * 
 * @param {Object} props
 * @param {[string, Function]} props.state - useState의 [value, setValue] 튜플
 * @param {string} props.placeholder - 입력창의 플레이스홀더
 * @param {Function} props.onKeyDown - 입력창의 키다운 이벤트 핸들러
 * @param {Object} [props.option] - 커스텀 스타일 옵션
 * @param {string} [props.option.width='w-full'] - 컴포넌트 너비 (Tailwind class)
 * @param {string} [props.option.height='h-[75px]'] - 컴포넌트 높이 (Tailwind class)
 * 
 * @example
 * const [text, setText] = useState('');
 * 
 * // 기본 사용
 * <Input state={[text, setText]} placeholder="이름" />
 * 
 * // 커스텀 사이즈
 * <Input
 *   state={[text, setText]}
 *   placeholder="이름"
 *   option={{
 *     width: 'w-[300px]',
 *     height: 'h-[50px]'
 *   }}
 * />
 */
export default function Input({ state, placeholder, onKeyDown, option }) {
	const [value, setValue] = state;
	const container = {
		display: 'flex items-center',
		border: ' border-[1px] border-white rounded-[32px]',
		width: option?.width ?? 'w-full',
		height: option?.height ?? 'h-[75px]',
		style: 'overflow-hidden',
		padding: 'pl-[13.73px] pr-[52px]'

	}
	const body = {
		display: 'flex items-center',
		size: 'w-full h-full',
		style: 'focus:outline-none',
		font: 'text-[21px] text-[#D9D9D9] leading-tight',
		padding: 'pl-2'

	}
	return <div className={cn(container)}>
		<SearchIcon />
		<input
			className={cn(body)}
			onChange={(e) => setValue(e.target.value)}
			onKeyDown={onKeyDown}
			placeholder={placeholder}
			value={value}
		/>
		<XIcon onClick={() => setValue('')} />
	</div>

}

function SearchIcon() {
	return <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
		<circle cx="8.79099" cy="8.56101" r="7.31101" stroke="#D9D9D9" strokeWidth="1.5" />
		<path d="M14.4546 13.5664L19.939 19.0503" stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
}
function XIcon({ onClick }) {
	return <svg className='cursor-pointer' onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
		<path d="M6.48535 17.0156L17.5151 5.98586" stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		<path d="M17.5156 17.0156L6.48586 5.98586" stroke="#D9D9D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
	</svg>
}
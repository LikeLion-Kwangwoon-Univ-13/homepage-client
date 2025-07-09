import { cn } from "../../../utils"
import Footer from "../../../components/(home)/_common/organism/Footer.organism"

export default function Page() {
	const container = {
		position: 'relative',
		size: 'w-full h-[calc(100vh-92px)]',
		padding: 'py-[40px] pb-[100px]',
	}
	const box = {
		position: 'relative z-10',
		size: 'aspect-[300/550] h-full max-h-[550px]',
		background: 'bg-white/30',
		border: 'border-[1px] border-white rounded-[24px]',
		pt: 'pt-[70px] px-[14px] xl:px-[14px]',
		display: 'flex flex-col items-center gap-[7.5px]'
	}
	return (
		<div className={cn(container)}>
			<img src="/images/sun-back.png" className="absolute z-0 left-1/2 -translate-x-1/2 h-full top-0 object-cover" />
			<div className='flex flex-col items-center gap-y-[50px] text-white z-10 h-full pb-[100px] '>
				<div className="text-[32px] font-bold">광운대 멋쟁이사자처럼 활동을 소개합니다</div>
				<div className="flex gap-x-[50px] h-full">
					{contents.map((content, index) => (
						<div key={index} className={cn(box)}>
							<div className="max-w-[270px] w-full aspect-square flex items-center justify-center">
								<img src={content.imgSrc} alt={content.title} className="w-full h-full" />
							</div>
							<div className="flex flex-col items-center gap-[20px] xl:gap-[10px]">
								<div className="text-[36px] font-bold">{content.title}</div>
								<div className="text-[16px] xl:text-[21px] ">
									{content.descriptions.map((description, index) =>
										(<div key={index} className="text-center leading-tight font-light">{description}</div>)
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	)
}

const contents = [
	{
		title: 'OT',
		descriptions: ['멋쟁이 사자처럼으로', '향하는 첫 걸음!'],
		imgSrc: '/images/brand-ot.png'
	},
	{
		title: '아이디어톤',
		descriptions: ['5월, 특정 주제에 맞춰,', '톡톡 튀는 아이디어로', '승부합니다!'],
		imgSrc: '/images/brand-idea.png'
	},
	{
		title: '해커톤',
		descriptions: ['8월, 멋쟁이사자처럼이', '자부하는 역대급 규모의', '무박 2일 해커톤 행사'],
		imgSrc: '/images/brand-hack.png'
	},
	{
		title: '프로젝트',
		descriptions: ['기획부터 구현까지', '협업 과정을 배우는', '중요 활동'],
		imgSrc: '/images/brand-project.png'
	}
]
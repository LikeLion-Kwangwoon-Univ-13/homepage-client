import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useGeneration from '../../../hooks/useGeneration'

export default function GenerationPage() {
	const navigate = useNavigate()
	const { createGeneration } = useGeneration()
	const [generation, setGeneration] = useState('')
	const handleCreate = async (e) => {
		e.preventDefault()
		try {
			const result = await createGeneration.mutateAsync({
				generation: parseInt(generation)
			})
			alert('기수가 생성되었습니다.')
			navigate(`/admin/generations/${result.id}`)
		} catch (error) {
			if (error.status === 400) {
				navigate(`/admin/generations/${generation}`)
			}
		}
	}

	return (
		<div>
			<h1 className="text-2xl font-bold text-white mb-6">맴버 관리</h1>
			<div className="w-full flex justify-center h-[calc(60vh)] items-center">
				<div className="bg-[#2A2A2A] p-4 rounded-lg w-[500px] h-[200px] relative">
					<h2 className="text-xl font-semibold text-white mb-4">시작하기</h2>
					<input
						value={generation}
						onChange={(e) => setGeneration(e.target.value)}
						placeholder="기수 입력 (ex: 14)"
						className="flex-1 bg-[#1A1A1A] text-white p-2 rounded w-full h-16 focus:outline-none text-2xl text-center "
						onKeyDown={(e) => {
							if (e.key === 'Enter' && generation) {
								handleCreate()
							}
						}}
					/>
					<button
						className="absolute right-4 bottom-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
						onClick={handleCreate}
					>
						멤버 조회
					</button>
				</div>
			</div>
		</div>
	)
}
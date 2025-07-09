import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProject from '../../../../hooks/useProject'

export default function ProjectEditPage() {
	const navigate = useNavigate()
	const { projectId } = useParams()
	const { updateProject } = useProject()

	const [formData, setFormData] = useState({
		title: '',
		line_introduction: '',
		url: '',
		introduction: '',
		projectMember: [],
		stacks: [],
		part: 'WEB',
		generation: 13,
		startDate: '',
		endDate: '',
	})

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const response = await fetch(`/api/projects/${projectId}`)
				const data = await response.json()
				setFormData({
					...data,
					projectMember: Array.isArray(data.projectMember)
						? data.projectMember
						: Object.keys(data.projectMember || {}),
					startDate: data.start_date,
					endDate: data.end_date,
				})
			} catch (error) {
				alert('프로젝트 정보를 불러오는 중 오류가 발생했습니다.')
				navigate('/admin/projects')
			}
		}

		fetchProject()
	}, [projectId, navigate])

	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === 'projectMember' || name === 'stacks') {
			setFormData(prev => ({
				...prev,
				[name]: value.split(',')
			}))
		} else {
			setFormData(prev => ({
				...prev,
				[name]: value
			}))
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await updateProject.mutateAsync({
				id: projectId,
				data: {
					...formData,
					start_date: formData.startDate,
					end_date: formData.endDate
				}
			})
			navigate('/admin/projects')
		} catch (error) {
			alert('프로젝트 수정 중 오류가 발생했습니다.')
		}
	}

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold text-white mb-6">프로젝트 수정</h1>

			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label className="block text-white mb-2">프로젝트 제목</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block text-white mb-2">한 줄 소개</label>
					<input
						type="text"
						name="line_introduction"
						value={formData.line_introduction}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block text-white mb-2">이미지 URL</label>
					<input
						type="url"
						name="url"
						value={formData.url}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block text-white mb-2">상세 설명</label>
					<textarea
						name="introduction"
						value={formData.introduction}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded h-32"
						required
					/>
				</div>

				<div>
					<label className="block text-white mb-2">참여 멤버 (콤마로 구분)</label>
					<input
						type="text"
						name="projectMember"
						value={formData.projectMember.join(',')}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block text-white mb-2">기술 스택 (콤마로 구분)</label>
					<input
						type="text"
						name="stacks"
						value={formData.stacks.join(',')}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					/>
				</div>

				<div>
					<label className="block text-white mb-2">분야</label>
					<select
						name="part"
						value={formData.part}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					>
						<option value="WEB">WEB</option>
						<option value="APP">APP</option>
						<option value="GAME">GAME</option>
					</select>
				</div>

				<div>
					<label className="block text-white mb-2">기수</label>
					<input
						type="number"
						name="generation"
						value={formData.generation}
						onChange={handleChange}
						className="w-full bg-[#2A2A2A] text-white p-2 rounded"
						required
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="block text-white mb-2">시작일</label>
						<input
							type="date"
							name="startDate"
							value={formData.startDate}
							onChange={handleChange}
							className="w-full bg-[#2A2A2A] text-white p-2 rounded"
							required
						/>
					</div>
					<div>
						<label className="block text-white mb-2">종료일</label>
						<input
							type="date"
							name="endDate"
							value={formData.endDate}
							onChange={handleChange}
							className="w-full bg-[#2A2A2A] text-white p-2 rounded"
							required
						/>
					</div>
				</div>

				<div className="flex justify-end gap-4">
					<button
						type="button"
						onClick={() => navigate('/admin/projects')}
						className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
					>
						취소
					</button>
					<button
						type="submit"
						className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
					>
						수정
					</button>
				</div>
			</form>
		</div>
	)
}
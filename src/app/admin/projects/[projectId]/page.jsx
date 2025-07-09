import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProject, { useProjectById } from '../../../../hooks/useProject'

export default function ProjectEditPage() {
	const navigate = useNavigate()
	const { projectId } = useParams()
	const { updateProject } = useProject()
	const { project, isLoading, error } = useProjectById(projectId)

	const [isEditMode, setIsEditMode] = useState(false)
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
		if (project) {
			setFormData({
				...project,
				projectMember: Array.isArray(project.project_member)
					? project.project_member
					: Object.keys(project.project_member || {}),
				startDate: project.start_date,
				endDate: project.end_date,
			})
		}
	}, [project])

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
			alert('프로젝트가 수정되었습니다.')
			setIsEditMode(false)
		} catch (error) {
			alert('프로젝트 수정 중 오류가 발생했습니다.')
		}
	}

	const handleCancel = () => {
		if (project) {
			setFormData({
				...project,
				projectMember: Array.isArray(project.project_member)
					? project.project_member
					: Object.keys(project.project_member || {}),
				startDate: project.start_date,
				endDate: project.end_date,
			})
		}
		setIsEditMode(false)
	}

	if (isLoading) {
		return (
			<div className="p-6">
				<div className="text-white text-center">로딩 중...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="p-6">
				<div className="text-red-500 text-center">
					프로젝트를 불러오는 중 오류가 발생했습니다.
					<button 
						onClick={() => navigate('/admin/projects')}
						className="block mx-auto mt-4 bg-gray-500 text-white px-4 py-2 rounded"
					>
						목록으로 돌아가기
					</button>
				</div>
			</div>
		)
	}

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-white">
					{isEditMode ? '프로젝트 수정' : '프로젝트 상세'}
				</h1>
				<div className="flex gap-2">
					<button
						onClick={() => navigate('/admin/projects')}
						className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
					>
						목록으로
					</button>
					{!isEditMode && (
						<button
							onClick={() => setIsEditMode(true)}
							className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
						>
							수정하기
						</button>
					)}
				</div>
			</div>

			{isEditMode ? (
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
						onClick={handleCancel}
						className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
					>
						취소
					</button>
					<button
						type="submit"
						className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
					>
						저장
					</button>
				</div>
			</form>
			) : (
				<div className="bg-[#2A2A2A] p-6 rounded-lg">
					{/* 프로젝트 제목과 기본 정보 */}
					<div className="flex justify-between items-center">
					<div className="mb-6">
						<h2 className="text-3xl font-bold text-white mb-2">{project?.title}</h2>
						<p className="text-gray-400 text-lg">{project?.line_introduction}</p>
						
					</div>
					<button className="mb-6" onClick={() => window.open(project.url, '_blank')} style={{backgroundColor: '#E74F13', color: 'white', padding: '10px 20px', borderRadius: '5px'}}>
						프로젝트 바로가기
					</button>
					</div>
					{/* 상세 정보 카드들 */}
					<div className="grid gap-6">
						{/* 상세 설명 */}
						<div className="bg-[#1A1A1A] p-4 rounded-lg">
							<h3 className="text-lg font-semibold text-white mb-3">상세 설명</h3>
							<p className="text-gray-300 whitespace-pre-wrap">{project?.introduction}</p>
						</div>

						{/* 팀원 정보 */}
						<div className="bg-[#1A1A1A] p-4 rounded-lg">
							<h3 className="text-lg font-semibold text-white mb-3">참여 멤버</h3>
							<div className="flex flex-wrap gap-2">
								{(Array.isArray(project?.project_member) 
									? project.project_member 
									: Object.keys(project?.project_member || {})
								).map((member, index) => (
									<span 
										key={index}
										className="bg-[#E74F13] text-white px-3 py-1 rounded-full text-sm"
									>
										{member}
									</span>
								))}
							</div>
						</div>

						{/* 기술 스택 */}
						<div className="bg-[#1A1A1A] p-4 rounded-lg">
							<h3 className="text-lg font-semibold text-white mb-3">기술 스택</h3>
							<div className="flex flex-wrap gap-2">
								{project?.stacks?.map((stack, index) => (
									<span 
										key={index}
										className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
									>
										{stack}
									</span>
								))}
							</div>
						</div>

						{/* 프로젝트 정보 */}
						<div className="bg-[#1A1A1A] p-4 rounded-lg">
							<h3 className="text-lg font-semibold text-white mb-3">프로젝트 정보</h3>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
								<div>
									<span className="text-gray-400 text-sm">분야</span>
									<p className="text-white font-medium">{project?.part}</p>
								</div>
								<div>
									<span className="text-gray-400 text-sm">기수</span>
									<p className="text-white font-medium">{project?.generation}기</p>
								</div>
								<div>
									<span className="text-gray-400 text-sm">프로젝트 기간</span>
									<p className="text-white font-medium">
										{project?.start_Date} ~ {project?.end_Date}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
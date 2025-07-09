import { Link } from 'react-router-dom'
import { useProjectHistory } from '../../../hooks/useProject'

export default function ProjectListPage() {
	const { projects } = useProjectHistory()

	return (
		<div >
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-white">프로젝트 관리</h1>
				<Link
					to="/admin/projects/post"
					className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
				>
					프로젝트 등록
				</Link>
			</div>

			<div className="grid gap-4">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-[#2A2A2A] p-4 rounded-lg flex justify-between items-center"
					>
						<div className="flex-1">
							<div className="flex items-center gap-4 mb-2">
								<h2 className="text-xl font-semibold text-white">{project.title}</h2>
								<span className="text-gray-400 text-sm px-2 py-1 bg-[#1A1A1A] rounded">
									{project.part}
								</span>
								<span className="text-gray-400 text-sm">❤️ {project.heart}</span>
							</div>
							<p className="text-gray-400">{project.line_introduction}</p>
							{project.url && (
								<a
									href={project.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
								>
									프로젝트 바로가기
								</a>
							)}
						</div>
						<div className="flex gap-2">
							<Link
								to={`/admin/projects/${project.id}`}
								className="bg-[#EA580C] text-white px-3 py-1 rounded hover:bg-[#E74F13] transition-colors"
							>
								상세 보기
							</Link>
						</div>
					</div>
				))}

				{projects.length === 0 && (
					<p className="text-gray-400 text-center py-8">등록된 프로젝트가 없습니다.</p>
				)}
			</div>
		</div>
	)
}
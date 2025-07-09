'use client'

import { useState } from 'react'
import useRecruit from '../../../hooks/useRecruit'

export default function RecruitAdminPage() {
	const { recruit, createRecruit, updateRecruit } = useRecruit()
	const [isEditing, setIsEditing] = useState(false)
	const [formData, setFormData] = useState({
		url: '',
		documentDate: '',
		candidateDate: '',
		interviewDate: '',
		acceptDate: '',
		otDate: ''
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			if (recruit) {
				await updateRecruit.mutateAsync({ id: recruit.id, data: formData })
			} else {
				await createRecruit.mutateAsync(formData)
			}
			setIsEditing(false)
		} catch (error) {
			alert(`모집 공고 저장에 실패했습니다: ${error.message}`)
		}
	}

	const handleEdit = () => {
		setFormData({
			url: recruit?.url || '',
			documentDate: recruit?.documentDate || '',
			candidateDate: recruit?.candidateDate || '',
			interviewDate: recruit?.interviewDate || '',
			acceptDate: recruit?.acceptDate || '',
			otDate: recruit?.otDate || ''
		})
		setIsEditing(true)
	}

	const handleCancel = () => {
		setIsEditing(false)
		setFormData({
			url: '',
			documentDate: '',
			candidateDate: '',
			interviewDate: '',
			acceptDate: '',
			otDate: ''
		})
	}

	return (
		<div>
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold text-white">모집 공고 관리</h1>
				{!isEditing && (
					<button
						onClick={handleEdit}
						className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
					>
						{recruit ? '수정하기' : '새로 등록'}
					</button>
				)}
			</div>

			{!isEditing && recruit && (
				<div className="bg-[#2A2A2A] p-6 rounded-lg">
					<h2 className="text-xl font-semibold text-white mb-4">현재 모집 공고</h2>
					<div className="grid gap-4">
						<div>
							<label className="text-gray-400">모집 공고 URL</label>
							<a
								href={recruit.url}
								target="_blank"
								rel="noopener noreferrer"
								className="block text-blue-400 hover:text-blue-300"
							>
								{recruit.url}
							</a>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							<div>
								<label className="text-gray-400">서류 제출 마감일</label>
								<p className="text-white">{recruit.documentDate}</p>
							</div>
							<div>
								<label className="text-gray-400">합격자 발표일</label>
								<p className="text-white">{recruit.candidateDate}</p>
							</div>
							<div>
								<label className="text-gray-400">면접일</label>
								<p className="text-white">{recruit.interviewDate}</p>
							</div>
							<div>
								<label className="text-gray-400">최종 합격자 발표일</label>
								<p className="text-white">{recruit.acceptDate}</p>
							</div>
							<div>
								<label className="text-gray-400">OT 일자</label>
								<p className="text-white">{recruit.otDate}</p>
							</div>
						</div>
					</div>
				</div>
			)}

			{isEditing && (
				<form onSubmit={handleSubmit} className="bg-[#2A2A2A] p-6 rounded-lg">
					<h2 className="text-xl font-semibold text-white mb-4">
						{recruit ? '모집 공고 수정' : '새 모집 공고 등록'}
					</h2>
					<div className="grid gap-4">
						<div>
							<label className="block text-gray-400 mb-1">모집 공고 URL</label>
							<input
								type="url"
								value={formData.url}
								onChange={(e) => setFormData({ ...formData, url: e.target.value })}
								className="w-full bg-[#1A1A1A] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E74F13]"
								required
							/>
						</div>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
							<div>
								<label className="block text-gray-400 mb-1">서류 제출 마감일</label>
								<input
									type="date"
									value={formData.documentDate}
									onChange={(e) => setFormData({ ...formData, documentDate: e.target.value })}
									className="w-full bg-[#1A1A1A] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E74F13]"
									required
								/>
							</div>
							<div>
								<label className="block text-gray-400 mb-1">합격자 발표일</label>
								<input
									type="date"
									value={formData.candidateDate}
									onChange={(e) => setFormData({ ...formData, candidateDate: e.target.value })}
									className="w-full bg-[#1A1A1A] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E74F13]"
									required
								/>
							</div>
							<div>
								<label className="block text-gray-400 mb-1">면접일</label>
								<input
									type="date"
									value={formData.interviewDate}
									onChange={(e) => setFormData({ ...formData, interviewDate: e.target.value })}
									className="w-full bg-[#1A1A1A] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E74F13]"
									required
								/>
							</div>
							<div>
								<label className="block text-gray-400 mb-1">최종 합격자 발표일</label>
								<input
									type="date"
									value={formData.acceptDate}
									onChange={(e) => setFormData({ ...formData, acceptDate: e.target.value })}
									className="w-full bg-[#1A1A1A] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E74F13]"
									required
								/>
							</div>
							<div>
								<label className="block text-gray-400 mb-1">OT 일자</label>
								<input
									type="date"
									value={formData.otDate}
									onChange={(e) => setFormData({ ...formData, otDate: e.target.value })}
									className="w-full bg-[#1A1A1A] text-white px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#E74F13]"
									required
								/>
							</div>
						</div>
					</div>
					<div className="flex gap-2 mt-6">
						<button
							type="submit"
							className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
						>
							저장
						</button>
						<button
							type="button"
							onClick={handleCancel}
							className="bg-[#6B7280] text-white px-4 py-2 rounded hover:bg-[#4B5563] transition-colors"
						>
							취소
						</button>
					</div>
				</form>
			)}

			{!isEditing && !recruit && (
				<div className="bg-[#2A2A2A] p-6 rounded-lg text-center">
					<p className="text-gray-400">등록된 모집 공고가 없습니다.</p>
					<p className="text-gray-400">새로운 모집 공고를 등록해주세요.</p>
				</div>
			)}
		</div>
	)
}
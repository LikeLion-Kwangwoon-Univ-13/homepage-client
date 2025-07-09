import { useState } from 'react'
import { useParams } from 'react-router-dom'
import useMember from '../../../../hooks/useMember'
import AddMemberModal from '../../../../components/admin/organism/AddMemberModal'
import MemberList from '../../../../components/admin/organism/MemberList'

export default function GenerationMemberPage() {
	const { generationId } = useParams()
	const { members, createMember, updateMember, deleteMember } = useMember(generationId)
	const [isAddModalOpen, setIsAddModalOpen] = useState(false)

	const handleCreate = async (formData) => {
		try {
			await createMember.mutate({
				...formData,
				generation: parseInt(generationId)
			})
			alert('멤버가 추가되었습니다.')
			setIsAddModalOpen(false)
		} catch (error) {
			alert('멤버 추가 중 오류가 발생했습니다.')
		}
	}

	const handleUpdate = async (id, formData) => {
		try {
			await updateMember.mutate({
				id,
				...formData,
				generation: parseInt(generationId)
			})
			alert('멤버 정보가 수정되었습니다.')
		} catch (error) {
			alert('멤버 수정 중 오류가 발생했습니다.')
		}
	}

	const handleDelete = async (id) => {
		if (!window.confirm('정말 삭제하시겠습니까?')) return

		try {
			await deleteMember.mutate(id)
			alert('멤버가 삭제되었습니다.')
		} catch (error) {
			alert('멤버 삭제 중 오류가 발생했습니다.')
		}
	}

	return (
		<div className="p-6">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold text-white">{generationId}기 멤버 관리</h1>
				<button
					onClick={() => setIsAddModalOpen(true)}
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
				>
					멤버 추가
				</button>
			</div>

			<MemberList
				members={members}
				onUpdate={handleUpdate}
				onDelete={handleDelete}
			/>

			<AddMemberModal
				isOpen={isAddModalOpen}
				onClose={() => setIsAddModalOpen(false)}
				onSubmit={handleCreate}
			/>
		</div>
	)
} 
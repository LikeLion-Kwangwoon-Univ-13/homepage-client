import { useState } from 'react'
import EditMemberModal from './EditMemberModal'

export default function MemberList({ members, onUpdate, onDelete }) {
  const [selectedMember, setSelectedMember] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const handleEdit = (member) => {
    setSelectedMember(member)
    setIsEditModalOpen(true)
  }

  return (
    <div className="bg-[#2A2A2A] p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-white mb-4">멤버 목록</h2>
      <div className="grid gap-4">
        {members.length > 0 ? members.map((member) => (
          <div key={member.id} className="bg-[#1A1A1A] p-4 rounded">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                {member.profile && (
                  <img
                    src={member.profile}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <h3 className="text-lg font-medium text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.position} | {member.part}</p>
                  {(member.github || member.instagram) && (
                    <div className="flex gap-4 mt-2">
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          GitHub
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300"
                        >
                          Instagram
                        </a>
                      )}
                    </div>
                  )}
                  {member.stacks?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {member.stacks.map((stack, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 text-white text-sm px-2 py-1 rounded"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(member)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                >
                  수정
                </button>
                <button
                  onClick={() => onDelete(member.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        )) : (
          <p className="text-gray-400">멤버가 없습니다.</p>
        )}
      </div>

      <EditMemberModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false)
          setSelectedMember(null)
        }}
        onSubmit={(formData) => {
          onUpdate(selectedMember.id, formData)
          setIsEditModalOpen(false)
          setSelectedMember(null)
        }}
        member={selectedMember}
      />
    </div>
  )
}

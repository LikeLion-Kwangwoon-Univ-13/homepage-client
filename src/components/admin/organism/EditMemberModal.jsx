import { useState, useEffect } from 'react'

const AVAILABLE_STACKS = [
  'React',
  'Next.js',
  'Vue.js',
  'Angular',
  'Spring Boot',
  'Node.js',
  'Django',
  'Flask',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'AWS',
  'Docker',
  'Kubernetes',
  'Figma',
  'Adobe XD',
  'Adobe Photoshop',
  'Adobe Illustrator'
]

export default function EditMemberModal({ isOpen, onClose, onSubmit, member }) {
  const [formData, setFormData] = useState({
    profile: '',
    name: '',
    position: '',
    part: '',
    github: '',
    instagram: '',
    stacks: []
  })

  useEffect(() => {
    if (member) {
      setFormData({
        profile: member.profile || '',
        name: member.name || '',
        position: member.position || '',
        part: member.part || '',
        github: member.github || '',
        instagram: member.instagram || '',
        stacks: member.stacks || []
      })
    }
  }, [member])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2A2A2A] p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">멤버 수정</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            value={formData.profile}
            onChange={(e) => setFormData(prev => ({ ...prev, profile: e.target.value }))}
            placeholder="프로필 이미지 URL"
            className="bg-[#1A1A1A] text-white p-2 rounded"
            required
          />
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            placeholder="이름"
            className="bg-[#1A1A1A] text-white p-2 rounded"
            required
          />
          <input
            type="text"
            value={formData.position}
            onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
            placeholder="직책 (운영진/부원)"
            className="bg-[#1A1A1A] text-white p-2 rounded"
            required
          />
          <input
            type="text"
            value={formData.part}
            onChange={(e) => setFormData(prev => ({ ...prev, part: e.target.value }))}
            placeholder="파트 (프론트엔드/백엔드)"
            className="bg-[#1A1A1A] text-white p-2 rounded"
            required
          />
          <input
            type="text"
            value={formData.github}
            onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
            placeholder="GitHub URL"
            className="bg-[#1A1A1A] text-white p-2 rounded"
          />
          <input
            type="text"
            value={formData.instagram}
            onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
            placeholder="Instagram URL"
            className="bg-[#1A1A1A] text-white p-2 rounded"
          />
          <div className="space-y-2">
            <label className="text-white text-sm">기술 스택</label>
            <div className="flex flex-wrap gap-2">
              {formData.stacks.map((stack, index) => (
                <div key={index} className="flex items-center bg-[#E74F13] text-white px-2 py-1 rounded">
                  <span>{stack}</span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      stacks: prev.stacks.filter((_, i) => i !== index)
                    }))}
                    className="ml-2 text-white hover:text-red-200"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <select
              value=""
              onChange={(e) => {
                const value = e.target.value
                if (value && !formData.stacks.includes(value)) {
                  setFormData(prev => ({
                    ...prev,
                    stacks: [...prev.stacks, value]
                  }))
                }
              }}
              className="w-full bg-[#1A1A1A] text-white p-2 rounded"
            >
              <option value="">기술 스택 추가</option>
              {AVAILABLE_STACKS.filter(stack => !formData.stacks.includes(stack)).map(stack => (
                <option key={stack} value={stack}>{stack}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-[#6B7280] text-white px-4 py-2 rounded hover:bg-[#4B5563] transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
            >
              수정
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

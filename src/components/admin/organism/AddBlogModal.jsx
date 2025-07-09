import { useState, useEffect } from "react"

export default function AddBlogModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    url: '',
    thumbnail: '',
    tags: []
  })
  const [tagInput, setTagInput] = useState('')

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        title: '',
        content: '',
        url: '',
        thumbnail: '',
        tags: []
      })
      setTagInput('')
    }
  }, [isOpen])

  const handleSubmit = () => {
    if (!formData.title || !formData.content || !formData.url) {
      alert('제목, 내용, URL은 필수입니다.')
      return
    }
    onSubmit(formData)
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const removeTag = (index) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2A2A2A] rounded-lg p-6 w-full max-w-2xl space-y-4">
        <h2 className="text-xl font-semibold text-white">블로그 등록</h2>
        
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          placeholder="제목"
          className="w-full bg-[#1A1A1A] text-white p-2 rounded focus:outline-none"
        />
        
        <textarea
          value={formData.content}
          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
          placeholder="내용"
          className="w-full bg-[#1A1A1A] text-white p-2 rounded h-32 focus:outline-none"
        />
        
        <input
          type="url"
          value={formData.url}
          onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
          placeholder="URL"
          className="w-full bg-[#1A1A1A] text-white p-2 rounded focus:outline-none"
        />
        
        <input
          type="url"
          value={formData.thumbnail}
          onChange={(e) => setFormData(prev => ({ ...prev, thumbnail: e.target.value }))}
          placeholder="썸네일 URL"
          className="w-full bg-[#1A1A1A] text-white p-2 rounded focus:outline-none"
        />
        
        <div>
          <div className="flex gap-2">
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              placeholder="태그 입력"
              className="flex-1 bg-[#1A1A1A] text-white p-2 rounded focus:outline-none"
            />
            <button
              onClick={addTag}
              className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
            >
              추가
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#1A1A1A] text-gray-300 px-2 py-1 rounded text-sm flex items-center gap-2"
              >
                {tag}
                <button
                  onClick={() => removeTag(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="bg-[#6B7280] text-white px-4 py-2 rounded hover:bg-[#4B5563] transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
          >
            등록
          </button>
        </div>
      </div>
    </div>
  )
}

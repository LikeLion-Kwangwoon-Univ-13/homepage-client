"use client"

import { useState } from 'react'
import useBlog from "../../../hooks/useBlog"
import AddBlogModal from "../../../components/admin/organism/AddBlogModal"

export default function BlogPage() {
  const { bestPosts, posts, setBestPost, cancelBestPost, deletePost, createPost } = useBlog()
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)


  const handleCreatePost = async (formData) => {
    try {
      await createPost.mutateAsync(formData)
      alert('블로그가 등록되었습니다.')
      setIsAddModalOpen(false)
    } catch (error) {
      alert('블로그 등록에 실패했습니다.')
    }
  }

  const handleDelete = async (id) => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      try {
        await deletePost.mutateAsync(id)
        alert('블로그가 삭제되었습니다.')
      } catch (error) {
        alert('블로그 삭제에 실패했습니다.')
      }
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">블로그 관리</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-[#E74F13] text-white px-4 py-2 rounded hover:bg-[#D63F0F] transition-colors"
        >
          블로그 등록
        </button>
      </div>

      <div className="space-y-8">
        {/* 베스트 게시글 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="bg-yellow-500 w-2 h-2 rounded-full"></span>
            베스트 게시글
          </h2>
          <div className="grid gap-4">
            {bestPosts?.map((post) => (
              <div
                key={post.id}
                className="bg-[#2A2A2A] p-4 rounded-lg flex justify-between items-center border border-yellow-500/30"
              >
                <div>
                  <div className="flex gap-4">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-24 h-24 object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400">{post.contents}</p>
                      <div className="flex gap-2 mt-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-[#1A1A1A] text-gray-300 px-2 py-1 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      글 바로가기
                    </a>

                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => cancelBestPost.mutate(post.id)}
                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-[#DC2626] transition-colors"
                    disabled={cancelBestPost.isLoading}
                  >
                    {cancelBestPost.isLoading ? '처리중...' : '베스트 해제'}
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-[#DC2626] text-white px-3 py-1 rounded hover:bg-[#B91C1C] transition-colors"
                    disabled={deletePost.isLoading}
                  >
                    {deletePost.isLoading ? '삭제중...' : '삭제'}
                  </button>
                </div>
              </div>
            ))}
            {bestPosts?.length === 0 && (
              <p className="text-gray-500 text-center py-4 bg-[#2A2A2A] rounded-lg">베스트 게시글이 없습니다.</p>
            )}
          </div>
        </div>

        {/* 일반 게시글 */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="bg-blue-500 w-2 h-2 rounded-full"></span>
            일반 게시글
          </h2>
          <div className="grid gap-4">
            {posts?.map((post) => (
              <div
                key={post.id}
                className="bg-[#2A2A2A] p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <div className="flex gap-4">
                    {post.thumbnail && (
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-24 h-24 object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400">{post.contents}</p>
                      <div className="flex gap-2 mt-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-[#1A1A1A] text-gray-300 px-2 py-1 rounded text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm"
                    >
                      글 바로가기
                    </a>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setBestPost.mutate(post.id)}
                    className="bg-[#E74F13] text-white px-3 py-1 rounded hover:bg-[#D63F0F] transition-colors"
                    disabled={setBestPost.isLoading}
                  >
                    {setBestPost.isLoading ? '설정중...' : '베스트 설정'}
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-[#DC2626] text-white px-3 py-1 rounded hover:bg-[#B91C1C] transition-colors"
                    disabled={deletePost.isLoading}
                  >
                    {deletePost.isLoading ? '삭제중...' : '삭제'}
                  </button>
                </div>
              </div>
            ))}
            {posts?.length === 0 && (
              <p className="text-gray-500 text-center py-4 bg-[#2A2A2A] rounded-lg">등록된 게시글이 없습니다.</p>
            )}
          </div>
        </div>

        <AddBlogModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSubmit={handleCreatePost}
        />
      </div>
    </div >
  )
}
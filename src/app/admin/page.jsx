'use client'

import { useMemo } from 'react'
import useBlog from '../../hooks/useBlog'
import useProject from '../../hooks/useProject'
import useRecruit from '../../hooks/useRecruit'

export default function AdminDashboard() {
  const { posts: blogs, bestBlogs } = useBlog()
  const { projects } = useProject()
  const { recruit } = useRecruit()

  const stats = useMemo(() => {
    return [
      {
        label: '전체 블로그 게시글',
        value: blogs?.length || 0,
        description: `베스트 게시글 ${bestBlogs?.length || 0}개 포함`
      },
      {
        label: '프로젝트',
        value: projects?.length || 0,
        description: '완료된 프로젝트 수'
      },
      {
        label: '기수',
        value: 13,
        description: '활동 기수'
      }
    ]
  }, [blogs, bestBlogs, projects,])

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-white">대시보드</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-[#2A2A2A] p-6 rounded-lg">
            <dt className="text-gray-400">{stat.label}</dt>
            <dd className="mt-2">
              <span className="text-3xl font-semibold text-white">{stat.value}</span>
              {stat.description && (
                <span className="text-sm text-gray-400 block mt-1">{stat.description}</span>
              )}
            </dd>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#2A2A2A] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">최근 블로그 게시글</h2>
          {blogs && blogs.length > 0 ? (
            <div className="space-y-4">
              {blogs.slice(0, 5).map((blog) => (
                <div key={blog.id} className="flex items-start gap-4">
                  {blog.thumbnail && (
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                  <div>
                    <h3 className="text-white font-medium">{blog.title}</h3>
                    <p className="text-sm text-gray-400">
                      {blog.tags?.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">등록된 블로그 게시글이 없습니다.</p>
          )}
        </div>

        <div className="bg-[#2A2A2A] p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">모집 현황</h2>
          {recruit ? (
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 block">모집 공고 URL</label>
                <a
                  href={recruit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  {recruit.url}
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 block">서류 마감</label>
                  <span className="text-white">{recruit.documentDate}</span>
                </div>
                <div>
                  <label className="text-gray-400 block">면접일</label>
                  <span className="text-white">{recruit.interviewDate}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">현재 진행 중인 모집이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  )
}
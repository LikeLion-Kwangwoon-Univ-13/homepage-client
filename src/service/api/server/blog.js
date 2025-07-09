import http from "../axios"

/**
 * 블로그 게시글 목록을 가져옵니다.
 * @returns {Promise<{
 *   best: Array<{
 *     id: number,
 *     title: string,
 *     contents: string,
 *     url: string,
 *     thumbnail: string,
 *     tags: string[]
 *   }>,
 *   posts: Array<{
 *     id: number,
 *     title: string,
 *     contents: string,
 *     url: string,
 *     thumbnail: string,
 *     tags: string[]
 *   }>,
 *   total_page: number
 * }>}
 */
async function get(){
	const response = await http.get(`/api/blog`)	
	return response.data
}

/**
 * 관리자용 블로그 게시글 목록을 가져옵니다.
 * @returns {Promise<{
 *   best: null,
 *   posts: Array<{
 *     id: number,
 *     title: string,
 *     contents: string,
 *     url: string,
 *     thumbnail: string,
 *     tags: string[],
 *     isBest: number
 *   }>
 * }>}
 */
async function getPosts(){
	const response = await http.get(`/api/blog/posts?cursor=1&limit=10`)
	return response.data
}
/**
 * 새로운 블로그 게시글을 생성합니다.
 * @param {Object} data
 * @param {string} data.title - 게시글 제목
 * @param {string} data.content - 게시글 내용
 * @param {string} data.url - 게시글 URL
 * @param {string} data.thumbnail - 썸네일 이미지 URL
 * @param {string[]} data.tags - 태그 목록
 * @returns {Promise<any>}
 */
async function post(data){
	const response = await http.post(`/api/manage/newpost`,data)
	return response.data
}

/**
 * 기존 블로그 게시글을 수정합니다.
 * @param {number} id - 게시글 ID
 * @param {Object} data - 수정할 게시글 데이터
 * @param {string} data.title - 게시글 제목
 * @param {string} data.content - 게시글 내용
 * @param {string} data.url - 게시글 URL
 * @param {string} data.thumbnail - 썸네일 이미지 URL
 * @param {string[]} data.tags - 태그 목록
 * @returns {Promise<any>}
 */
async function patch(id,data){
	const response = await http.patch(`/api/manage/posts/newpost/${id}`,data)
	return response.data
}


/**
 * 게시글을 베스트 게시글로 설정합니다.
 * @param {number} id - 게시글 ID
 * @returns {Promise<any>}
 */
async function patchSetBest(id){
	const response = await http.patch(`/api/manage/posts/${id}/setBest`)
	return response.data
}

/**
 * 게시글의 베스트 설정을 해제합니다.
 * @param {number} id - 게시글 ID
 * @returns {Promise<any>}
 */
async function patchCancelBest(id){
	const response = await http.patch(`/api/manage/posts/${id}/cancelBest`)
	return response.data
}

/**
 * 블로그 게시글을 삭제합니다.
 * @param {number} id - 게시글 ID
 * @returns {Promise<any>}
 */
async function _delete(id){
	const response = await http.delete(`/api/blog/posts/${id}/delete`)
	return response.data
}

const blogApi={
	get,
	getPosts,
	post,
	patch,
	patchSetBest,
	patchCancelBest,
	_delete
}
export default blogApi
import http from "../axios"

/**
 * 새로운 기수를 추가합니다.
 * @param {{
 *   generation: number
 * }} data - 추가할 기수 정보
 * @returns {Promise<{
 *   id: number,
 *   generation: number,
 *   created_at: string
 * }>} 추가된 기수 정보
 */
async function post(data){
	const response = await http.post('/api/manage/generation/create',data)
	return response.data
}

/**
 * 특정 기수를 삭제합니다.
 * @param {number} id - 삭제할 기수의 ID
 * @returns {Promise<{
 *   success: boolean,
 *   message?: string
 * }>} 삭제 성공 여부
 */
async function _delete(id){
	const response = await http.delete(`/api/manage/generation/${id}/delete`)
	return response.data
}

const generationApi={
	post,
	_delete
}

export default generationApi

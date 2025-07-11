import http from "../axios"

/**
 * 특정 기수의 멤버 목록을 조회합니다.
 * @param {number} generation - 조회할 기수
 * @returns {Promise<{
 *   members: Array<{
 *     id: number,
 *     profile: string,
 *     name: string,
 *     generation: number,
 *     position: "운영진" | "아기사자",
 *     part: "프론트엔드" | "백엔드" | "기획" | "디자인",
 *     github: string,
 *     instagram: string,
 *     stacks: string[]
 *   }>
 * }>} 해당 기수의 멤버 목록
 */
async function get(generation){
	const response = await http.get(`/api/members/${generation}`)
	return response.data
}

/**
 * 새로운 멤버를 추가합니다.
 * @param {{
 *   profile: string,
 *   name: string,
 *   generation: number,
 *   position: "운영진" | "아기사자",
 *   part: "프론트엔드" | "백엔드" | "기획" | "디자인",
 *   github: string,
 *   instagram: string,
 *   stacks: string[]
 * }} data - 추가할 멤버 정보
 * @returns {Promise<{id: number}>} 추가된 멤버의 ID
 */
async function post(data){
	const response = await http.post(`/api/manage/newmember`,data)
	return response.data
}

/**
 * 기존 멤버 정보를 수정합니다.
 * @param {number} id - 수정할 멤버의 ID
 * @param {{
 *   profile?: string,
 *   name?: string,
 *   generation?: number,
 *   position?: "운영진" | "부원",
 *   part?: "프론트엔드" | "백엔드" | "기획" | "디자인",
 *   github?: string,
 *   instagram?: string,
 *   stacks?: string[]
 * }} data - 수정할 멤버 정보 (부분 수정 가능)
 * @returns {Promise<{success: boolean}>} 수정 성공 여부
 */
async function patch(id,data){
	const response = await http.patch(`/api/manage/members/${id}`,data)
	return response.data
}

/**
 * 멤버를 삭제합니다.
 * @param {number} id - 삭제할 멤버의 ID
 * @returns {Promise<{success: boolean}>} 삭제 성공 여부
 */
async function _delete(id){
	const response = await http.delete(`/api/manage/members/${id}`)
	return response.data
}

const memberApi={
	get,
	post,
	patch,
	_delete
}

export default memberApi

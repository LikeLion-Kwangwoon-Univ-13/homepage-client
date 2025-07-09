import http from "../axios"

/**
 * 프로젝트 정보를 가져오는 API
 * @param {Object} params
 * @param {string} [params.section] - 섹션 구분 (home)
 * @returns {Promise<{projects: {
 *   id: number,
 *   title: string,
 *   line_introduction: string,
 *   url: string
 * }[]}>} 섹션에 따라 다른 형태의 데이터 반환
 */
async function get({section="home"}){
	const response = await http.get(`/api/projects`,
		{
			params:{
				section: section
			}
		})
	return response.data
}

/**
 * 프로젝트 ID로 프로젝트 정보를 가져오는 API
 * @param {number} id - 프로젝트 ID
 * @returns {Promise<{
 *   id: number,
*   title: string,
*   line_introduction: string,
*   url: string,
*   introduction: string,
*   project_member: {
*     [key: string]: 'pm' | 'design' | 'frontend' | 'backend'
*   },
*   stacks: string[],
*   part: string,
*   start_date: string,
*   end_date: string
* }>} 프로젝트 정보
 */	
async function getById(id){
	const response = await http.get(`/api/projects/${id}`)
	return response.data
}

/**
 * 프로젝트 이력 정보를 가져오는 API
 * @returns {Promise<{projects: {
   *   id: number,
   *   title: string,
   *   line_introduction: string,
   *   part: string,
   *   url: string,
   *   heart: number
   * }[]}>} 프로젝트 이력 정보
 */	
async function getHistory(){
	const response = await http.get(`/api/projects/history?cursor=0&limit=12`)
	return response.data
}

/**
 * 프로젝트를 추가하는 API
 * @param {Object} data - 프로젝트 정보
 * @param {string} data.title - 프로젝트 제목
 * @param {string} data.line_introduction - 프로젝트 한 줄 설명
 * @param {string} data.url - 프로젝트 이미지 URL
 * @param {string} data.introduction - 프로젝트 상세 설명
 * @param {string[]} data.projectMember - 프로젝트 참여 멤버 목록
 * @param {string[]} data.stacks - 사용된 기술 스택 목록
 * @param {('WEB'|'APP'|'GAME')} data.part - 프로젝트 분야
 * @param {number} data.generation - 기수
 * @param {string} data.startDate - 시작일 (YYYY-MM-DD)
 * @param {string} data.endDate - 종료일 (YYYY-MM-DD)
 * @returns {Promise<{id: number}>} 추가된 프로젝트 ID
 */
async function post(data){
	const response = await http.post(`/api/manage/newproject`,data)
	return response.data
}

/**
 * 프로젝트를 수정하는 API
 * @param {number} id - 수정할 프로젝트 ID
 * @param {Object} data - 프로젝트 정보
 * @param {string} [data.title] - 프로젝트 제목
 * @param {string} [data.line_introduction] - 프로젝트 한 줄 설명
 * @param {string} [data.url] - 프로젝트 이미지 URL
 * @param {string} [data.introduction] - 프로젝트 상세 설명
 * @param {string[]} [data.projectMember] - 프로젝트 참여 멤버 목록
 * @param {string[]} [data.stacks] - 사용된 기술 스택 목록
 * @param {('WEB'|'APP'|'GAME')} [data.part] - 프로젝트 분야
 * @param {number} [data.generation] - 기수
 * @param {string} [data.startDate] - 시작일 (YYYY-MM-DD)
 * @param {string} [data.endDate] - 종료일 (YYYY-MM-DD)
 * @returns {Promise<void>} 성공 시 아무 값도 반환하지 않음
 */
async function patch(id,data){
	const response = await http.put(`/api/manage/project/newPost/${id}`,data)
	return response.data
}

/**
 * 프로젝트를 삭제하는 API
 * @param {number} id - 삭제할 프로젝트 ID
 * @returns {Promise<void>} 성공 시 아무 값도 반환하지 않음
 */
async function _delete(id){
	const response = await http.delete(`/api/manage/project/${id}/delete`)
	return response.data
}

const projectApi={
	get,
	getById,
	getHistory,
	post,
	patch,
	delete:_delete
}	

export default projectApi
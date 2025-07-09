import http from "../axios"

/**
 * @typedef {Object} Recruit
 * @property {number} id - 모집 공고 ID
 * @property {string} url - 모집 공고 URL
 * @property {string} documentDate - 서류 제출 마감일
 * @property {string} candidateDate - 합격자 발표일
 * @property {string} interviewDate - 면접일
 * @property {string} acceptDate - 최종 합격자 발표일
 * @property {string} otDate - OT 일자
 */

/**
 * 현재 모집 공고 정보를 조회합니다.
 * @returns {Promise<Recruit>} 모집 공고 정보
 */
async function get() {
  const response = await http.get(`/api/recruit`)
  return response.data
}

/**
 * 새로운 모집 공고를 등록합니다.
 * @param {Omit<Recruit, 'id'>} data - 모집 공고 데이터
 * @returns {Promise<Recruit>} 생성된 모집 공고 정보
 */
async function post(data) {
  const response = await http.post(`/api/recruit`, data)
  return response.data
}

/**
 * 모집 공고 정보를 수정합니다.
 * @param {number} id - 수정할 모집 공고 ID
 * @param {Partial<Omit<Recruit, 'id'>>} data - 수정할 데이터
 * @returns {Promise<Recruit>} 수정된 모집 공고 정보
 */
async function patch(id, data) {
  const response = await http.put(`/api/recruit/${id}`, data)
  return response.data
}

export const recruitApi = {
  get,
  post,
  patch
}
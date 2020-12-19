import axios from 'axios';
const client = axios.create();

/**
 * 글로벌 설정 예시:
 * // API 주소를 다른 곳으로 사용함
 * client.defaults.baseURL = 'https://externai-api-server.com'
 *
 * // 헤더 설정
 * client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
 *
 * // 인터셉터 설정
 *  axios.interceptor.response.use(
 *    response => {
 *      // 요청실패시특정작업수행
 *      return response;
 *    },
 *    error => {
 *      return Promise.reject(error);
 *    }
 * )
 *
 */

export default client;

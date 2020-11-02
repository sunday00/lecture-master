import axios from 'axios';
import { API_HOST } from '../constant';
import { message } from 'antd';

type PramType = {
    method: "POST" | "GET" | "PUT" | "DELETE",
    url: string,
    params?: object,
    data?: object
}

export function callApi({method = 'GET', url, params, data}: PramType)
{
    return axios({
        url,
        method,
        baseURL: API_HOST,
        params,
        data,
        withCredentials: true
    }).then(res => {
        const { resultCode, resultMessage } = res.data;
        if( resultCode < 0 ) {
            message.error(resultMessage);
        }

        return {
            isSuccess: resultCode === ResultCode.Success,
            data: res.data.data,
            resultCode,
            resultMessage
        }
    });
}

export const ResultCode = {
    Success: 0,
}

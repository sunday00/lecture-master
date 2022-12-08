import axios from 'axios';

export const getOneActivity = () => {
  return axios.get('http://www.boredapi.com/api/activity/')
    .then(res => res.data)
}
import { atom, selector, selectorFamily } from 'recoil';
import { getUsers, getUser } from '@/apis/index.jsx';

// export const userList = atom({
//   key: 'userList',
//   default: [
//     {id: 1, username: 'kkk'}
//   ],
//   effects: [
//     ({setSelf}) => {
//       getUsers()
//         .then(res => {
//           setSelf(res.data)
//         })
//     }
//   ],
// })

export const userList = selector({
  key: 'userList',
  get: async () => await getUsers().then(res => res.data)
})

export const userOne = selectorFamily({
  key: 'userOne',
  get: id => async () => await getUser(id).then(res => res.data)
})

import { atom } from 'recoil';
import { userList, userOne } from '@/stores/users.store.jsx';

export const initRecoil = (preload) => {
  return ({set}) => {
    for (const [key, value] of Object.entries(preload)) {
      const state = ssrStates[key]
      if(state) {
        set(state, value)
      }
    }
  }
}

export const ssrStates = {
  userList, userOne
}

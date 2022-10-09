import { atom, useRecoilValue } from 'recoil'

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

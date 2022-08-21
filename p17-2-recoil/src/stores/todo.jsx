import { atom, selector } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    { id: 1, text: 'do something', done: false},
    { id: 2, text: 'do 2', done: true},
    { id: 3, text: 'do 3', done: false},
  ],
})

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState)
    const list = get(todoListState)

    switch (filter) {
      case 'Show Completed':
        return list.filter(i => i.done)
      case 'Show Uncompleted':
        return list.filter(i => !i.done)
      default:
        return list
    }
  },
})

export const todoListStateState = selector({
  key: 'todoListStateState',
  get: ({get}) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter(i => i.done).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  }
})

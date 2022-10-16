import { atom, atomFamily, selector, useRecoilValue } from 'recoil';

export const logMiddleware = (logging, atomOption) => {
  console.log(logging)
  return atomOption
}

export const todoItemState = atomFamily({
  key: 'todoItemState',
  default: (id) => ({
    id,
    text: '',
    isCompleted: false,
  })
})

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'All',
})

export const loggedTodoListState = selector({
  key: 'LoggedTodoList',
  get: ({get}) => {
    console.log('get list')
    return get(todoListState)
  },
  set: ({get, set}, newList) => {
    console.log('set list', get(todoListState), 'to', newList)
    set(todoListState, newList)
  }
})

export const filteredTodoListState = selector({
  key: 'FilteredTodoList',
  get: ({get}) => {
    switch (get(todoListFilterState)) {
      case 'Completed': return get(todoListState).filter((item) => item.isComplete)
      case 'UnCompleted': return get(todoListState).filter((item) => !item.isComplete)
      default: return get(todoListState)
    }
  }
})

const getItemStateById = (id, get) => get(todoItemState(id))

export const todoListStatsCounts = selector({
  key: 'TodoListStatsCounts',
  get: ({get}) => {
    const all = get(todoListState)

    return {
      total: all.length,
      completed: all.filter((item) => getItemStateById(item, get).isCompleted).length,
      uncompleted: all.filter((item) => !getItemStateById(item, get).isCompleted).length,
      completeCov: all.length === 0 ? 0 : all.filter((item) => getItemStateById(item, get).isCompleted).length / all.length * 100
    }
  }
})
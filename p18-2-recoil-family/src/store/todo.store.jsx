import { atom, selector, useRecoilValue } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [],
})

export const todoListFilterState = atom({
  key: 'TodoListFilter',
  default: 'All',
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

export const todoListStatsCounts = selector({
  key: 'TodoListStatsCounts',
  get: ({get}) => {
    const all = get(todoListState)

    return {
      total: all.length,
      completed: all.filter((item) => item.isComplete).length,
      uncompleted: all.filter((item) => !item.isComplete).length,
      completeCov: all.length === 0 ? 0 : all.filter((item) => item.isComplete).length / all.length * 100
    }
  }
})
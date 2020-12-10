package models

import (
	"time"
)

type memoryHandler struct {
	todomap map[int]*Todo
}

func (m *memoryHandler) getTodos(userID string) []*Todo {
	list := []*Todo{}
	for _, v := range m.todomap {
		if v.UserID == userID {
			list = append(list, v)
		}
	}
	return list
}

func (m *memoryHandler) getTodosMap(userID string) map[int]*Todo {
	filtered := make(map[int]*Todo)

	for _, v := range m.todomap {
		if v.UserID == userID {
			filtered[v.ID] = v
		}
	}

	return filtered
}

func (m *memoryHandler) addTodo(name string, userID string) *Todo {
	id := 0
	for _, v := range m.todomap {
		if id < v.ID {
			id = v.ID
		}
	}
	id = id + 1
	todo := &Todo{id, userID, name, false, time.Now()}
	m.todomap[id] = todo
	return todo
}

func (m *memoryHandler) removeTodo(id int) bool {
	if _, ok := m.todomap[id]; ok {
		delete(m.todomap, id)
		return true
	} else {
		return false
	}
}

func (m *memoryHandler) updateTodo(id int) bool {
	if _, ok := m.todomap[id]; ok {
		m.todomap[id].Completed = !m.todomap[id].Completed
		return true
	} else {
		return false
	}
}

func (m *memoryHandler) closeDB() {

}

func newMemoryHandler() dbHandler {
	m := &memoryHandler{}
	m.todomap = make(map[int]*Todo)
	return m
}

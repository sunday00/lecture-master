package models

import (
	"time"
)

type memoryHandler struct {
	todomap map[int]*Todo
}

func (m *memoryHandler) getTodos() []*Todo {
	list := []*Todo{}
	for _, v := range m.todomap {
		list = append(list, v)
	}
	return list
}

func (m *memoryHandler) getTodosMap() map[int]*Todo {
	return m.todomap
}

func (m *memoryHandler) addTodo(name string) *Todo {
	id := 0
	for _, v := range m.todomap {
		if id < v.ID {
			id = v.ID
		}
	}
	id = id + 1
	todo := &Todo{id, name, false, time.Now()}
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

package model

import "time"

type Todo struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Completed bool      `json:"completed"`
	CreatedAt time.Time `json:"created_at"`
}

var todomap map[int]*Todo

func init() {
	todomap = make(map[int]*Todo)
}

func GetTodos() []*Todo {
	list := []*Todo{}
	for _, v := range todomap {
		list = append(list, v)
	}
	return list
}

func GetTodosMap() map[int]*Todo {
	return todomap
}

func AddTodo(name string) *Todo {
	id := 0
	for _, v := range todomap {
		if id < v.ID {
			id = v.ID
		}
	}
	id = id + 1
	todo := &Todo{id, name, false, time.Now()}
	todomap[id] = todo
	return todo
}

func RemoveTodo(id int) bool {
	if _, ok := todomap[id]; ok {
		delete(todomap, id)
		return true
	} else {
		return false
	}
}

func UpdateTodo(id int) bool {
	if _, ok := todomap[id]; ok {
		todomap[id].Completed = !todomap[id].Completed
		return true
	} else {
		return false
	}
}

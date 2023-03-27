import { Injectable } from '@nestjs/common'
import { TaskEntity } from './model/task.entity'
import { TaskCreateDto } from './model/task.create.dto'
import { TaskListDto } from './model/task.list.dto'

@Injectable()
export class TaskService {
  public tasks: TaskEntity[] = [
    {
      id: 1,
      name: 'abc',
      completed: true,
      description: '',
      owner: 's',
      duration: 2,
    },
    {
      id: 2,
      name: 'abcd',
      completed: false,
      description: '',
      owner: 's',
      duration: 2,
    },
    {
      id: 3,
      name: 'ab2',
      completed: true,
      description: '',
      owner: 's',
      duration: 2,
    },
    {
      id: 4,
      name: 'ab3',
      completed: false,
      description: '',
      owner: 's',
      duration: 2,
    },
    {
      id: 5,
      name: 'abc3',
      completed: false,
      description: '',
      owner: 's',
      duration: 2,
    },
  ]

  async list(dto: TaskListDto): Promise<TaskEntity[]> {
    return this.tasks.filter((t) =>
      typeof dto.filter === 'undefined' ? true : t.completed === dto.filter,
    )
  }

  async show(id: number): Promise<TaskEntity> {
    const task = this.tasks.filter((t) => t.id === id)
    return task[0]
  }

  async store(dto: TaskCreateDto): Promise<TaskEntity> {
    const task = new TaskEntity()
    task.id = this.tasks.length ? this.tasks[this.tasks.length - 1]?.id + 1 : 1
    task.name = dto.name
    task.completed = false
    task.description = ''
    task.owner = 's'
    task.duration = 2

    this.tasks.push(task)

    return task
  }

  async toggleCompleted(id: number): Promise<TaskEntity> {
    const taskIndex = this.tasks.findIndex((t) => t.id === id)
    const task = this.tasks[taskIndex]
    task.completed = !task.completed

    return task
  }
}

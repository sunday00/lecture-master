export type roomContent = {
  user: string
  time: string
  body: string
  isSystem: boolean
}

export type room = {
  id?: string
  name: string
  users?: string[]
  contents?: roomContent[]
}

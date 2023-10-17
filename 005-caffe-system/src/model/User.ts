export enum UserRole {
  admin,
  customer
}

export interface User {
  id: number
  name: string
  role: UserRole
}

import {User, UserRole} from "../model/User";

export const isUserRole = (user: User, role: UserRole) => {
  return user.role === role
}
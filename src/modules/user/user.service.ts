import { Injectable } from '@nestjs/common'
import { UserCreateDto } from './model/user.create.dto'
import { UserEntity } from './model/user.entity'

@Injectable()
export class UserService {
  users: UserEntity[]

  list() {
    return [{ name: 'hello' }, { name: 'bye' }]
  }

  store(user: UserCreateDto): UserEntity {
    const userEntity = new UserEntity()
    userEntity.id = '1'
    userEntity.email = user.email
    userEntity.username = user.username

    this.users.push(userEntity)

    return userEntity
  }
}

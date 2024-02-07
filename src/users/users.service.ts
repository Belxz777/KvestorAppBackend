import { CreateUserDto, UpdateUserDto } from './dto/create-user-dto';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
export class UsersService {
    //  модель параметрами передаем саму модель
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,) {}
   
    async  getAllUsers():Promise<User[]>{
    //для того что бы вывести всех поьзователей
        const users   = await this.userRepository.find()
return users
    }
    async createNewUser(dto:CreateUserDto):Promise<User>{
        const user = await this.userRepository.create(dto)
        await this.userRepository.save(user)
        return user
    }
    async getUserById(id:number){
        const user = await this.userRepository.find({
            where: {
                id:id
            },
        })
        if (!user) {
          throw new Error('User not found');
        }
return user
    }
    async deleteUser(id:number):Promise<void | number>{
const deleteUser  = await this.userRepository.delete(id)
const user = await this.userRepository.find({
    where: {
        id:id
    },
})
if (!user) {
  throw new Error('User not found');
}
return 
}
    async updateUser (dto:UpdateUserDto,id:number){
        const update = await this.userRepository.update(id,dto)
        const user = await this.userRepository.find({
            where: {
                id:id
            },
        })
        if (!user) {
          throw new Error('User not found');
        }
      return  user
    }   
    async getUserBoards(id:number){
        const user = await this.userRepository.find({
            where: {
                id:id
            },
        })
        if (!user) {
          throw new Error('User not found');
        }
        const boards = await this.userRepository.find({
            where: {
                id:id
            },
            relations:['boards']
        })
        return boards
    }
    async addBoardToUser(id:number,boardId:number,dto:UpdateUserDto){
        const user = await this.userRepository.find({
            where: {
                id:id
            },
        })
        if (!user) {
          throw new Error('User not found');
        }
        const update = await this.userRepository.update(id,dto)

        return user
    }
}

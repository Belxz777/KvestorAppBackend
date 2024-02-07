import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.entity';
import { Param } from '@nestjs/common';
import { UpdateUserDto } from './dto/create-user-dto';
@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private UsersService:UsersService){
    }
    @ApiOperation({summary:'Это апишка для добавления userov'})
    @ApiResponse({status:200,type:[User]})
@Post()
    create(@Body() userDto:CreateUserDto){
return this.UsersService.createNewUser(userDto)
    }
// наше описание этой апишки конкретной
    @ApiOperation({summary:'Это апишка для поиска всех userov'})
    @ApiResponse({status:200,type:[User]})
@Get()
getAllUsers(){
    return this.UsersService.getAllUsers()
}

@Delete(':id')
//ошибка\
   deleteUser(@Param('id') id: number):Promise<void | number> {
    return this.UsersService.deleteUser(id);
  }
  @Patch(':id')
  async updateUser(@Param('id') id:number,
    @Body()   updateUserData:UpdateUserDto ){
        const updatedUser = await this.UsersService.updateUser(updateUserData,id);
        return updatedUser;
}
}

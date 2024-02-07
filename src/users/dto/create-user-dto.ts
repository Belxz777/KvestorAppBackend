import { ApiProperty } from "@nestjs/swagger"
export class CreateUserDto {
readonly firstname:string

readonly lastname:string

readonly position:string

readonly age:number

 readonly login:string
 readonly password:string
}
export class UpdateUserDto {
    readonly firstname:string

    readonly lastname:string
    
    readonly position:string
    
    readonly age:number
    
     readonly login:string
     readonly password:string
}
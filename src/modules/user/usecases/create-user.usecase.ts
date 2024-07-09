import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "@prisma/client";
import { UserRepository } from "../schema/user.repository";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepository,
  ){}
  
  async execute(userData: CreateUserDto):  Promise<User> {
    return this.userRepository.create(userData);
  }
}

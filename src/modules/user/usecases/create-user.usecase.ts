import { Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "@prisma/client";
import { UserRepository } from "../schema/user.repository";
import { CriptService } from "src/cript/cript.service";

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepository,
    private readonly criptService: CriptService
  ) {}

  async execute(
    userData: CreateUserDto
  ): Promise<Pick<User, "id" | "email" | "name">> {
    userData.password = await this.criptService.stringToHash(userData.password);
    const createdUser = await this.userRepository.create(userData);
    return {
      id: createdUser.id,
      email: createdUser.email,
      name: createdUser.name,
    };
  }
}

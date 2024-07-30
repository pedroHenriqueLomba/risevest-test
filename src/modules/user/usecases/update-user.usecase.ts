import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../schema/user.repository";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CriptService } from "src/cript/cript.service";
import { User } from "../entities/user.entity";
import { UserTokenData } from "../entities/user.entity";

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepository,
    private readonly criptService: CriptService
  ) {}

  async execute(user: UserTokenData, userData: UpdateUserDto) {
    const oldUser = await this.userRepository.findById(String(user.id));
    if (!oldUser) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
    userData.password = await this.criptService.stringToHash(userData.password);
    const updatedUser = { ...oldUser, ...userData };
    return this.userRepository.update(updatedUser);
  }
}

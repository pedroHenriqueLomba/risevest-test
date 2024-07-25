import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../schema/user.repository";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CriptService } from "src/cript/cript.service";

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepository,
    private readonly criptService: CriptService
  ) {}

  async execute(userId: string, userData: UpdateUserDto) {
    const oldUser = await this.userRepository.findById(userId);
    if (!oldUser) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
    userData.password = await this.criptService.stringToHash(userData.password);
    const updatedUser = { ...oldUser, ...userData };
    return this.userRepository.update(updatedUser);
  }
}

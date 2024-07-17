import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../schema/user.repository";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepository
  ) {}

  async execute(userId: string, userData: UpdateUserDto) {
    const oldUser = await this.userRepository.findById(userId);
    if (!oldUser) {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
    const updatedUser = { ...oldUser, ...userData };
    return this.userRepository.update(updatedUser);
  }
}

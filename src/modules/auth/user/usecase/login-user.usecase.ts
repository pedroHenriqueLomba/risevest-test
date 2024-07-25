import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { UserLoginDto } from "../dto/user-login.dto";
import { UserRepository } from "src/modules/user/schema/user.repository";
import { CriptService } from "src/cript/cript.service";

@Injectable()
export class LoginUserUseCase {
  constructor(
    @Inject("UserRepository")
    private readonly userRepository: UserRepository,
    private readonly criptService: CriptService
  ) {}

  async execute(loginData: UserLoginDto) {
    const user = await this.userRepository.findOne(
      { email: loginData.email },
      { id: true, email: true, name: true, password: true }
    );
    if (!user) {
      throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }
    const isValidPassword = await this.criptService.compareHash(
      loginData.password,
      user.password
    );

    if (!isValidPassword) {
      throw new HttpException("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }

    delete user.password;

    return this.criptService.objectToJWT(user);
  }
}

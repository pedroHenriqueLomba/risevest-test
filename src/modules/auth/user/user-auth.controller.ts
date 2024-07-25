import { Body, Controller, Post } from "@nestjs/common";
import { LoginUserUseCase } from "./usecase/login-user.usecase";
import { UserLoginDto } from "./dto/user-login.dto";

@Controller("auth/user")
export class UserAuthController {
  constructor(private readonly loginUserUseCase: LoginUserUseCase) {}

  @Post("login")
  async login(@Body() loginData: UserLoginDto) {
    return this.loginUserUseCase.execute(loginData);
  }
}

import { Module } from "@nestjs/common";
import { UserAuthController } from "./user-auth.controller";
import { LoginUserUseCase } from "./usecase/login-user.usecase";
import { UserModule } from "src/modules/user/user.module";
import { CriptModule } from "src/cript/cript.module";

@Module({
  imports: [UserModule, CriptModule],
  controllers: [UserAuthController],
  providers: [LoginUserUseCase],
})
export class UserAuthModule {}

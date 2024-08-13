import { Module } from "@nestjs/common";
import { UserAuthModule } from "./user/user-auth.module";

@Module({
  imports: [UserAuthModule],
})
export class AuthModule {}

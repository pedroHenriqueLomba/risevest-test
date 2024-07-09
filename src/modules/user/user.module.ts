import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "./schema/user.repository";
import { UserPrismaModel } from "./schema/user.prisma.model";
import { DatabaseModule } from "src/database/database.module";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    UserService,
    { provide: UserRepository, useClass: UserPrismaModel },
  ],
})
export class UserModule {}

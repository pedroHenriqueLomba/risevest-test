import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./schema/user.repository";
import { UserPrismaModel } from "./schema/user.prisma.model";
import { DatabaseModule } from "src/database/database.module";
import { CreateUserUseCase } from "./usecases/create-user.usecase";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    { provide: "UserRepository", useClass: UserPrismaModel },
    CreateUserUseCase,
  ],
})
export class UserModule {}

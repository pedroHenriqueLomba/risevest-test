import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserPrismaModel } from "./schema/user.prisma.model";
import { DatabaseModule } from "src/database/database.module";
import { CreateUserUseCase } from "./usecases/create-user.usecase";
import { UpdateUserUseCase } from "./usecases/update-user.usecase";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    { provide: "UserRepository", useClass: UserPrismaModel },
    CreateUserUseCase,
    UpdateUserUseCase,
  ],
})
export class UserModule {}

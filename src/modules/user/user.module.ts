import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserPrismaModel } from "./schema/user.prisma.model";
import { DatabaseModule } from "src/database/database.module";
import { CreateUserUseCase } from "./usecases/create-user.usecase";
import { UpdateUserUseCase } from "./usecases/update-user.usecase";
import { CriptModule } from "src/cript/cript.module";
import { UpdateUserWithAdminUseCase } from "./usecases/update-user-with-admin.usecase";

@Module({
  imports: [DatabaseModule, CriptModule],
  controllers: [UserController],
  providers: [
    { provide: "UserRepository", useClass: UserPrismaModel },
    CreateUserUseCase,
    UpdateUserUseCase,
    UpdateUserWithAdminUseCase,
  ],
  exports: ["UserRepository"],
})
export class UserModule {}

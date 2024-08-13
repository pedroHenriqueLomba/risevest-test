import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserUseCase } from "./usecases/create-user.usecase";
import { UpdateUserUseCase } from "./usecases/update-user.usecase";
import { UserGuard } from "../auth/user/user-auth.guard";
import { User as UserDecorator } from "../auth/user/user.decorator";
import { UserTokenData } from "./entities/user.entity";
import { UserRoles } from "../auth/user/user-auth.decorator";
import { UserRole } from "./enum/user.roles.enum";
import { UpdateUserWithAdminDto } from "./dto/update-user-with-admin.dto";
import { UpdateUserWithAdminUseCase } from "./usecases/update-user-with-admin.usecase";

@Controller("user")
export class UserController {
  constructor(
    private readonly createUserUsecase: CreateUserUseCase,
    private readonly updateUserUsecase: UpdateUserUseCase,
    private readonly updateUserWithAdminUsecase: UpdateUserWithAdminUseCase
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUsecase.execute(createUserDto);
  }

  @Get()
  findAll() {}

  @Get(":id")
  findOne(@Param("id") id: string) {}

  @Put()
  @UseGuards(UserGuard)
  update(
    @Body() updatedUserData: UpdateUserDto,
    @UserDecorator() user: UserTokenData
  ) {
    return this.updateUserUsecase.execute(user, updatedUserData);
  }

  @Put(":id")
  @UseGuards(UserGuard)
  @UserRoles(UserRole.ADMIN_USER)
  updateById(
    @Param("id") userId: string,
    @Body() updateUserDto: UpdateUserWithAdminDto
  ) {
    return this.updateUserWithAdminUsecase.execute(userId, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {}
}

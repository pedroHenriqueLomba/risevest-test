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

@Controller("user")
export class UserController {
  constructor(
    private readonly createUserUsecase: CreateUserUseCase,
    private readonly updateUserUsecase: UpdateUserUseCase
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.createUserUsecase.execute(createUserDto);
  }

  @Get()
  findAll() {}

  @Get(":id")
  findOne(@Param("id") id: string) {}

  @Put(":id")
  @UseGuards(UserGuard)
  update(@Param("id") id: string, @Body() updatedUserData: UpdateUserDto) {
    return this.updateUserUsecase.execute(id, updatedUserData);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {}
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserUseCase } from "./usecases/create-user.usecase";
import { UpdateUserUseCase } from "./usecases/update-user.usecase";

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
  update(@Param("id") id: string, @Body() updatedUserData: UpdateUserDto) {
    return this.updateUserUsecase.execute(id, updatedUserData);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {}
}

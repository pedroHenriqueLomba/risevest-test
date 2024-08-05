import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { UserGuard } from "../auth/user/user-auth.guard";
import { UploadFileUsecase } from "./usecases/upload-file.usecase";
import { User as UserDecorator } from "../auth/user/user.decorator";
import { User, UserTokenData } from "../user/entities/user.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateFileDto } from "./dto/create-file.dto";
import { RemoveFileUsecase } from "./usecases/remove-file.usecase";

@Controller("upload-files")
export class FileController {
  constructor(
    private readonly uploadFileUsecase: UploadFileUsecase,
    private readonly removeFileUsecase: RemoveFileUsecase
  ) {}

  @UseGuards(UserGuard)
  @UseInterceptors(FileInterceptor("file"))
  @Post()
  async createFile(
    @UserDecorator() user: User,
    @UploadedFile() file,
    @Body() body: CreateFileDto
  ) {
    return this.uploadFileUsecase.execute(user, file, body);
  }

  @UseGuards(UserGuard)
  @Delete(":fileId")
  async deleteFile(
    @Param() fileId: string,
    @UserDecorator() user: UserTokenData
  ) {
    return this.removeFileUsecase.execute(fileId, user);
  }
}

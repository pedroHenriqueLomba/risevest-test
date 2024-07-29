import { Controller, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserGuard } from "../auth/user/user-auth.guard";
import { UploadFileUsecase } from "./usecases/upload-files.usecase";
import { User as UserDecorator } from "../auth/user/user.decorator";
import { User } from "../user/entities/user.entity";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("upload-files")
export class UploadFilesController {
  constructor(
    private readonly uploadFileUsecase: UploadFileUsecase
  ) {}

  @UseGuards(UserGuard)
  @UseInterceptors(FileInterceptor("file"))
  @Post()
  async uploadFiles(@UserDecorator() user: User, @UploadedFile() file: File) {
    return this.uploadFileUsecase.execute(user, file);
  }
}

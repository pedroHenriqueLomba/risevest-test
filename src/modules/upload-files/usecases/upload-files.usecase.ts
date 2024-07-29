import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/modules/user/entities/user.entity";
import { IUploadFilesService } from "../interfaces/upload-files.interface";

@Injectable()
export class UploadFileUsecase {
  constructor(
    @Inject("IUploadFilesService")
    private readonly uploadFilesService: IUploadFilesService
  ) {}

  async execute(user: User, file: File) {}
}

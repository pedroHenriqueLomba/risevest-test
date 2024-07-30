import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/modules/user/entities/user.entity";
import { IFilesService } from "../interfaces/upload-files.interface";
import { UserTokenData } from "src/modules/user/schema/user.entity";

@Injectable()
export class UploadFileUsecase {
  constructor(
    @Inject("IFilesService")
    private readonly uploadFilesService: IFilesService
  ) {}

  async execute(user: UserTokenData, file: File) {
    const url = `${user.id}`
  }
}

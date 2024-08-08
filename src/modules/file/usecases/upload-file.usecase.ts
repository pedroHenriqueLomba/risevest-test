import { Inject, Injectable } from "@nestjs/common";
import { UserTokenData } from "src/modules/user/entities/user.entity";
import { FileRepository } from "../schema/file.repository";
import { IFilesService } from "../interfaces/file.service.interface";
import { CreateFileDto } from "../dto/create-file.dto";
import { UploadedFile } from "../entities/uploaded-file";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UploadFileUsecase {
  constructor(
    @Inject("IFilesService")
    private readonly uploadFilesService: IFilesService,
    @Inject("FileRepository")
    private readonly fileRepository: FileRepository
  ) {}

  async execute(
    user: UserTokenData,
    file: UploadedFile,
    fileData: CreateFileDto
  ) {
    file = new UploadedFile(file);
    const fileIdentifier = uuidv4();
    const fileExtension = file.getExtension();
    // const createdFile = await this.fileRepository.create({
    //   ...fileData,
    //   identifier: fileIdentifier,
    //   user_id: user.id,
    //   size: file.size,
    //   extension: fileExtension,
    // });
    const uploadedFile = new UploadedFile(file);
    this.uploadFilesService.upload(
      String(user.id),
      fileIdentifier,
      fileExtension,
      uploadedFile.buffer
    );
    return 'ok';
  }
}

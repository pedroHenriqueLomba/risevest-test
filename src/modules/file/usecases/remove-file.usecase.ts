import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { IFilesService } from "../interfaces/file.service.interface";
import { UserTokenData } from "src/modules/user/entities/user.entity";
import { FileRepository } from "../schema/file.repository";

@Injectable()
export class RemoveFileUsecase {
  constructor(
    @Inject("IFilesService")
    private readonly filesService: IFilesService,
    @Inject("FileRepository")
    private readonly fileRepository: FileRepository
  ) {}

  async execute(fileId: string, user: UserTokenData): Promise<void> {
    const file = await this.fileRepository.findOne(
      { identifier: fileId },
      { user_id: true, extension: true, identifier: true }
    );
    if (!file) {
      throw new HttpException("File not found", HttpStatus.NOT_FOUND);
    }
    if (file.user_id !== user.id) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }
    const filePath = `${user.id}/${file.identifier}.${file.extension}`;
    await this.filesService.remove(filePath);
    await this.fileRepository.deleteOne({ identifier: fileId });
  }
}

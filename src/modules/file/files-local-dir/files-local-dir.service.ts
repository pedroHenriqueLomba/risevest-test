import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { IFilesService } from "../interfaces/file.service.interface";
import { writeFile } from "fs";
import { promises as fs } from "fs";

@Injectable()
export class FilesLocalDirService implements IFilesService {
  async upload(
    userId: string,
    identifier: number,
    fileExtension: string,
    buffer: Buffer
  ): Promise<string> {
    const dirPath = `public/${userId}`;
    const filePath = `${dirPath}/${identifier}.${fileExtension}`;

    try {
      await fs.access(dirPath);
    } catch (err) {
      await fs.mkdir(dirPath, { recursive: true });
    }

    writeFile(filePath, buffer, (err) => {
      if (err) {
        console.log(err);
        throw new HttpException(
          "Internal server error",
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
    });
    return filePath;
  }

  async remove(filePath: string): Promise<void> {
    return;
  }
}

import { Injectable } from "@nestjs/common";
import { IFilesService } from "../interfaces/file.service.interface";
import { S3Client } from "./s3-client";

@Injectable()
export class FilesS3Service implements IFilesService {
  private readonly S3Client = S3Client;

  async upload(
    userId: string,
    fileId: number,
    fileExtension: string,
    buffer: Buffer
  ): Promise<string> {
    const fileKey = `${userId}/${fileId}.${fileExtension}`;
    const uploadedFile = this.S3Client.upload({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: fileKey,
      Body: buffer,
      ContentType: `image/${fileExtension}`,
    });
    return uploadedFile.promise().then(() => {
      return `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${fileKey}`;
    });
  }
  async remove(filePath: string): Promise<void> {
    this.S3Client.deleteObject(
      {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: filePath,
      },
      (err, data) => {}
    );
  }
}

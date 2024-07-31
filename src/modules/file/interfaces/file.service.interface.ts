export interface IFilesService {
  upload(
    userId: string,
    fileId: number,
    fileExtension: string,
    buffer: Buffer
  ): Promise<string>;
  remove(filePath: string): Promise<void>;
}

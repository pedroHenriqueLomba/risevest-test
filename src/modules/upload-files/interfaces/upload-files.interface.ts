export interface IUploadFilesService {
    upload(file: File): Promise<string>;
    remove(filePath: string): Promise<void>;
}
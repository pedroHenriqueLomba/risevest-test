export interface IFilesService {
    upload(file: File): Promise<string>;
    remove(filePath: string): Promise<void>;
}
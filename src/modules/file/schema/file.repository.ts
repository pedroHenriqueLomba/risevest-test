import { Injectable } from "@nestjs/common";
import { File } from "../entities/file.entity";


@Injectable()
export abstract class FileRepository {
    abstract create(data: Partial<File>): Promise<File>;
    abstract update(data: any): Promise<File>;
    abstract findById(id: string): Promise<File>;
    abstract findOne(where: any, select: any): Promise<File>;
    abstract deleteOne(where: any): Promise<void>;
}
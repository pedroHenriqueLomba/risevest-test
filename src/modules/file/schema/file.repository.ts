import { Injectable } from "@nestjs/common";


@Injectable()
export abstract class FileRepository {
    abstract create(data: any): Promise<any>;
    abstract update(data: any): Promise<any>;
    abstract findById(id: string): Promise<any>;
    abstract findOne(where: any, select: any): Promise<any>;
}
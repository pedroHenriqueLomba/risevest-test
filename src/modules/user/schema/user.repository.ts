import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class UserRepository {
    abstract create(data: any): Promise<any>;
}
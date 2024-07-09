import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateUserUseCase {
  async execute() {
    return "Hello World!";
  }
}

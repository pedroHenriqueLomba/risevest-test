import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { CriptService } from "src/cript/cript.service";
import { User } from "src/modules/user/entities/user.entity";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private readonly criptService: CriptService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return false;
    }

    const token = authHeader.split(" ")[1];
    try {
      const user = await this.criptService.JWTToString(token);
      req.user = user;
      return true;
    } catch (error) {
      return false;
    }
  }
}

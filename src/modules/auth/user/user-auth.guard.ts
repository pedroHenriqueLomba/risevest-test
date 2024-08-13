import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { CriptService } from "src/cript/cript.service";
import { UserRole } from "src/modules/user/enum/user.roles.enum";
import { USER_ROLES_KEY } from "./user-auth.decorator";

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private readonly criptService: CriptService,
    private readonly reflector: Reflector
  ) {}

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

      const requiredRoles = this.reflector.get<UserRole[]>(
        USER_ROLES_KEY,
        context.getHandler()
      );
      if (!requiredRoles || requiredRoles.length === 0) {
        return true; // Se não houver roles exigidas, permite o acesso
      }

      return requiredRoles.includes(user.role);
    } catch (error) {
      return false;
    }
  }
}

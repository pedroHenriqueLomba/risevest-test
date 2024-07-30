import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserTokenData } from "src/modules/user/entities/user.entity";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): UserTokenData => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

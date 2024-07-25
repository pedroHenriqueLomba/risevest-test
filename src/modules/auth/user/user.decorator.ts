import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User as UserType } from "src/modules/user/entities/user.entity";

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Pick<UserType, "id" | "email" | "name"> => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

import { IsEmail, IsEnum, IsString, IsStrongPassword } from "class-validator";
import { IUser } from "../interfaces/user.inteface";
import { UserRole } from "src/modules/auth/user/user.roles.enum";
import { EntitiesEnum, IsUnique } from "src/validators/unique.validator";

export class CreateUserDto implements IUser {
  @IsString()
  name: string;
  @IsString()
  @IsEmail()
  @IsUnique(EntitiesEnum.USER, "email", {
    message: "Email already exists.",
  })
  email: string;
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minSymbols: 1,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    },
    {
      message:
        "Password must have at least 8 characters, 1 symbol, 1 lowercase, 1 uppercase and 1 number.",
    }
  )
  password: string;
  @IsEnum(UserRole)
  role: string;
}

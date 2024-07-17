import { IsOptional, IsString, IsStrongPassword } from "class-validator";
export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name: string;

    @IsOptional()
    @IsStrongPassword({
        minLength: 8,
        minSymbols: 1,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
    })
    password: string;
}

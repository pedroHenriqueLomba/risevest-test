import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UserModule } from "./modules/user/user.module";
import { AuthService } from "./modules/auth/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./modules/auth/constants";
import { PrismaService } from "./database/prisma/prisma.service";
import { DatabaseModule } from "./database/database.module";
import { ValidatorsModule } from "./validators/validators.module";
import { AuthModule } from "./modules/auth/auth.module";
import { CriptModule } from "./cript/cript.module";
import { UploadFilesModule } from './modules/upload-files/upload-files.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CriptModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: "3600s" },
    }),
    DatabaseModule,
    ValidatorsModule,
    AuthModule,
    UploadFilesModule,
  ],
  controllers: [],
  providers: [AuthService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}

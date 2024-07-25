import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";

@Injectable()
export class CriptService {
  constructor(private readonly jwtService: JwtService) {}

  async objectToJWT(obj: any): Promise<string> {
    return this.jwtService.sign(obj);
  }

  async JWTToString(jwt: string): Promise<Object> {
   return this.jwtService.verify(jwt); 
  }

  async stringToHash(str: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(str, saltOrRounds);
  }

  async compareHash(str: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(str, hash);
  }
}

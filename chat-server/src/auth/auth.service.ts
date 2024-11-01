// src/auth/auth.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(refreshJwtConfig.KEY) private refreshTokenConfig : ConfigType<typeof refreshJwtConfig>
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.validateUser(email, pass);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    console.log(payload)
    const access_token = this.jwtService.sign(payload)
    const refresh_token = this.jwtService.sign(payload, this.refreshTokenConfig)
    return {
      access_token:access_token,
      refresh_token:refresh_token
    };
  }

  async refresh(user:any) {
    console.log("USER >>> ",user)
    const payload = { email: user.email, sub: user.userId };
    const access_token = this.jwtService.sign(payload)
    // const refresh_token = this.jwtService.sign(payload, this.refreshTokenConfig)
    return {
      access_token,
      "msg":"Token Refreshed"
      // refresh_token:refresh_token
    };
  }

  async register(email: string, password: string) {
    return this.usersService.create(email, password);
  }
}

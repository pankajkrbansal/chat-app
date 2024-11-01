// src/auth/jwt.strategy.ts
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy,"refresh-jwt") {
  constructor(
    @Inject(refreshJwtConfig.KEY)
    private refreshJwtAuthConfig : ConfigType<typeof refreshJwtConfig>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("refresh"),
      ignoreExpiration: false,
      secretOrKey: refreshJwtAuthConfig.secret,
    });
  }

  async validate(payload: any) {
    console.log(payload)
    return { userId: payload.sub, email: payload.email };
  }
}

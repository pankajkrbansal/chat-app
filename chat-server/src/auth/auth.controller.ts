import { Controller, Post, Request, Body, UseGuards, Req, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RefreshJwtAuthGuard } from './refresh-jwt.auth.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    console.log(body)
    return await this.authService.register(body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    console.log(user);
    
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return await this.authService.login(user);
  }

  // @UseGuards(RefreshJwtAuthGuard)
  // @Post('refresh')
  // async refresh(@Body() body: { email: string; password: string }){
  //   console.log("Reached",body)
  //   let res = await this.authService.refresh(body)
  //   return res
  // }

  @UseGuards(RefreshJwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Request() req){
    console.log("Reached")
    console.log(req.params.email);
    
    // let res = await this.authService.refresh(req)
    // return res
    return "Hello"
  }

  @UseGuards(JwtAuthGuard)
  @Post('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

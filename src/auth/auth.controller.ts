import {Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Get, Request} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";
import {AuthEntity} from "./entities/auth.entity";
import {LoginDto} from "./dto/login/login-dto";
import {RegisterDto} from "./dto/register/register-dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    login(@Body() { username, password }: LoginDto) {
        return this.authService.login(username, password);
    }

    @Post('register')
    register(@Body() { name, email, username, password }: RegisterDto) {
        return this.authService.register({name, email, username, password});
    }

    @Get('profile')
    getProfile(@Request() req) {
        return this.authService.register(req)
    }

}

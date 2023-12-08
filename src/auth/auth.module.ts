import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";
import {PrismaService} from "../prisma.service";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '24h'}
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, UsersService, JwtService, PrismaService],
})
export class AuthModule {
}

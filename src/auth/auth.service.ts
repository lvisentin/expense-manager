import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {PrismaService} from "../prisma.service";
import {RegisterDto} from "./dto/register/register-dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {
    }

    async login(username: string, password: string): Promise<any> {
        const user = await this.prisma.user.findUnique({where: {username}})

        if (!user) {
            throw new NotFoundException('User not found for this username')
        }

        const isPasswordValid = bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Wrong credentials')
        }

        const payload = {username: user.username, sub: user.id};
        return {
            accessToken: await this.jwtService.signAsync(payload, {secret: process.env.JWT_SECRET})
        }
    }

    async register({username, email, name, password}: RegisterDto): Promise<any> {
        const existingUser = await this.prisma.user.findUnique({where: {username, email}})

        if (existingUser) {
            throw new ConflictException('An user with this username or email already exists');
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        return this.prisma.user.create({
            data: {
                name: name,
                username: username,
                password: hashedPassword,
                email: email,
            }
        })
    }

}

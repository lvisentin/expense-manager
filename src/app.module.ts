import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {EntriesModule} from './entries/entries.module';
import {AuthModule} from './auth/auth.module';
import {ConfigModule} from '@nestjs/config';
import {PrismaService} from "./prisma.service";
import { EntryCategoriesModule } from './entry-categories/entry-categories.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [EntriesModule, AuthModule, UsersModule, ConfigModule.forRoot({
        envFilePath: '.env'
    }), EntryCategoriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

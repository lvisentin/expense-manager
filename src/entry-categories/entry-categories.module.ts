import {Module} from '@nestjs/common';
import {EntryCategoriesService} from './entry-categories.service';
import {EntryCategoriesController} from './entry-categories.controller';
import {PrismaService} from "../prisma.service";
import {AuthGuard} from "../auth/auth.guard";

@Module({
    controllers: [EntryCategoriesController],
    providers: [EntryCategoriesService, PrismaService, {
        provide: 'APP_GUARD',
        useClass: AuthGuard,
    }],
})
export class EntryCategoriesModule {
}

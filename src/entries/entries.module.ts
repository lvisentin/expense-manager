import {Module} from '@nestjs/common';
import {EntriesService} from './entries.service';
import {EntriesController} from './entries.controller';
import {AuthGuard} from "../auth/auth.guard";
import {PrismaService} from "../prisma.service";

@Module({
    controllers: [EntriesController],
    providers: [
        EntriesService,
        PrismaService,
        {
            provide: 'APP_GUARD',
            useClass: AuthGuard,
        }
    ],
})
export class EntriesModule {
}

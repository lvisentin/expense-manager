import { Module } from '@nestjs/common';
import { EntryCategoriesService } from './entry-categories.service';
import { EntryCategoriesController } from './entry-categories.controller';
import {PrismaService} from "../prisma.service";

@Module({
  controllers: [EntryCategoriesController],
  providers: [EntryCategoriesService, PrismaService],
})
export class EntryCategoriesModule {}

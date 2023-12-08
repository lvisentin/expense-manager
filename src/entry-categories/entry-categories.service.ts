import {Injectable} from '@nestjs/common';
import {CreateEntryCategoryDto} from './dto/create-entry-category.dto';
import {UpdateEntryCategoryDto} from './dto/update-entry-category.dto';
import {PrismaService} from "../prisma.service";
import {Prisma} from '@prisma/client';

@Injectable()
export class EntryCategoriesService {

    constructor(private prisma: PrismaService) {
    }

    create(createEntryCategoryDto: CreateEntryCategoryDto) {
        const {name} = createEntryCategoryDto;
        const data: Prisma.EntryCategoryCreateInput = {
            name
        }

        return this.prisma.entryCategory.create({data})
    }

    findAll() {
        return this.prisma.entryCategory.findMany()
    }

    findOne(id: number) {
        return this.prisma.entryCategory.findUnique({where: {id}})
    }

    update(id: number, updateEntryCategoryDto: UpdateEntryCategoryDto) {
        return this.prisma.entryCategory.update({where: {id}, data: updateEntryCategoryDto})
    }

    remove(id: number) {
        return this.prisma.entryCategory.delete({where: {id}})
    }
}

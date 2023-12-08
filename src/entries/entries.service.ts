import {Injectable} from '@nestjs/common';
import {UpdateEntryDto} from './dto/update-entry.dto';
import {PrismaService} from "../prisma.service";
import {Prisma} from '@prisma/client';
import {CreateEntryDto} from "./dto/create-entry.dto";

@Injectable()
export class EntriesService {

    constructor(private prisma: PrismaService) {
    }


    create(createEntryDto: CreateEntryDto) {
        const data = {
            user: {connect: {id: createEntryDto.userId}},
            entryCategory: {connect: {id: createEntryDto.entryCategoryId}},
            amount: createEntryDto.amount
        }

        return this.prisma.entry.create({
            data
        });
    }

    findAll() {
        return this.prisma.entry.findMany({include: {user: true, entryCategory: true}})
    }

    findOne(id: number) {
        return this.prisma.entry.findUnique({
            where: {
                id
            }
        })
    }

    update(id: number, updateEntryDto: UpdateEntryDto) {
        const entryUpdateInput: Prisma.EntryUpdateInput = {
            user: {connect: {id: updateEntryDto.userId}},
            entryCategory: {connect: {id: updateEntryDto.entryCategoryId}},
            amount: updateEntryDto.amount
        };

        return this.prisma.entry.update({where: {id}, data: entryUpdateInput})
    }

    remove(id: number) {
        return this.prisma.entry.delete({where: {id}})
    }
}

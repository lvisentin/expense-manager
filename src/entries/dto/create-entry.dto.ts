import {IsInt} from 'class-validator';
import {EntryCategory, User} from "@prisma/client";

export class CreateEntryDto {
    @IsInt()
    amount: number;

    @IsInt()
    userId: number;

    @IsInt()
    entryCategoryId: number;

    entryCategory?: EntryCategory
    user?: User;
}

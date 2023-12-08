import {IsInt, IsNumber} from "class-validator";
import {EntryCategory} from "../../entry-categories/entities/entry-category.entity";
import {User} from "../../users/entities/user.entity";

export class Entry {
    @IsInt()
    id: number;

    @IsNumber()
    amount: number;

    @IsInt()
    userId: number;

    @IsInt()
    entryCategoryId: number;

    user?: User;
    entryCategory?: EntryCategory
}

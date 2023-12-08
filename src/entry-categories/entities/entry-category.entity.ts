import {IsInt, IsString} from "class-validator";

export class EntryCategory {
    @IsInt()
    id: number;

    @IsString()
    name: string;
}

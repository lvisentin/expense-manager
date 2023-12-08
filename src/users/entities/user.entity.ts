import {IsInt, IsString} from "class-validator";
import {Entry} from "../../entries/entities/entry.entity";

export class User {
    @IsInt()
    id: number;

    @IsString()
    email: string;

    @IsString()
    name: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    createdAt?: Date;
    updatedAt?: Date;

    entry?: Entry[]
}

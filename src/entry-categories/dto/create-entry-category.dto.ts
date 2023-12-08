import {IsString} from "class-validator";

export class CreateEntryCategoryDto {
    @IsString()
    name: string;
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateEntryCategoryDto } from './create-entry-category.dto';

export class UpdateEntryCategoryDto extends PartialType(CreateEntryCategoryDto) {}

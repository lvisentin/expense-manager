import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EntryCategoriesService } from './entry-categories.service';
import { CreateEntryCategoryDto } from './dto/create-entry-category.dto';
import { UpdateEntryCategoryDto } from './dto/update-entry-category.dto';

@Controller('entry-categories')
export class EntryCategoriesController {
  constructor(private readonly entryCategoriesService: EntryCategoriesService) {}

  @Post()
  create(@Body() createEntryCategoryDto: CreateEntryCategoryDto) {
    return this.entryCategoriesService.create(createEntryCategoryDto);
  }

  @Get()
  findAll() {
    return this.entryCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entryCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEntryCategoryDto: UpdateEntryCategoryDto) {
    return this.entryCategoriesService.update(+id, updateEntryCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entryCategoriesService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ItemService } from '../services/item.service';
import { ItemDto } from './item.dto';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) {
    }
    @Post()
    create(@Body() item: ItemDto) {
        this.itemService.create(item);
     }
    @Get()
    findALL() {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.itemService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() item: ItemDto) {
      return this.itemService.update(id, item);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.itemService.delete(id);
    }
}
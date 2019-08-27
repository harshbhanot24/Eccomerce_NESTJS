
import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { FinalDiscountService } from "../services/FinalDiscount.service";
import { finalDiscountDto } from './final-discount.dto';
@Controller('final-discount')
export class FinalDiscountController {
    constructor(private readonly finalDiscountService: FinalDiscountService) {
    }
    @Post()
    create(@Body() disc: finalDiscountDto) {
        this.finalDiscountService.create(disc);
     }
    @Get()
    findALL() {
        return this.finalDiscountService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.finalDiscountService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() disc: finalDiscountDto) {
      return this.finalDiscountService.update(id, disc);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.finalDiscountService.delete(id);
    }
}
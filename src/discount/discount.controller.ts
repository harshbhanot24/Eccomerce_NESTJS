import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DiscountService } from '../services/discount.service';
import { DiscountDto } from './discount.dto';

@Controller('discount')
export class DiscountController {
    constructor(private readonly discountService: DiscountService) {
    }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() discountDto: DiscountDto) {
        this.discountService.create(discountDto);
     }
    @Get()
    findALL() {
        return this.discountService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.discountService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() discount: DiscountDto) {
      return this.discountService.update(id, discount);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.discountService.delete(id);
    }

}

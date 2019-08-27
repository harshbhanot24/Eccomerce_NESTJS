import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import {CartService} from '../services/cart.service';
import { CartDto } from './cart.dto';
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {
    }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() createCatDto: CartDto) {
        this.cartService.create(createCatDto);
     }
    @Get()
    findALL() {
        return this.cartService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.cartService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() cart: CartDto) {
      return this.cartService.update(id, cart);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.cartService.delete(id);
    }
}

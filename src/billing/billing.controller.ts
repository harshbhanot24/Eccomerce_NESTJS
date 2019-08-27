import { Controller, Get,Param } from '@nestjs/common';
import { BillingService } from '../services/billing.service';

@Controller('Billing')
export class BillingController {
constructor(private readonly billingService: BillingService){}
    @Get('details')
    getCartPrice(){
        return this.billingService.getCartAmount();
    }

    @Get('/checkout')
    getPromotionalDiscount(){
        return this.billingService.getPromotionalDiscount();
    }
    @Get()
    getCartDetails() {
       return this.billingService.getCartDetails();
    }
     @Get(':id')
    getItemDiscountPrice(@Param('id') id: string){
        return  this.billingService.getItemDiscountPrice(id); // id of the CART
    }
}

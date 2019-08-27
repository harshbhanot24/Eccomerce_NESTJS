import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { DiscountService } from '../services/discount.service';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';
import { BillingService } from '../services/billing.service';

@Module({
  controllers: [BillingController],
  providers: [CartService, DiscountService, ItemService ,BillingService]
})
export class BillingModule {}

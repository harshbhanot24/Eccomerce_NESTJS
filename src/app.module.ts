import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { DiscountController } from './discount/discount.controller';
import { CartController } from './cart/cart.controller';
import { FinalDiscountController } from './final-discount/final-discount.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './services/cart.service';
import { DiscountModule } from './discount/discount.module';
import { FinalDiscountModule } from './final-discount/final-discount.module';
import { ItemModule } from './item/item.module';
import { CartModule } from './cart/cart.module';
import { DiscountService } from './services/discount.service';
import { BillingModule } from './billing/billing.module';
import { FinalDiscountService } from "./services/FinalDiscount.service";
import { ItemService } from './services/item.service';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'harsh',
    password: '',
    database: 'ecommerce_dev',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  }), DiscountModule, FinalDiscountModule, ItemModule, CartModule, BillingModule],
  controllers: [AppController, ItemController, DiscountController, CartController, FinalDiscountController],
  providers: [AppService, CartService, DiscountService,ItemService, FinalDiscountService,],
})
export class AppModule {}

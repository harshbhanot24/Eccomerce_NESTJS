import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartService } from './cart.service';
import { ItemService } from './item.service';
import { DiscountService } from './discount.service';
import { BillingUtility } from './Utility/Billing.utilty';
import { FinalDiscountService } from './FinalDiscount.service';
@Injectable()
export class BillingService {
  constructor(
    private readonly cartService: CartService,
    private readonly DiscountService: DiscountService,
    private readonly ItemService: ItemService,
    private readonly finalDiscountService: FinalDiscountService
  ) {}

  async getItemDiscountPrice(cartID) {
    const Cart = await this.cartService.findOne(cartID);
    const [discount] = await this.DiscountService.findOne(Cart.Item.id);
    return BillingUtility.itemDiscount(discount.Item, Cart.quantity, discount.discount, discount.quantity); // return finalPrice , Amount
  }
  async getCartDetails() {
    return await this.cartService.findAll();

  }

  async getCartAmount() {
    const ItemArr = [];
    const CartDetails = await this.getCartDetails();
    console.log('this is our cart sir ', CartDetails);
    let price = 0;
    let amount = 0;
    for (const cartItem of CartDetails) {
      const ItemDetails = cartItem.Item;
      const { finalPrice, Amount } = await this.getItemDiscountPrice(cartItem.id);
      const discount = await this.DiscountService.findOne(cartItem.Item.id);
      console.log('this is the discount', discount);
      const discountString = discount[0].discount + '% on ' + "multiples of " + discount[0].quantity;
      price += finalPrice;
      amount += Amount;
      const flag = !(price == amount);
      ItemArr.push({ ItemDetails, Quantity: cartItem.quantity, DiscountDetails: discountString, DiscountApplicable: flag,
                    Price_after_discount: finalPrice, Price_with_no_discount: Amount});
    }
    console.log(ItemArr)
    return {ItemArr, TOTAL_PRICE: price, TOTAL_AMOUNT: amount};
  }
  async getPromotionalDiscount() {
    const details = await this.getCartAmount();
    const promo = await this.finalDiscountService.getLimit(details.TOTAL_PRICE);
     promo.sort((a, b) => a.limit - b.limit);
    console.log('promo is'+promo)
    const promoCheckOutPrice = (100 - promo[0].discount) / 100 * details.TOTAL_PRICE;
    console.log('hey this is the promo ',promoCheckOutPrice);
    return { details , promoCheckOutPrice }
  }
}

import { Injectable } from '@nestjs/common';
import { FinalDiscount } from '../final-discount/final-discount.entity';
@Injectable()
export class FinalDiscountService {
  constructor() { }
  async create(discountItem) {
    const item = FinalDiscount.create(discountItem);
    return await FinalDiscount.save(item);
  }
  async findAll() {
    return await FinalDiscount.find();
  }
  async findOne(id) {
    return await FinalDiscount.findOne();
  }
  async update(id, list) {
    return await FinalDiscount.update(id, list);
  }
  async delete(id) {
    await FinalDiscount.delete(id);
  }
}

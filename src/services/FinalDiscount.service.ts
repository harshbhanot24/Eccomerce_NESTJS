import { Injectable } from '@nestjs/common';
import { FinalDiscount } from '../final-discount/final-discount.entity';
import { MoreThanOrEqual, LessThanOrEqual, } from 'typeorm';
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
   return await FinalDiscount.delete(id);
  }
  async getLimit(limit) {
    let lim = Math.floor(limit);
    console.log('the limit is',lim)
    let res= await FinalDiscount.find({
       limit: MoreThanOrEqual (4493)
     });
    console.log('the response is ',res);
    return res;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Discount } from '../discount/discount.entity';
import { ItemService } from './item.service';
import { ItemDto as Item } from '../item/item.dto';
@Injectable()
export class DiscountService {
  constructor(private readonly ItemService: ItemService) {}
  async create(discountItem) {
    const item = await this.ItemService.findOne(discountItem.itemId);
    console.log(item);
    discountItem.Item = item;
    const data = Discount.create(discountItem);
    // console.log(data);
    return await Discount.save(data);
  }

  async findAll() {
    return await Discount.find();
  }
  async findOne(id) {
    return await Discount.find({ where: { Item: { id: id } } });
    // return discount for particular item id
  }
  async update(id, list) {
    return await Discount.update(id, list);
  }
  async delete(id) {
    await Discount.delete(id);
  }
}

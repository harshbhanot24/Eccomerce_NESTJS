import { Injectable } from '@nestjs/common';
import { Item } from '../item/item.entity';

@Injectable()
export class ItemService {
constructor() {}
     async create(discountItem) {
    const item = Item.create(discountItem);
    console.log(item)
    return await Item.save(item);
  }

  async findAll() {
    return await Item.find();
  }
  async findOne(id) {
    return await Item.findOne(id);
  }
  async update(id, list) {
    return await Item.update(id, list);
  }
  async delete(id) {
    await Item.delete(id);
}
}

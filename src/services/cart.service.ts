import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../cart/cart.entity';
import { ItemService } from './item.service';

@Injectable()
export class CartService {
constructor(private readonly ItemService: ItemService) {}
   // @InjectRepository(Cart) private readonly cartRepository: Repository<Cart>)

 async create(cartItem) {
  const item = await this.ItemService.findOne(cartItem.itemId);
  cartItem.Item = item;
  const cart = Cart.create(cartItem);
  return await Cart.save(cart);
  }

  async findAll() {
    return await Cart.find();
  }
  async findOne(id) {
    return await Cart.findOne(id);

  }
  async update(id, list) {
    return await Cart.update(id, list);
  }
  async delete(id) {
    await Cart.delete(id);
}
}

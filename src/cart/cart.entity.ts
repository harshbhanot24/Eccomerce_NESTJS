import { OneToOne, JoinColumn, Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Item } from '../item/item.entity';
@Entity()
export class Cart extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Item, {
    eager: true,
})
    @JoinColumn()
    Item: Item; // foreign key

  @Column('int')
  quantity: number;

}

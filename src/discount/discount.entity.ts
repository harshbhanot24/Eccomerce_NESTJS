import { Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import { Item } from '../item/item.entity';

@Entity()
export class Discount extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Item,{
    eager: true
})
    @JoinColumn()
    Item: Item; // foreign key

  @Column('int')
  quantity: number;

  @Column('decimal')
     discount: number;

}

import { OneToOne, JoinColumn, Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Item extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column('int')
  quantity: number;

}

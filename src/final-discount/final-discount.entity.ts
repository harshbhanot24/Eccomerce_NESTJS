import { Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export class FinalDiscount extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  limit: number;

  @Column('float')
     discount: number;
}

import { IsEmail, IsNotEmpty, Contains } from 'class-validator';
export class DiscountDto {
    @IsNotEmpty()
    readonly itemId: number; // to check the item where discount is added
    @IsNotEmpty()
    readonly quantity: number; // on how much quantity
    @IsNotEmpty()
    readonly discount: number; // dicount percent
  }

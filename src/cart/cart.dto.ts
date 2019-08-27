import { IsEmail, IsNotEmpty, Contains } from 'class-validator';
export class CartDto {
    @IsNotEmpty()
    readonly itemId: number;
    @IsNotEmpty()
    readonly quantity: number;
  }


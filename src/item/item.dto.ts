import { IsEmail, IsNotEmpty, Contains } from 'class-validator';
export class ItemDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly price: number;
    @IsNotEmpty()
    readonly quantity: number;
  }


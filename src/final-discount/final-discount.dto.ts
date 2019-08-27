import { IsEmail, IsNotEmpty, Contains } from 'class-validator';
export class finalDiscountDto {
    @IsNotEmpty()
    readonly id: number;
    @IsNotEmpty()
    readonly itemId: number;
    @IsNotEmpty()
    readonly limit: number;
    @IsNotEmpty()
    readonly discount: number;
  }


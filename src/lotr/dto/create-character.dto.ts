import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCharacterDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  age: number;

  @IsInt()
  @IsPositive()
  placeId: number;
}

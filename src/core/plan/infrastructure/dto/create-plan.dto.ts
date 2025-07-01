import { IsDecimal, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePlanDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(1)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @MinLength(1)
  description: string;

  @IsDecimal()
  value: string;
}
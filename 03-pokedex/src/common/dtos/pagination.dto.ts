import { IsOptional, IsPositive, Min } from 'class-validator/types';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @Min(1)
  readonly limit: number;

  @IsOptional()
  @IsPositive()
  readonly page: number;
}

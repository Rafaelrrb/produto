// src/produto/dto/update-product.dto.ts
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateProductDto {
  @ApiPropertyOptional({
    description: 'Nome do produto',
    example: 'Produto X Atualizado',
  })
  @IsString()
  @IsOptional()
  nome?: string;

  @ApiPropertyOptional({
    description: 'Código de barras do produto',
    example: '7891234567891',
  })
  @IsString()
  @IsOptional()
  codigo_barras?: string;

  @ApiPropertyOptional({
    description: 'Quantidade disponível do produto',
    example: 150,
  })
  @IsNumber()
  @IsOptional()
  quantidade?: number;

  @ApiPropertyOptional({
    description: 'Preço do produto',
    example: 19.99,
  })
  @IsNumber()
  @IsOptional()
  preco?: number;
}

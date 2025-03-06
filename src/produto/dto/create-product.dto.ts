// src/produto/dto/create-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Produto X',
  })
  @IsString()
  nome: string;

  @ApiProperty({
    description: 'Código de barras do produto',
    example: '7891234567890',
    required: false,
  })
  @IsString()
  @IsOptional()
  codigo_barras?: string;

  @ApiProperty({
    description: 'Quantidade disponível do produto',
    example: 100,
  })
  @IsNumber()
  quantidade: number;

  @ApiProperty({
    description: 'Preço do produto',
    example: 29.99,
  })
  @IsNumber()
  preco: number;
}

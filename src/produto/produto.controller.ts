import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse({ status: 201, description: 'Produto criado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Falha na validação dos dados.' })
  async create(@Body() createProductDto: CreateProductDto) {
    return this.produtoService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de produtos retornada com sucesso.',
  })
  async findAll() {
    return this.produtoService.findAll();
  }

  @Get(':codigo')
  @ApiOperation({ summary: 'Buscar um produto pelo código' })
  @ApiResponse({ status: 200, description: 'Produto encontrado com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  async findOne(@Param('codigo') codigo: string) {
    return this.produtoService.findOne(codigo);
  }

  @Put(':codigo')
  @ApiOperation({ summary: 'Atualizar um produto existente' })
  @ApiResponse({ status: 200, description: 'Produto atualizado com sucesso.' })
  @ApiResponse({ status: 400, description: 'Falha na atualização do produto.' })
  async update(
    @Param('codigo') codigo: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.produtoService.update(codigo, updateProductDto);
  }

  @Delete(':codigo')
  @ApiOperation({ summary: 'Remover um produto pelo código' })
  @ApiResponse({ status: 200, description: 'Produto removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Produto não encontrado.' })
  async remove(@Param('codigo') codigo: string) {
    return this.produtoService.remove(codigo);
  }
}

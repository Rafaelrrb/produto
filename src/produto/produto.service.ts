import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    nome: string;
    codigo_barras?: string;
    quantidade: number;
    preco: number;
  }) {
    return this.prisma.produto.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.produto.findMany();
  }

  async findOne(codigo: string) {
    return await this.prisma.produto.findUnique({
      where: { codigo },
    });
  }

  async update(
    codigo: string,
    data: {
      nome?: string;
      codigo_barras?: string;
      quantidade?: number;
      preco?: number;
    },
  ) {
    return await this.prisma.produto.update({
      where: { codigo },
      data,
    });
  }

  async remove(codigo: string) {
    return await this.prisma.produto.delete({
      where: { codigo },
    });
  }
}

import { Module } from '@nestjs/common';
import { ProdutoModule } from './produto/produto.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [ProdutoModule],
  providers: [PrismaService],
})
export class AppModule {}

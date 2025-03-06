import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Produtos')
    .setDescription('Documentação da API para gerenciamento de produtos')
    .setVersion('1.0')
    .addTag('produtos') // Tag opcional para agrupar endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Vai disponibilizar a documentação na rota "/api"

  await app.listen(3000);
}
bootstrap();

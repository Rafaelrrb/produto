## Descrição

Este é um projeto backend utilizando **NestJS**, **MariaDB** e **Docker** para criar uma API simples de gerenciamento de uma loja. O projeto utiliza **docker-compose** para facilitar o gerenciamento do ambiente de desenvolvimento, criando containers para o **NestJS** e o **MariaDB**.

## Rodando o Projeto

Para rodar o projeto, basta executar o seguinte comando:

```bash
sudo docker-compose up
```

## O que o Docker-Compose irá fazer

O **docker-compose** irá:

- Criar e iniciar o container do **MariaDB**.
- Criar e iniciar o container do **NestJS**.
- O serviço **NestJS** irá rodar a aplicação após instalar as dependências, rodar as migrações do **Prisma** e iniciar o servidor.
- Após a execução, a API estará acessível no endereço [http://localhost:3000/api].

## Decisões Técnicas

Durante o desenvolvimento, algumas decisões técnicas foram tomadas para garantir um ambiente robusto e escalável:

### Docker Compose

Utilizamos o **docker-compose** para orquestrar os serviços de forma simples e rápida. Isso facilita a criação e gerenciamento de múltiplos containers (**NestJS** e **MariaDB**) e suas configurações.

### Banco de Dados MariaDB

O banco de dados utilizado foi o **MariaDB**, que é uma alternativa eficiente e compatível com **MySQL**, permitindo-nos rodar queries SQL e usar o **Prisma ORM** para facilitar o gerenciamento das migrações.

### Prisma ORM

Utilizamos o **Prisma ORM** para facilitar o trabalho com o banco de dados. O **Prisma** proporciona uma maneira intuitiva e tipada de interagir com o banco de dados, além de gerar migrações de maneira fácil e segura.

### Comando de Inicialização

O comando do serviço **NestJS** foi configurado para garantir que o banco de dados esteja disponível antes de iniciar a aplicação. Isso é feito com um delay de **sleep de 10 segundos** no **docker-compose.yml**, o que espera a inicialização do MariaDB antes de rodar o **NestJS**.

## Exemplos de Requisições e Respostas da API

### 1. **Criar um Novo Produto**

#### Requisição

**Método:** `POST`

**URL:** `/produtos`

**Corpo da Requisição:**

```json
{
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto exemplo",
  "preco": 100.0,
  "quantidade": 50
}
```

### Resposta

**Status:** 201 Created

**Corpo da Resposta:**

```json
{
  "codigo": "12345",
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto exemplo",
  "preco": 100.0,
  "quantidade": 50
}
```

### 2. Listar Todos os Produtos

#### Requisição

**Método:** GET  
**URL:** /produtos

#### Resposta

**Status:** 200 OK

**Corpo da Resposta:**

```json
[
  {
    "codigo": "12345",
    "nome": "Produto Exemplo",
    "descricao": "Descrição do produto exemplo",
    "preco": 100.0,
    "quantidade": 50
  },
  {
    "codigo": "67890",
    "nome": "Produto Exemplo 2",
    "descricao": "Descrição do produto exemplo 2",
    "preco": 150.0,
    "quantidade": 30
  }
]
```

### 3. Buscar um Produto pelo Código

#### Requisição

**Método:** GET  
**URL:** /produtos/:codigo

**Exemplo:**  
**URL:** /produtos/12345

#### Resposta

**Status:** 200 OK

**Corpo da Resposta:**

```json
{
  "codigo": "12345",
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto exemplo",
  "preco": 100.0,
  "quantidade": 50
}
```

### 4. Atualizar um Produto Existente

#### Requisição

**Método:** PUT  
**URL:** /produtos/:codigo

**Exemplo:**  
**URL:** /produtos/12345

**Corpo da Requisição:**

```json
{
  "nome": "Produto Atualizado",
  "descricao": "Descrição do produto atualizado",
  "preco": 120.0,
  "quantidade": 60
}
```

#### Resposta

**Status:** 200 OK

**Corpo da Resposta:**

```json
{
  "codigo": "12345",
  "nome": "Produto Atualizado",
  "descricao": "Descrição do produto atualizado",
  "preco": 120.0,
  "quantidade": 60
}
```

### 5. Remover um Produto pelo Código

#### Requisição

**Método:** DELETE

**URL:** /produtos/:codigo

**Exemplo:**  
**URL:** /produtos/12345

#### Resposta

**Status:** 200 OK

**Corpo da Resposta:**

```json
{
  "codigo": "12345",
  "nome": "Produto Exemplo",
  "descricao": "Descrição do produto exemplo",
  "preco": 100.0,
  "quantidade": 50
}
```

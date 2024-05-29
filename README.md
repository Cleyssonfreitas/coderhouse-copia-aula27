# coderhouse-backend

Projeto feito para desafios das aulas de Coderhouse - Backend, turma 54560.
Aplicativo backend de ecommerce desenvolvido utilizando Node.js, Express, Mongoose, Handlebars e Socket.io.

## Versão em produção

Versão em produção disponível em: [https://coder.iugmali.com/](https://coder.iugmali.com/)

## Instalação

Para instalar as dependências do projeto, execute o comando:
```bash
npm install
```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto.

2. Preencha o arquivo `.env` com as seguintes variáveis de ambiente:

    ```
    PORT=3000                      # Porta na qual o servidor irá rodar
    SESSION_SECRET=                # Chave secreta para a sessão do usuário Execute o comando openssl rand -base64 32 para gerar uma chave secreta.

    DB_HOST=localhost              # Host do banco de dados MongoDB
    DB_PORT=27017                  # Porta do banco de dados MongoDB
    DB_NAME=coderhouse             # Nome do banco de dados MongoDB

    GITHUB_LOGIN_CLIENT_ID=        # ID do cliente para autenticação via GitHub
    GITHUB_LOGIN_CLIENT_SECRET=    # Segredo do cliente para autenticação via GitHub
    GITHUB_LOGIN_CALLBACK_URL=     # URL de retorno para autenticação via GitHub

    MONGODB_CONNECTION=            # String de conexão com o banco de dados MongoDB
    ```


3. Execute o projeto.

## Execução

Para executar o projeto, execute o comando:
```bash
npm start
```
O projeto estará disponível em `http://localhost:3000`.


## API endpoints (com exemplos)

- **Listando Produtos**
  ```
  GET /api/products
  ```

- **Listando produtos limitando o número em 1**
  ```
  GET /api/products?limit=1
  ```

- **Adicionando um Produto**
  ```
  POST /api/products
  Content-Type: application/json
  ```
  ```json
    {
      "title": "Nome do produto",
      "description": "Descrição do produto",
      "code": "codigo-unico",
      "price": 1000,
      "stock": 20,
      "category": "Category 1"
    }
  ```

- **Recuperando um produto pelo id {productId}**
  ```
  GET /api/products/{productId}
  ```

- **Atualizando um ou mais campos de um produto de id {productId}**
  ```
  PUT /api/products/{productId}
  Content-Type: application/json
  ```
  ```json
    {
      "title": "Título do produto atualizado"
    }
  ```

- **Removendo um produto pelo id {productId}**
  ```
  DELETE /api/products/{productId}
  ```

- **Adicionando um carrinho sem produtos**
  ```
  POST /api/carts
  ```

- **Recuperando um carrinho pelo id {cartId}**
  ```
  GET /api/carts/{cartId}
  ```

- **Adicionando um produto de id {productId} ao carrinho de id {cartId}**
  ```
  POST /api/carts/{cartId}/product/{productId}
  ```

- **Adicionando 10 unidades de um produto de id {productId} ao carrinho {cartId}**
  ```
  POST /api/carts/{cartId}/product/{productId}
  Content-Type: application/json
  ```
   ```json
    {
      "quantity": 10
    }
  ```

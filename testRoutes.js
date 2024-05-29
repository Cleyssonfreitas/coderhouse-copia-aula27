import axios from 'axios';

const testRoutes = async () => {
  try {
    // Testando rota de produtos
    let response = await axios.get('http://localhost:3000/api/products');
    console.log('GET /api/products:', response.data);

    // Testando rota de criação de sessão
    response = await axios.post('http://localhost:3000/api/sessions', {
      username: 'testuser',
      password: 'testpassword'
    });
    console.log('POST /api/sessions:', response.data);

    // Testando rota de carrinhos
    response = await axios.get('http://localhost:3000/api/carts');
    console.log('GET /api/carts:', response.data);
  } catch (error) {
    console.error('Erro ao testar as rotas:', error.response ? error.response.data : error.message);
  }
};

testRoutes();
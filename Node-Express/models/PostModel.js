const Database = require('../configs/Database');  // Importando a classe Database

class ProductModel {

  // Método para buscar todos os usuários
  static async findAll() {
    const connection = await Database.getConnection();  // Obtendo a conexão única
    const [rows] = await connection.execute("SELECT * FROM produtos"); // Consulta SQL real
    return rows;
  }

  // Método para buscar usuário por ID
  static async getById(id) {
    const connection = await Database.getConnection();  // Obtendo a conexão única
    const [rows] = await connection.execute("SELECT * FROM produtos WHERE id = ?", [id]);  // Consulta parametrizada
    return rows;
  }

  // Método para criar um novo usuário
  static async create(data) {
    const connection = await Database.getConnection();  // Obtendo a conexão única

    // Desestruturando os dados recebidos
    const { enabled, name, stock, description, price, price_with_discount } = data;

    // Executando a consulta para inserir o novo produto
    const result = await connection.execute(
        "INSERT INTO produtos (enabled, name, stock, description, price, price_with_discount) VALUES (?, ?, ?, ?, ?, ?)",
        [enabled, name, stock, description, price, price_with_discount]
    );

    return result;
}

  // Método para atualizar um usuário
  static async update(id, data) {
    const connection = await Database.getConnection();  // Obtendo a conexão única

    // Desestruturando os dados recebidos
    const { enabled, name, stock, description, price, price_with_discount } = data;

    // Executando a consulta para atualizar os dados do produto
    const result = await connection.execute(
        "UPDATE produtos SET enabled = ?, name = ?, stock = ?, description = ?, price = ?, price_with_discount = ? WHERE id = ?",
        [enabled, name, stock, description, price, price_with_discount, id]
    );
    
    return result;
}
  
  // Método para remover um usuário
  static async remove(id) {
    const connection = await Database.getConnection();  // Obtendo a conexão única
    const result = await connection.execute("DELETE FROM produtos WHERE id = ?", [id]);
    return result;
  }
}

module.exports = ProductModel;

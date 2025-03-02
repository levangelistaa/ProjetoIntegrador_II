const Database = require('../configs/Database');  // Importando a classe Database

class UsersModel {

  // Método para buscar todos os usuários
  static async findAll() {
    const connection = await Database.getConnection();
    const [rows] = await connection.execute("SELECT * FROM usuarios");
    return rows;
  }

  // Método para buscar usuário por ID
  static async getById(id) {
    const connection = await Database.getConnection();
    const [rows] = await connection.execute("SELECT * FROM usuarios WHERE id = ?", [id]);
    return rows;
  }

  // Método para criar um novo usuário
static async create(data) {
    const connection = await Database.getConnection();
  
    // Desestruturando os dados recebidos
    const { name, cpf, email, celular, endereco, bairro, cidade, cep, complemento, senha } = data;
  
    // Executando a consulta para inserir o novo usuário
    const result = await connection.execute(
      "INSERT INTO usuarios (name, cpf, email, celular, endereco, bairro, cidade, cep, complemento, senha) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, cpf, email, celular, endereco, bairro, cidade, cep, complemento, senha]
    );
    return result;
  }
  

// Método para atualizar um usuário
static async update(id, data) {
    const connection = await Database.getConnection();
  
    // Desestruturando os dados recebidos
    const { name, cpf, email, celular, endereco, bairro, cidade, cep, complemento, senha } = data;
  
    // Executando a consulta para atualizar os dados do usuário
    const result = await connection.execute(
      "UPDATE usuarios SET name = ?, cpf = ?, email = ?, celular = ?, endereco = ?, bairro = ?, cidade = ?, cep = ?, complemento = ?, senha = ? WHERE id = ?",
      [name, cpf, email, celular, endereco, bairro, cidade, cep, complemento, senha, id]
    );
    return result;
  }
  
  // Método para remover um usuário
  static async remove(id) {
    const connection = await Database.getConnection();  // Obtendo a conexão única
    const result = await connection.execute("DELETE FROM usuarios WHERE id = ?", [id]);
    return result;
  }
}

module.exports = UsersModel;

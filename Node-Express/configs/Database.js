const mysql = require("mysql2/promise");
require('dotenv').config();

class Database {
  static connection;

  static async getConnection() {
    if (!Database.connection) {
      try {
        // Criando a conexão com o banco de dados
        Database.connection = await mysql.createConnection({
          host: process.env.DB_HOST,
          user: "root",
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        });
        console.log("Conexão com o banco de dados estabelecida.");
      } catch (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        throw err;
      }
    }
    return Database.connection;
  }
}

module.exports = Database;
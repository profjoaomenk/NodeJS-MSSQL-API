module.exports = {
  HOST: "Servidor",
  PORT: "1433",
  USER: "Usuario",
  PASSWORD: "Senha",
  DB: "Banco",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

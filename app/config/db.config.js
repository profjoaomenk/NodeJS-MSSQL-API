module.exports = {
  HOST: "sqlserver-rm9999.database.windows.net",
  PORT: "1433",
  USER: "admsql",
  PASSWORD: "NodeAPI@2tds",
  DB: "dbnode",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports.DB = class MySQL {
  constructor() {
    this.mysql = require("mysql");
    this.details = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      connectionLimit: 10
    };
    this.pool = this.mysql.createPool(this.details)
  }

  sendQuery(query) {
    return new Promise((resolve, reject) => {
      this.pool.query(query, function(err, rows, fields) {
        if (err) throw err;
        resolve(true);
      });
    });
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.pool.query("SELECT * FROM todo", function(error, result, fields){
        resolve(result);
      });
    });
  }

  deleteTodo(id) {
    return new Promise((resolve, reject) => {
      this.pool.query(`DELETE FROM todo WHERE id=${id}`, function(error, result, fields){
        resolve(result);
      });
    });
  }
};

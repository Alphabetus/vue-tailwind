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
        console.log(rows);
      });
    });
  }

  getAll() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-unused-vars
      this.pool.query("SELECT * FROM todo", function(error, result, fields){
        resolve(result);
      });
    });
  }
};

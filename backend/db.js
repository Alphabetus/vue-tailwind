module.exports.DB = class MySQL {
  constructor() {
    this.mysql = require("mysql");
    this.details = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    };
  }

  sendQuery(query) {
    const connection = this.mysql.createConnection(this.details);
    let data;

    connection.connect();
    // eslint-disable-next-line no-unused-vars
    connection.query(query, function(error, results, fields) {
      if (error) throw error;
      data = results;
    });
    connection.end();

    return data;
  }

  getAll() {
    const connection = this.mysql.createConnection(this.details);


    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM todo", function(error, result, fields){
        resolve(result);
      });
    });
  }
};

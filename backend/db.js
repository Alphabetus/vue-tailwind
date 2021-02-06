module.exports.DB = class MySQL {
    constructor() {
        this.mysql = require('mysql');
        this.details = {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        }
    }

    sendQuery(query) {
        const connection = this.mysql.createConnection(this.details);
        let data;

        connection.connect();
        connection.query(query, function (error, results, fields) {
            if (error) throw error;
            data = results;
        })
        connection.end();

        return data;
    }
}
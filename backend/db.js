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

    getTodos() {
        const connection = this.mysql.createConnection(this.details);
        const data = [];
        var resultArray;

        connection.connect();
        console.log("yo")
        connection.query("SELECT * FROM todo", function (error, result, fields) {
            var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
            console.log(1)
            console.log(resultArray)
        });
        console.log(resultArray)
        connection.end();
        return data;
    }
}
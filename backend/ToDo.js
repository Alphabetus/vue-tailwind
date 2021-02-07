module.exports.ToDo = class ToDo {

    constructor() {
        this.MySQL = require("./db.js").DB;
        this.db = new this.MySQL;
    }

    saveTodo(data) {
        const query = `INSERT INTO todo (content) VALUES ('${data}')`;
        this.db.sendQuery(query);
    }

    getTodos() {
        return this.db.getTodos();
    }

    getJsonTodos() {
        //console.log(this.db.getTodos())
        //return this.db.getTodos().toJSON();
    }

    t() {
        console.log("yo")
    }
}
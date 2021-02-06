module.exports.ToDo = class ToDo {

    constructor() {
        this.MySQL = require("./db.js").DB;
        this.db = new this.MySQL;
    }

    t() {
        const m = this.db;
        const q = "INSERT INTO todo (content) VALUES ('test')";
        m.sendQuery(q);
    }
}
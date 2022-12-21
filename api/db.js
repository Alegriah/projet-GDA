const mysql = require("mysql")

const dbConfig = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'gestionnaire_absence'
})

module.exports = dbConfig
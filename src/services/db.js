import mysql from "mysql"

const DB = mysql.createPool({
    host: "localhost",
    database: "auth",
    user: "root",
    password: "",
}, console.log('Pool MYSQL!'))

export { DB }
import mysql from "mysql"

const ConnectionDB = mysql.createPool({
    host: '',
    database: '',
    user: '',
    password: '',
})

export { ConnectionDB }
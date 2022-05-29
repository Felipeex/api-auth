import msql from "mysql"

const dbconnection = msql.createPool({
    user: '',
    password: '',
    host: '',
    database: ''
})

export default { dbconnection }
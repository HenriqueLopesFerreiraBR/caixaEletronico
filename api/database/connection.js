const mysql = require('mysql2/promise');


const connection = mysql.createPool({
    host:"localhost",
    user:"henrique",
    password:"342124",
    database:"bd_caixa"
})



module.exports = connection
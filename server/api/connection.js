const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'pom.h.filess.io',
    user: 'WebsiteKevin2024_foreignour',
    password: '3ac079ce4539376464a0350be3c4635ab0a587f9',
    database: 'WebsiteKevin2024_foreignour',
    port: "3307"
})

module.exports = db
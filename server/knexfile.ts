const path = require('path');
require('dotenv').config();
module.exports = {
    client:'mysql',
    connection:{
        host: process.env.HOST,
        database: process.env.TABLE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    migrations:{
        directory:path.resolve(__dirname, 'src', 'db', 'migrations'),
    },
    useNullAsDefault:true,

}
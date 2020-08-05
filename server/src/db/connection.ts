import knex from 'knex';
require('dotenv').config();

const db = knex({
    client:'mysql',
    
    connection:{
        host: process.env.HOST,
        database: process.env.TABLE,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    },
    useNullAsDefault:true,
});

export default db;

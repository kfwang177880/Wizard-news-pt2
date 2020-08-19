// setting up the node-postgres driver
//const pg = require('pg')
//const postgresUrl = 'postgres://localhost/wnews';

//const client= new pg.Client(postgresUrl);

const { Client } = require('pg')

const client = new Client({
    user: 'kfw372962',
    host: 'localhost',
    database: 'wnews',
    password: '1234',
    port: 5432
})

// connecting to the `postgres` server
client.connect();

// make the client available as a Node module
module.exports = client;

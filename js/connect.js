const { Client } = require('pg');
require('dotenv').config();
myTestString = 'SELECT * FROM chart_list;';

function getDbInfo(myDbString) {
    (async () => {
        const client = new Client({
          host: process.env.PG_HOST,
          port: process.env.PG_PORT,
          user: process.env.PG_USER,
          password: process.env.PG_PASSWORD,
          database: process.env.PG_DATABASE,
          ssl: false,
        });
        await client.connect();
        const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
        const entries = await client.query(myTestString);
        console.log(`Database entries: ${entries.rowCount} row(s)`);
        console.log(Object.keys(entries.rows?.[0]).join('\t'));
        console.log(`${entries.rows.map((r) => Object.values(r).join('\t')).join('\n')}`);
        console.log(res.rows[0].connected);
      
        await client.end();
      })();
}

getDbInfo(myTestString);
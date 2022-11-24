const { Client } = require('pg');
require('dotenv').config();
myTestString = "SELECT * FROM get_weekly_chart(1,'2022-11-05');";

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
        const myEntries = await client.query(myDbString);
        console.log(`Database entries: ${myEntries.rowCount} row(s)`);
        console.log(Object.keys(myEntries.rows?.[0]).join('\t'));
        console.log(`${myEntries.rows.map((r) => Object.values(r).join('\t')).join('\n')}`);
        console.log(res.rows[0].connected);
        console.log(myEntries.rows[3].item_title);
      
        await client.end();
        console.log('Table Created');
        return(myEntries);
    })();
}

function createTable(chart_id, chart_date) {
  console.log('Creating Table');
  let chartRequest = "SELECT * FROM get_weekly_chart(" + chart_id + ",'" + chart_date + "');";
  let chartEntries = getDbInfo(chartRequest);
  console.log('Now lets print out the object');
  console.log(chartEntries);

  //console.log(Object.keys(chartEntries));
  /*let chartTable = document.createElement('table');
  chartTable.classList.add("table", "table-striped");
  let chartHeader = document.createElement('thead');
  let chartHeaderRow = document.createElement('tr');

  for (let chartkey of Object.keys(chartEntries)) {
    let chartHeaderItem = document.createElement('th');
    chartHeaderItem.scope = "col";
    chartHeaderItem.innerHTML = chartKey;
  }*/

 // for (let entry of chartEntries) {

  //}
  console.log('Finished createTable function');
}

createTable(1,'2022-11-05');
//getDbInfo(myTestString);
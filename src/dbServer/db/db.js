import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./dev.db');
const dbQuery = async (sql) => {
  db.connect();
  const results = await db.query(`${sql}`);
  db.close;
  return results;
}

db.connect();
// Write Scripts Here
const sql = ``

// Uncomment this when executing a query. 
// query(sql);
db.close();

export {db, dbQuery}
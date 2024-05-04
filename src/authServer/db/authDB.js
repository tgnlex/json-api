import sqlite3 from 'sqlite3';
const authdb = new sqlite3.Database('./auth.db');
const authQuery = async (sql) => {
  authdb.connect();
  const results = await authdb.query(`${sql}`);
  authdb.close();
  return results;
} 

authdb.connect();
// Write Scripts Here
const sql = ``;

// Uncomment this when executing a query. 
// authQuery(sql);
authdb.close();

export {authdb, authQuery};
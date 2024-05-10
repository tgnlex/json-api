import {adb} from '../db/authDB.js';
const authQuery = async (sql) => {
  try {
    await adb.connect();
    let data = await adb.query(`${sql}`);
    adb.close();  
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }  
} 
export {authQuery};
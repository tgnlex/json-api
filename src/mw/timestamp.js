import {log} from '../lib/base.js';
import {generateTimestamp} from '../lib/datetime.js';
const reqTime = (req, res, next) => {
  const timestamp = generateTimestamp();
  res.cookie('date', `${timestamp}`);
  logTimestamp();
  next();   
}

export default reqTime;
import {log} from '../lib/functions/base.js';
import {generateTimestamp} from '../lib/functions/datetime.js';
const reqTime = (req, res, next) => {
  const timestamp = generateTimestamp();
  res.cookie('date', `${timestamp}`);
  logTimestamp();
  next();   
}

export default reqTime;
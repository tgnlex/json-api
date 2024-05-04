import {log} from '../lib/base.js';
import {timestamp, logTimestamp} from '../lib/datetime.js';
const reqTime = (req, res, next) => {
  const current = timestamp();
  res.cookie('date', `${current}`);
  logTimestamp();
  next();   
}

export default reqTime;
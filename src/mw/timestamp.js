import {log, datetime} from '../lib/base.js';
const timestamp = datetime();
const reqTime = (req, res, next) => {
  res.cookie('date', `${timestamp}`);
  log(timestamp);
  next();   
}

export default reqTime;
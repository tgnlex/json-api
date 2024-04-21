import reqTime from './timestamp.js';
import {log} from './functions/base.js';
const reqLogger = (req, res, next) => {
  reqTime();
  log(req);
  next();
}

export default reqLogger;
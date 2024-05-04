import {timestamp} from '../functions/datetime.js';

const serverStatus = {
  uptime: process.uptime(),
  status: "Running...",
  message: 'Ok',
  timestamp: timestamp()
}

export {serverStatus};
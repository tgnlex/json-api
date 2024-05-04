import {log} from './base.js';
const dt = new Date();

const getDate = () => {
  const date = dt.toLocaleDateString();
  log(date)
  return date;
}
const getTime = () => {
  const time = dt.toLocaleTimeString();
  log(time)
  return time;
}
const timestamp = () => {
  const timestamp = dt.toLocaleString();
  log(timestamp)
  return timestamp;
}


export {dt, getDate, getTime, timestamp}




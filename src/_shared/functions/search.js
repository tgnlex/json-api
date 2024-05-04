import {log, json} from './functions/base'; 

const stringSearch = (data, field, query) => {
  const array = json(data);
  for(let i = 0; i < array.data.length; i++) {
    if (array.data[i][`${field}`]=== query) {
      log('api', array.data[i]);
      return array.data[i];
    }
  }      
  log('api', `No ${field} with the value of ${query} was found.`);
  return 'Not Found';
}; 

const idSearch = (data, id) => {
  const arr = json(data);
  if (arr.data[id]) {
    return arr.data[id];
  } else {
    return "Not Found"
  }
}
export {idSearch, stringSearch};
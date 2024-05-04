import {stringSearch, idSearch} from '../functions/search.js';
import {cleanStr} from '../_lib/functions/string.js';
const searchHandler = (searchType, data, field, query) =>{
  if (searchType == "str"
  ) {
    const cleanQuery = cleanStr(query);
    const result = stringSearch(data, field, cleanQuery);
    return result;
  } else if (searchType ==  "id") {
    const cleanQuery = Number(query)
    const result = idSearch(data, cleanQuery)
    return result;   
  }
}

export { searchHandler }
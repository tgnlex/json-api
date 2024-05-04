import {stringSearch, idSearch} from '../functions/search.js';
import {cleanStr} from '../functions/string.js';
const searchHandler = (searchType, data, field, query, res) =>{
  if (searchType == "str"
  ) {
    const cleanQuery = cleanStr(query);
    const result = stringSearch(data, field, cleanQuery);
    res.send(result)
  } else if (searchType ==  "id") {
    const cleanQuery = Number(query)
    const result = idSearch(data, cleanQuery)
    res.send(result)   
  }
}

export { searchHandler }
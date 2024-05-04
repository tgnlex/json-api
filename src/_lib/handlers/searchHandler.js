const searchHandler = (req, res, next, searchType, data, field, query) =>{
  if (searchType == "str"
  ) {
    const cleanQuery = cleanStr(query);
    const result = stringSearch(data, field, cleanQuery);
    res.send(result);
  } else if (searchType ==  "id") {
    
    const result = idSearch(data, query)
    
  }
}

export { searchHandler }
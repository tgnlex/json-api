import express from 'express';
import fs from 'fs';
import {jsonSearch, cleanQuery} from '../lib/functions/search.js';
const json = express.Router();

const langs = fs.readFileSync('src/data/langs.json', 'UTF-8');





json.get('/langs', (req, res, next) => {
  res.json(langs);
});

json.get('/langs/names/:name/', (req, res, next) => {
  const query = cleanQuery(req.params.name);
  const data = jsonSearch(langs, 'name', query);
  res.json(data);
});

json.get('/langs/ids/:id', (req, res, next) => {
  const arr = JSON.parse(langs);
  const query = req.params.id;
  const id = Number(query);
  if (arr.data[id]) {
    res.json(arr.data[id]);
  } else {
    res.send("Not found")
  }

})

const jsonRouter = json;
export default jsonRouter;
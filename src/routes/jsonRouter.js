import express from 'express';
import fs from 'fs';
import {jsonSearch, cleanQuery, idSearch} from '../lib/functions/search.js';
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
  const id = Number(req.params.id);
  idSearch(langs, id);
})

const jsonRouter = json;
export default jsonRouter;
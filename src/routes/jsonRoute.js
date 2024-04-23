import express from 'express';
import fs from 'fs';
import {searchByString, cleanQuery, idSearch} from '../lib/functions/search.js';
const api = express.Router();
const langs = fs.readFileSync('src/data/langs.json', 'UTF-8');

jsonRt.get('/langs', (req, res, next) => {
  res.json(langs);
});

jsonRt.get('/langs/names/:name/', (req, res, next) => {
  const query = cleanQuery(req.params.name);
  const data = searchByString(langs, 'name', query);
  res.json(data);
});

jsonRt.get('/langs/ids/:id', (req, res, next) => {  
  const id = Number(req.params.id);
  idSearch(langs, id);
})

export default jsonRt;
import express from 'express';
import fs from 'fs';
import {searchByString, cleanQuery, idSearch} from '../lib/search.js';
const router = express.Router();
const langs = fs.readFileSync('/data/langs.json', 'UTF-8');



router.get('/', (req, res, next) => {
  res.json(langs);
});

router.get('/names/:name/', (req, res, next) => {
  const query = cleanQuery(req.params.name);
  const data = searchByString(langs, 'name', query);
  res.json(data);
});

router.get('/ids/:id', (req, res, next) => {  
  const id = Number(req.params.id);
  idSearch(langs, id);
})
const langRouter = router;
export default langRouter;
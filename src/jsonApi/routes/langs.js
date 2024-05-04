import express from 'express';
import fs from 'fs';
import {cleanStr} from "../lib/string";
import {searchHandler} from '../_lib/handlers/searchHandler.js';
const router = express.Router();
const langs = fs.readFileSync('/data/langs.json', 'UTF-8');



router.get('/', (req, res, next) => {
  res.json(langs);
});

router.get('/names/:name/', searchHandler(req, res, 'str', langs, 'name', req.params.name)));
  

router.get('/ids/:id', (req, res, next) => {  
  const id = Number(req.params.id);
  idSearch(langs, id);
})
const langRouter = router;
export default langRouter;
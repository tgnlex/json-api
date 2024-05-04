import express from 'express';
import fs from 'fs';
import {cleanStr} from "../lib/string";
import {searchHandler} from '../_lib/handlers/searchHandler.js';
const router = express.Router();
const langs = fs.readFileSync('/data/langs.json', 'UTF-8');



router.get('/langs', (req, res, next) => {
  res.json(langs);
});

router.get('/langs/name/:name', req, res, searchHandler('str', langs, 'name', req.params.name, res));
  

router.get('/langs/id/:id', req, res, searchHandler('id', langs, req.params.id, res))
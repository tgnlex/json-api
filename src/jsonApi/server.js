import express from 'express';
import cors from 'cors';
import {log} from '../_shared/functions/base.js';
import {langsRouter} from './routes/langs.js';
import {reqLogger} from '../_shared/middleware/logger.js';
const api = express();
// Builtin middleware
api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cors())
// Custom Middleware
api.use(reqLogger())
// Routers
api.use('/json/', langsRouter);
api.use('/json/', statusRouter);

api.get('/', (req, res, next) => {
  res.redirect('/json');
});

api.get('/json', (req, res, next) => {
  log('json',  " " + req)
  res.json({message: 'JSON API ROOT PATH.'})
});


const jsonApi = api;
export default jsonApi;
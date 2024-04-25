import express from 'express';
import cors from 'cors';
import {langsRouter} from './routes/langs.js';
import {reqLogger} from '../middleware/reqLogger.js';
const api = express();
const clients = [];
//middleware
api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use(cors())
api.use(reqLogger())

api.use('/langs', langsRouter);
api.use('/status', statusRouter);
api.get('/', (req, res, next) => {
  res.send('JSON API ROOT PATH.')
})


const jsonApi = api;
export {clients};
export default jsonApi;
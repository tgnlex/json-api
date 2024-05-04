import express from 'express';
import {createRouter} from './routers/create';
const api = express();


api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use('/create', elementRouter);


const htxApi = api;
export default htxApi;
import express from 'express';
import {createRouter} from './routers/create';
const api = express();


api.use(express.json());
api.use(express.urlencoded({extended: true}));
api.use('/create', createRouter);


const htApi = api;
export default htApi;
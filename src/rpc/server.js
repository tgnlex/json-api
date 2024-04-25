import express from 'express';
import jayson from 'jayson';
import {calculatorService} from './services/calculator.js';
import {greet, status} from './actions.js';

const services = express();

services.use(express.json());
services.use(express.urlencoded());
services.use('/calculator', calculatorService);

services.post('/', jayson.server(greet).middleware());
services.post('/status', jayson.server(status).middleware());


export default services;
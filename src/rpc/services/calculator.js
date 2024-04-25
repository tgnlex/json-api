import express from 'express';
import jayson from 'jayson';
import {add, subtract, multiply, divide} from '../actions';
const calc = express.Router();

calc.post('/add', jayson.server(add).middleware());
calc.post('/subtract', jayson.server(subtract).middleware());
calc.post('/multiply', jayson.server(multiply).middleware());
calc.post('/divide', jayson.server(divide).middleware());


const calculatorService = calc;
export {calculatorService};
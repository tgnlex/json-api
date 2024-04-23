import express from 'express';
import cors from 'cors';
import {authRouter, jsonRouter} from './routes/_exporter.js';
const app = express();
const clients = [];

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors())
app.use('/auth', authRouter);
app.use('/json', jsonRouter);

app.get('/', (req, res, next) => {
  res.send('Welcome To My API!')
})

app.get('/status', (req, res, next) => res.json({clients: clients.length}));



export default app;
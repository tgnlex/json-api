import express from 'express';
import fs from 'fs';
const app = express();
const clients = [];




app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res, next) => {
  res.send('Welcome To My API!')
})

app.get('/status', (req, res, next) => res.json({clients: clients.length}));


export default app;
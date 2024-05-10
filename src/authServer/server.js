import express from 'express';
import {readFileSync} from 'fs';
const auth = express;

auth.use(express.json);
auth.use(express.urlencoded); 

const rawfile = await readfile('./data/serverSchema.json')
const serverScheme = json.stringify(rawfile);


auth.get('/', (req, res, next) => {
  log('auth', 'Redirecting user to server root: "/auth"...'
  )
});

auth.get('/auth', (req, res, next) => {
  log('auth') 
  res.status(200).json(serverScheme)
})



auth.post('/auth/register', register)
function register(req, res, next) {

  next()
}

auth.post('/auth/login', (req, res, next) => {
console.log(req);
})

auth.post('/auth/admin', (req, res, next) => {
  console.log(req);
}) 
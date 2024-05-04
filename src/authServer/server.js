import express from 'express';
const auth = express;

auth.use(express.json);
auth.use(express.urlencoded); 

auth.get('/', (req, res, next) => {
  log('auth', 'Redirecting user to server root: "/auth"...'
  )
});

auth.get('/auth', (req, res, next) => {
  log('auth') 
  res.send('Location: Auth server root.')
})

auth.post('/auth/register', (req, res, next) => {
console.log(req);
})
auth.post('/auth/login', (req, res, next) => {
console.log(req);
})
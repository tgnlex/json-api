import express from 'express';
const authRouter = express.Router()
let auth = authRouter;
const login = (req, res, next) => {
  res.send('POST hit endpoint: /auth/login');  
  log('Login Auth Route')
  next();
}
const register = (req, res, next) => {
  res.send('POST hit endpoint: /auth/register')  
  log('Registration Auth Route')
  next();
}

auth.get('/login', login)
auth.get('/register', register)

export default authRouter;
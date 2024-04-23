import express from 'express';
const auth = express.Router()

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

const authRouter = auth;
export default authRouter;
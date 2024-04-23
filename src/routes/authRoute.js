import express from 'express';
const authRt = express.Router()

const login = (req, res, next) => {
  res.send('POST hit endpoint: /auth/login');  
  log('auth', 'Login Auth Route')
  next();
}
const register = (req, res, next) => {
  res.send('POST hit endpoint: /auth/register')  
  log('auth', 'Registration Auth Route')
  next();
}

authRt.get('/login', login)
authRt.get('/register', register)

export default authRt;
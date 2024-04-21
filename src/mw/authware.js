import {log} from '../lib/base.js';
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

export {login, register};
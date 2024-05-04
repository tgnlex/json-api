import {UserList} from '../../users.js';
import { registrationError } from '../../_lib/objects/errors.js';
const registerHandler = async (req, res, next) => {
  const id = UserList.length + 1;
  const {username, email, password} = req.body;
  // db.query('SELECT email FROM users WHERE email = ?', [email], async (error, res) => {})
  const newUser = await createUser(id, username, email, password);
  if (newUser) {
    UserList.push(newUser);
    res.status(200).send('Account Created Successfully!')
    next();
  } 
  if (!newUser) { 
    let error = registrationError;
    res.status(error.status).send(error.message);
    next();
  }
}

export {registerHandler};
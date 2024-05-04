import { UserList } from "../../users.js"
import User from '../classes/User.js';
const createUser = (id, username, password, email ) => {
  const user = new User(id, username, password, email);
  UserList.push(user);
  return user;
}

export {createUser};
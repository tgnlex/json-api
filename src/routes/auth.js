import {login, register} from '../mw/authware.js';
const authRouter = express.Router()
let auth = authRouter;

auth.post('/login', login())

auth.post('/register', register())

export default authRouter;
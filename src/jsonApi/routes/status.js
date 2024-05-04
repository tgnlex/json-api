const router = express.Router();
import {clients} from '../server.js';
import {serverStatus} from '../../_lib/objects/status.js'



router.get('/status/health', (req, res, next) =>{
  try {
    res.send(serverStatus);
  } catch (error) {
    serverStatus.message = error;
    res.status(503).send()
  }
});

router.get('/status/clients', (req, res, next) => {
  res.json({clients: clients.length});
});

router.get('/status/teapot', (req, res, next) => {
  res.status(418).send();
})


export {router};
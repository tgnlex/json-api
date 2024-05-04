import {log} from './_lib/base.js';
import htxApi from './htxApi/server.js';
import jsonApi from './jsonApi/server.js';
import app from './webserver/server.js';
import {createServer} from 'http';
const WEB_PORT = 3000;
const JSON_PORT = 3100;
const HTX_PORT = 3200;
const WS_PORT = 4000;
const DB_PORT = 5000;
const webServer = createServer(app);
const jsonServer = createServer(jsonApi);
const htxServer = createServer(htxApi);

const startWEB = () => {
  const PORT = WEB_PORT;
  webServer.listen(PORT, () => {
    log("http", `Listenin on http://localhost:${PORT}`)
  })
} 

const startJSON = () => {
  const PORT = 4100;
  jsonServer.listen(PORT, () => {
  log("json", `Listening on http://localhost:${PORT}`);
});
}

const startHtx = () => {
  const PORT = 4200;
  htxServer.listen(PORT, () => {
    log("htx", `Listening on http://localhost:${PORT}`);
  })
}


/* const startWS = () => {
  const PORT = 5000;
}
*/


const main = () => {
  startWEB();
  //startWS();
  startJSON();
  startHTX();
}
export {main, startHTX, startJSON, startWEB}
main();
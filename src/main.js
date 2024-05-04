import {log} from './_shared/_lib/base.js';
import htxApi from './htxApi/server.js';
import jsonApi from './jsonApi/server.js';
import app from './webserver/server.js';
import {createServer} from 'http';
const HTTP_PORT = 3000;
const JSON_API_PORT = 3100;
const HTX_API_PORT = 3200;
const WS_PORT = 4000;
const DB_PORT = 5000;
const httpServer = createServer(app);
const jsonServer = createServer(jsonApi);
const htxServer = createServer(htxApi);
//const wsServer = createServer(socket);
const startHTTP = () => {
  const PORT = HTTP_PORT;
  httpServer.listen(PORT, () => {
    log("http", `Listenin on http://localhost:${PORT}`)
  })
} 

const startJSON = () => {
  const PORT = JSON_API_PORT;
  jsonServer.listen(PORT, () => {
  log("json", `Listening on http://localhost:${PORT}`);
});
}

const startHTX = () => {
  const PORT = HTX_API_PORT;
  htxServer.listen(PORT, () => {
    log("htx", `Listening on http://localhost:${PORT}`);
  })
}


/* const startWS = () => {
  const PORT = 5000;
}
*/


const main = () => {
  startHTTP();
  //startWS();
  startJSON();
  startHTX();
}
main();

const startALL = main;
export {startHTX, startJSON, startHTTP, startALL}
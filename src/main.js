import {createServer} from 'http';
import htxApi from './htxApi/server.js';
import jsonApi from './jsonApi/server.js';
import webApp from './webserver/server.js';
import database from './dbServer/server.js';
import {log} from './_shared/_lib/base.js';
import {HTTP_PORT, JSON_API_PORT, HTX_API_PORT, DB_PORT, WS_PORT, } from './ports.js'
const httpServer = createServer(webApp);
const dbServer = createServer(database);
const jsonServer = createServer(jsonApi);
const htxServer = createServer(htxApi);
//const wsServer = createServer(socket);
const startHTTP = () => {
  const PORT = HTTP_PORT;
  httpServer.listen(PORT, () => {
    log("http", `Listenin on http://localhost:${PORT}`)
  })
} 

const startSQL = () => {
  const PORT = DB_PORT; 
  dbServer.listen(PORT, () => {
    log('sql', `Listening on http://localhost:${PORT}`)
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
  startSQL();
  //startWS();
  startJSON();
  startHTX();
}
main();

const startALL = main;
export {startHTX, startJSON, startSQL, startHTTP, startALL}
import {log} from './_lib/base.js';
import htxApi from './htxApi/server.js';
import jsonApi from './jsonApi/server.js';
import app from './webserver/server.js';
import {createServer} from 'http';

const httpServer = createServer(services);
const jsonServer = createServer(jsonApi);
const htxServer = createServer(htxApi);


const startJSON = () => {
  const PORT = 4000;
  jsonServer.listen(PORT, () => {
  log("json api", `Listening on http://localhost:${PORT}`);
});
};

const startHtx = () => {
  const PORT = 4100;
  htServer.listen(PORT, () => {
    log("ht api", `Listening on http://localhost:${PORT}`);
  })
}

const startHttp = () => {
  const PORT = 4200;
  rpcServer.listen(PORT, () => {
    log("jrpc", `Listenin on http://localhost:${PORT}`)
  })
} 




const main = () => {
  startHT();
  startJSON();
  startRPC();

}
export {main, startHT, startJSON, startRPC}
main();
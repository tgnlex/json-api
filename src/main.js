import {log} from './_lib/base.js';
import htApi from './htApi/server.js';
import jsonApi from './jsonApi/server.js';
import services from './rpc/server.js';
import {createServer} from 'http';

const rpcServer = createServer(services);
const jsonServer = createServer(jsonApi);
const htServer = createServer(htApi);


const startJSON = () => {
  const PORT = 4000;
  jsonServer.listen(PORT, () => {
  log("json api", `Listening on http://localhost:${PORT}`);
});
};

const startHT = () => {
  const PORT = 4100;
  htServer.listen(PORT, () => {
    log("ht api", `Listening on http://localhost:${PORT}`);
  })
}

const startRPC = () => {
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
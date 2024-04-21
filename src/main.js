import {app} from 'api';
import {createServer} from 'http';
const PORT = 4000;
const server = createServer(app);


server.listen(PORT, () => {
  console.log(`[API]: Listening on http://localhost:${PORT}`);
});


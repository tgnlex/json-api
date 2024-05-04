import express from 'express';
const app = express;

app.use(express.json);
app.use(express.urlencoded); 


app.get('/', (req, res, next) => {
  console.log(req);
  const msg1 = "Location: Sql server root. \n";
  const msg2 = "Description: allows the other servers to interop with an embedded database(s) \n"
  res.send(msg1, msg2);
});

const database = app;
export default database;
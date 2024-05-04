import express from 'express';
const app = express;

app.use(express.json);
app.use(express.urlencoded); 


app.get('/', (req, res, next) => {
  console.log(req);
  const msg1 = "Path: localhost:"
  const msg2 = "Location: Sql server root. ";
  const msg3 = "Description: allows the other servers to interop with an embedded database(s)"
  res.send()
});

const database = app;
export default database;
const errorHandler = (err, req, res, next, status) => {
  log('server', `Status Code: ${status}`)
  log('server', `Error: ${err.message}`);
  res.status(status).send(err.message);
}
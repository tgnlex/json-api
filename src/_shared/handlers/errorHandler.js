const errorHandler = (error, req, res, next, status) => {
  error = error || new Error('An error occurred');
  status = status || 418;
  log('server', `Status Code: ${status}`)
  log('server', `Error: ${error.message}`);
  res.status(status).send(error.message);
}
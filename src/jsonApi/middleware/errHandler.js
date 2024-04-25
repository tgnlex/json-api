const errorHandler = (err, req, res, next) => {
  let status = res.status(418);
  res.status(418).send(err.message);
  log(`Status: ${status}`)
  log(`Error: ${err.message}`);
}
import errorHandler from './errHandler.js'
import reqLogger from '../middleware/logger.js'
const viewHandler = (req, res, next, view, opts) => {
  reqLogger(req);
  if (view) {
    if (opts) {
      res.render(view, opts)
    } else {
      res.render(view)
    } 
  } else  {
    let e = ("[HTTP]: ERROR! No view was passed to view handler.")
    errorHandler(e, 404);
  }
}
export { viewHandler }
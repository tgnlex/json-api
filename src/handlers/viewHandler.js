import reqLogger from '../_mw/logger'
const viewHandler = (req, res, next, view, opts) => {
  reqLogger(req);
  if (view) {
  if (opts) {
    res.render(view, opts)
  } else {
    res.render(view)
  }
  } else  {
    console.error("[HTTP]: No view was passed to view handler.")
  }
}
export { viewHandler }
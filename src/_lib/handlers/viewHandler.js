import reqLogger from '../_mw/reqLogger'
const viewHandler = (req, res, next, , opts) => {
  reqLogger(req);
  if (opts) {
    res.render(path, opts)
  } else {
    res.render(path)
  }
}
export { viewHandler }
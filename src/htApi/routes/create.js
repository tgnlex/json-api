import express from 'express';
import fs from 'fs';

const router = express.Router();

router.post('/create/:element', (req, res, next) => {
  const type = req.params.element;
  let val = req.body.text;
  const element = genElementStr(type, value);
  res.send(element)
})
router.get('/create/p/:text', (req, res, next) => {
  let text = req.params.text;
  res.send(`<p>${text}</p>`);
})
const createRouter = router;
export {createRouter};
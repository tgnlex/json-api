const noop = () => {
  return;
}
const read = (data) => {
  return data;
}
const log = (data) => {
  return console.log(data)
}

const datetime = () => {
  const date = new Date();
  const dt = date.toLocaleString();
  return dt;
}
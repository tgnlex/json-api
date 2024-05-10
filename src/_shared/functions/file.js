import fs from 'fs';

function readfile(file) {
  try { 
    const {data, err} = fs.readFileSync(file);
    if (data) {
      console.log(data);
      return data;
    }
    if (err) {
      console.log(err);
      return err;
    }
    return data;
  } catch (error) {
    console.log(error);
    throw err;
  }
}

export {readfile};

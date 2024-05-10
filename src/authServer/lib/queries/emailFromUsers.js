const getUserEmails = async (email) => {
  let stmt = `SELECT email FROM users WHERE email = ?`;
  await authQuery(`${stmt}`, [email], async(error, data) => {
  if (error) {
    console.log(error)
    return error;
  } 
    console.log(data);
    return data;
  })
}
  export {getUserEmails};
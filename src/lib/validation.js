const cookieValidator = async (cookies) => {
  try {
    await externallyValidateCookie(cookies);
  } catch {
    throw cookieError;
  }
};
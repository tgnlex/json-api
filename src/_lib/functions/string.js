const cleanStr = (raw) => {
  const c1 = raw.charAt(0).toUpperCase();
  const c2 = raw.slice(1).toLowerCase();
  const query = c1 + c2;
  return query;
}

export {cleanStr}
export const objectComparison = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  let key;

  for (let i = 0; i < Object.keys(obj1).length; i++) {
    key = Object.keys(obj1)[i];
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

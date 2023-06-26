
function saveToDb(key, value) {
  if (value) {
    localStorage.setItem(key, JSON.stringify(value));
  } else {
    localStorage.removeItem(key);
  }
}

function checkFromDb(key) {
  const value = localStorage.getItem(key);
  if (value !== null) {
    return JSON.parse(value);
  }
  return false;
}

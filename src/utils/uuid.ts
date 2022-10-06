export function generateUUID() {
  const uuidArr = [];
  for (let i = 0; i < 32; i++) {
    uuidArr.push(Math.floor(Math.random() * 16).toString(16));
  }
  return uuidArr.join("");
}

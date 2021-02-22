let map = new Map([
  ["fruit", "apple"],
  ["number", 1],
  ["vegetable", "potato"],
  ["boolean", true],
  ["job", "programmer"]
]);

// «Ключ — Х, значение — Y».
for (let key of map.keys()) {
  // console.log(key);
  // console.log(map.get(key));
  console.log(`Ключ - ${key}, значение - ${map.get(key)}`)
}
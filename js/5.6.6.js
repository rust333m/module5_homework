let arr = [5, 4, 2, 3, 57, 7, 5];
let result = true;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j])
      result = false;
  }
}
console.log(result)
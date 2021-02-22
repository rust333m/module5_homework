let arr = [5, 0, 4, 2, 3, 57, null, 0, 0, 7, 5, 0, 6, 8, 3, undefined];
let even = 0;
let odd = 0;
let others = 0;
let zeros = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == null || arr[i] == undefined) {
    others += 1
  }
  else if (arr[i] == 0) {
    zeros += 1;
  }
  else if (arr[i] % 2 == 0) {
    even += 1;
  }

  else {
    odd += 1;
  }
}
// console.log(even + " - even numbers");
// console.log(odd + " - odd numbers");
// console.log(zeros + " - zero numbers")
// console.log(others + " - number of other types");
console.log(`${even} - even number, ${odd} - odd numbers, ${zeros} - zeros, ${others} - number of other types`);
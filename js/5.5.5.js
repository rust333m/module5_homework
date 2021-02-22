let arr = [5, 4, 2, 3, 57, 7];
// console.log("Array length - " + arr.length);
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let result = arr.map(function (item, index, array) {

//   for (index = 0; index < array.length; index++) {
//     console.log(item)
//   }
// })
console.log("Array Length - " + arr.length)
arr.forEach(function (item, index, array) {
  console.log(item);
})
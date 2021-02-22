function ReverseWord(str) {

  str = str.split("");

  str = str.reverse();
  let result = str.join("");
  return result;
}
console.log(ReverseWord("Hello"));
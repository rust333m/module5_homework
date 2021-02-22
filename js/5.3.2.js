let x = true
let type = typeof x

switch (typeof x) {
  case "number":
    console.log("X - is Number");
    break;
  case "string":
    console.log("X - is String");
    break;
  case "boolean":
    console.log("X - is Logical type");
    break;
  default:
    console.log("X ne opredelen");
}
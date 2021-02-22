let value = +prompt("Please enter a number");
if (typeof value !== 'number' || isNaN(value)) {
  alert("Упс, кажется, вы ошиблись");
}
else {
  if (value % 2 == 0) {
    alert("четное")
  }
  else {
    alert("нечетное")
  }
}
document.getElementById("output").style.visibility = "hidden";

document.getElementById("cupSize").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let coffeeInput = e.target.value;
  // calculate amount of coffee beans based on user's desired cup size
  document.getElementById("beansOutput").innerHTML = Math.round(coffeeInput * 1.625);
  // calculate amount of water used for bloom, converted to grams
  document.getElementById("bloomOutput").innerHTML = Math.round((coffeeInput * 29.57) / 7);
  // calculate amount of water used for remaining pour, convered to grams
  document.getElementById("pourOutput").innerHTML = Math.round(coffeeInput * 29.574 - (coffeeInput * 29.57) / 7);
  // hide output if user input is deleted
  if (cupSize.value.length == 0) {
    document.getElementById("output").style.visibility = "hidden";
  }
});

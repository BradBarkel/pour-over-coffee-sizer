document.getElementById("output").style.visibility = "hidden";

document.getElementById("cupSize").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let coffeeInput = e.target.value;
  document.getElementById("beansOutput").innerHTML = Math.round(coffeeInput * 1.625);
  document.getElementById("bloomOutput").innerHTML = Math.round((coffeeInput * 29.57) / 7);
  document.getElementById("pourOutput").innerHTML = Math.round(coffeeInput * 29.574 - (coffeeInput * 29.57) / 7);
});

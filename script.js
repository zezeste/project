var count = 0;

var number = document.getElementById("number");
var minus = document.getElementById("minus");
var reset = document.getElementById("reset");
var plus = document.getElementById("plus");

// Show the number and change its color
function show() {
  number.textContent = count;

  if (count > 0) {
    number.style.color = "green";
  } else if (count < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
}

minus.onclick = function () {
  count = count - 1;
  show();
};

plus.onclick = function () {
  count = count + 1;
  show();
};

reset.onclick = function () {
  count = 0;
  show();
};
var numSquares = 6;
var colors = randomColor(numSquares);

var boxes = document.querySelectorAll(".square");
var displ = document.querySelector("#disp");
var res = document.querySelector("#result");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var neededColor = wantedColor();

easyBtn.addEventListener("click", function () {
  easyBtn.classList.add("current");
  hardBtn.classList.remove("current");
  numSquares = 3;
  colors = randomColor(numSquares);
  neededColor = wantedColor();

  displ.textContent = neededColor;
  for (var i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.backgroundColor = colors[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("current");
  hardBtn.classList.add("current");
  numSquares = 6;
  colors = randomColor(numSquares);
  neededColor = wantedColor();
  displ.textContent = neededColor;
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "block";
    boxes[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

reset.addEventListener("click", function () {
  colors = randomColor(numSquares);
  neededColor = wantedColor();
  displ.textContent = neededColor;
  this.textContent = "New Colors";
  res.textContent = " ";
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "steelblue";
});

displ.textContent = neededColor;

for (var i = 0; i < boxes.length; i++) {
  boxes[i].style.backgroundColor = colors[i];
  boxes[i].addEventListener("click", function () {
    var selectedColor = this.style.backgroundColor;
    if (selectedColor === neededColor) {
      res.textContent = "Correct";
      reset.textContent = "Play Again??";
      allsame(selectedColor);
      h1.style.backgroundColor = selectedColor;
    } else {
      this.style.backgroundColor = "#232323";
      res.textContent = "Try Again!!";
    }
  });
}

function allsame(color) {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = color;
  }
}

function wantedColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(generateColor());
  }
  return arr;
}

function generateColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

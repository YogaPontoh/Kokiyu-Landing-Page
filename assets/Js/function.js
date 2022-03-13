const resep_right = document.getElementById("card-1-js-right");
const resep_left = document.getElementById("card-1-js-left");
const cerita_right = document.getElementById("card-3-js-right");
const cerita_left = document.getElementById("card-3-js-left");

resep_right.addEventListener("click", function () {
  document.getElementById("card-1-js").scrollLeft -= 100;
});

resep_left.addEventListener("click", function () {
  document.getElementById("card-1-js").scrollLeft += 100;
});

cerita_right.addEventListener("click", function () {
  document.getElementById("card-3-js").scrollLeft -= 300;
});

cerita_left.addEventListener("click", function () {
  document.getElementById("card-3-js").scrollLeft += 100;
});


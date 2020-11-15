var randomNumber1 = Math.floor(Math.random() * 10) + 1;
var image1 = document.querySelectorAll("video")[0];
image1.setAttribute("src", "videos/songs/video" + randomNumber1 + ".mp4");

if (randomNumber1 == 1) {
  document.querySelector(".banner h2").innerHTML = "eminem";
} else if (randomNumber1 == 2) {
  document.querySelector(".banner h2").innerHTML = "Dua-lipa";
} else if (randomNumber1 == 3) {
  document.querySelector(".banner h2").innerHTML = "Marshmello";
} else if (randomNumber1 == 4) {
  document.querySelector(".banner h2").innerHTML = "ShawnMendes";
} else if (randomNumber1 == 5) {
  document.querySelector(".banner h2").innerHTML = "Coldplay";
} else if (randomNumber1 == 6) {
  document.querySelector(".banner h2").innerHTML = "21-pilots";
} else if (randomNumber1 == 7) {
  document.querySelector(".banner h2").innerHTML = "Maroon5";
} else if (randomNumber1 == 8) {
  document.querySelector(".banner h2").innerHTML = "Pharrellwilliams";
} else if (randomNumber1 == 9) {
  document.querySelector(".banner h2").innerHTML = "B T S";
} else {
  document.querySelector(".banner h2").innerHTML = "Weeknd";
}

console.log(randomNumber1);

const cat = document.querySelector(".cat");
const cat_message = document.querySelector(".cat_message");
const originalBackgroundImage = cat.style.backgroundImage;

const clickedBgImage = "cat_2.gif";
let timer;

function returnToOriginalImage() {
  cat_message.style.visibility = "hidden";

  cat.style.backgroundImage = originalBackgroundImage;
}

function resetTimer() {
  clearTimeout(timer);
  timer = setTimeout(returnToOriginalImage, 2500);
}

document.querySelector(".cat").addEventListener("click", function () {
  cat.style.backgroundImage = `url(${clickedBgImage})`;
  cat_message.style.visibility = "visible";

  resetTimer();

  const heart = document.createElement("div");
  const heart2 = document.createElement("div");
  heart.classList.add("heart");
  heart2.classList.add("heart_2");
  heart.style.left = `${Math.random() * 100}%`;
  heart2.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(heart);
  document.body.appendChild(heart2);

  setTimeout(() => {
    heart.remove();
    heart2.remove();
  }, 2000);
});

document.body.addEventListener("click", function (event) {
  if (event.target.classList.contains("heart")) {
    event.target.style.display = "none";
    resetTimer();
  }
});

resetTimer();

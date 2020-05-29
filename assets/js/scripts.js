const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
let boxWhatsShow = false;
let changeStatusText = false;
let boxWhatsShowFirst = false;

document.getElementById(
  "box-whats-body-message-time-now"
).innerHTML = `${hour}:${minutes}`;

document
  .querySelector(".box-whats-redirect")
  .addEventListener("click", function () {
    document.getElementById("whats-link-redirect").click();
  });

window.onscroll = function () {
  showBoxWhatsAuto();
};

function showBoxWhatsAuto() {
  if (!boxWhatsShowFirst) {
    setTimeout(() => {
      slideLeftBoxWhats();
      boxWhatsShowFirst = true;
    }, 10000);
  }
}

document
  .querySelector(".whats-fixed-icon")
  .addEventListener("mouseover", function () {
    slideLeftBoxWhats();
  });

document
  .querySelector(".box-whats-header-close")
  .addEventListener("click", function () {
    slideRightBoxWhats();
  });

function slideLeftBoxWhats() {
  if (!boxWhatsShow) {
    if (!changeStatusText) {
      setTimeout(() => {
        document.getElementById("status-text").innerHTML = "online";
        document.getElementById("show-message").classList.remove("d-none");
      }, 3000);
    }
    changeStatusText = true;
    boxWhatsShow = true;
    const boxWhats = document.querySelector(".box-whats");
    let initialRightPosition = -300;

    const interval = setInterval(() => {
      initialRightPosition += 4;

      boxWhats.style.right = `${initialRightPosition}px`;

      if (initialRightPosition > -10) {
        clearInterval(interval);

        setTimeout(
          () => {
            slideRightBoxWhats();
          },
          changeStatusText ? 10000 : 13000
        );
      }
    }, 1);
  }
}

function slideRightBoxWhats() {
  if (boxWhatsShow) {
    boxWhatsShow = false;
    const boxWhats = document.querySelector(".box-whats");
    let initialRightPosition = -10;

    const interval = setInterval(() => {
      initialRightPosition -= 4;

      boxWhats.style.right = `${initialRightPosition}px`;

      if (initialRightPosition < -299) {
        clearInterval(interval);
      }
    }, 1);
  }
}

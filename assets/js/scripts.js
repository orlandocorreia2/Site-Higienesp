const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
let boxWhatsShow = false;
let changeStatusText = false;
let boxWhatsShowFirst = false;
let delayInitInfoInteraction = 0;

const videoTitle = document.getElementById("video-title");
const title = "Veja como a Kelly resolveu seu problema.";

delayInitInfoInteraction = typingText(videoTitle, title);

initInfoInteraction();

document.getElementById(
  "box-whats-body-message-time-now"
).innerHTML = `${hour}:${minutes}`;

document
  .querySelector(".box-whats-redirect")
  .addEventListener("click", function () {
    document.getElementById("whats-link-redirect").click();
  });

document.getElementById("myChart").addEventListener("click", function () {
  window.open(
    "https://www.unimed.coop.br/web/blumenau/noticias-unimed1/dia-mundial-da-alergia-doenca-que-atinge-30-da-populacao-brasileira-e-pode-levar-a-morte"
  );
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

document.getElementById("link-services").addEventListener("click", function () {
  const elementService = document.getElementById("link-services");

  window.scrollTo(elementService.offsetTop, 1000);
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

function typingText(element, text, delay = 100) {
  text = text.split("");
  const textLength = text.length;

  const time = setInterval(() => {
    element.innerHTML += text[0];
    text.shift();

    if (!text.length) {
      clearInterval(time);
    }
  }, delay);

  return textLength * delay;
}

function initInfoInteraction() {
  setTimeout(() => {
    const infoInteraction = document.getElementById("info-interaction-title");
    const infoInteractionText =
      "Sabe porque você precisa higienizar seus estofados?";

    const infoInteractionObjects = [
      "De acordo com a organização mundial da Saúde(OMS), no Brasil, 30% da população possui algum tipo de alergia.",
      "A renite alérgica é uma das mais altas do mundo com 25% de prevalência",
      "Seguido pela asma alérgica, atingindo cerca de 20% da população infantil e adolecente do pais",
    ];

    infoInteraction.innerHTML = "";

    typingText(infoInteraction, infoInteractionText);

    setTimeout(() => {
      document
        .getElementById("info-interaction-content-logo")
        .classList.add("d-none");
      document.getElementById("myChart").classList.remove("d-none");

      initChart();
      infoInteraction.innerHTML = "";
      typingText(infoInteraction, infoInteractionObjects[0]);
    }, 8000);

    setTimeout(() => {
      infoInteraction.innerHTML = "";
      typingText(infoInteraction, infoInteractionObjects[1]);
    }, 20000);

    setTimeout(() => {
      infoInteraction.innerHTML = "";
      typingText(infoInteraction, infoInteractionObjects[2]);
    }, 30000);
  }, delayInitInfoInteraction);
}

function percentageTyping(percentage, delay = 100) {
  const element = document.getElementById("percentage");

  document
    .getElementById("info-interaction-content-logo")
    .classList.add("d-none");
  element.classList.remove("d-none");

  percentageArray = [];

  if (percentage) {
    for (i = 0; i <= percentage; i++) {
      if (i < 10) {
      }

      percentageArray.push(`${i < 10 ? `0${i}` : i}`);
    }
  }

  const time = setInterval(() => {
    element.innerHTML = `${percentageArray[0]}%`;
    percentageArray.shift();

    if (!percentageArray.length) {
      clearInterval(time);
    }
  }, 100);
}

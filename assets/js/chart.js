function initChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Alergia", "Renite", "Asma"],
      datasets: [
        {
          label: "Gráfico em (%), fonte (OMS)",
          data: [30, 25, 20],
          backgroundColor: [
            "rgb(51, 124, 187)",
            "rgb(118, 206, 241)",
            "rgb(187, 187, 187)",
          ],
          borderColor: [
            "rgb(51, 124, 187)",
            "rgb(118, 206, 241)",
            "rgb(187, 187, 187)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
}

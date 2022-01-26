function generarchartbarra(etiquetas, data2, ctx) {
  //Chart.defaults.global.defaultFontFamily = "'Titillium Web'"
  //Chart.defaults.global.defaultFontSize = 5

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Presupuesto',
        data: data2,
        backgroundColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 0)',
          'rgba(105, 190, 190, 0)',
          'rgba(35, 145, 200, 0)',
          'rgba(153, 070, 135, 0)',
          'rgba(190, 135, 180, 0)',
          'rgba(215, 90, 218, 0)',
          'rgba(240, 150, 145, 0)',
          'rgba(55, 55, 55,0)',
          'rgba(235, 235, 225,0)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {y:{ticks:{font:{family:'Raleway'}}},
      x:{ticks:{font:{family:'Raleway'}}}},

      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          align: 'start',
          display: true,
          text: 'Gasto ejecutado por unidad ($)',
          font: {
            family: 'Titillium Web',
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
        legend: false
      }
    }
  });
}

var personalCharts = {}
var inViewPersonal = false;
var personal = null;

$.getJSON("json/PRESUPUESTO_UO.json", function (dataorig) {
  personal = dataorig
})

function animarPersonal() {
  for (var i = 0; i < Object.keys(personal).length - 1; i++) {
    var idElement = "PresupuestoB" + i;
    if (isScrolledIntoView('#' + idElement)) {
      if (personalCharts[idElement]) { continue }
      personalCharts[idElement] = true;
      var element = Object.keys(personal)[i]
      var ctx = document.getElementById(idElement);
      var etiquetas = Object.keys(personal[element])
      var data2 = etiquetas.map(key => personal[element][key]);

      if (inViewPersonal) { return; }
      inViewPersonal = true;
      var Presupuesto = generarchartbarra(etiquetas, data2, ctx)
    } else {
      inViewPersonal = false;
    }
  }
}
$(window).scroll(function () {

  animarPersonal();

});

$(window).load(function () {


  animarPersonal();

});
function generarchartempleados(etiquetas, data2, ctx) {

  return new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: 'doughnut',
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
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: 'auto',
          formatter: function (value) {
            return Math.round(value) + '%';
          },
          color: 'white',
          font: {
             
           
            family: 'Raleway'
          }
        },
        title: {
          align: 'start',
          display: true,
          text: 'Empleados por género (%)',
          font: {
            family: 'Titillium Web',
            size: 20,
          },
          padding: {
            top: 10,
            bottom: 30,
          },
        },
        legend: {
          display: true,
          position: 'right',
          align: 'middle',
          labels: { font: { family: 'Raleway' } }
        }
      }
    }
  });
}




function isScrolledIntoView(elem) {


  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  if ($(elem).offset()) {

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  } else {
    return false
  }

}

var chartsSexo = {}
var inViewSexo = false;
var sexos = null;

$.getJSON("./json/SEXO_PERSONAL.json", function (dataorig) {
  sexos = dataorig;
})


function animarSexo() {
  for (var i = 0; i < Object.keys(sexos).length - 1; i++) {
    var idElement = "Sexo" + i;
    if (isScrolledIntoView('#' + idElement)) {
      if (chartsSexo[idElement]) { continue }
      chartsSexo[idElement] = true;
      var element = Object.keys(sexos)[i]
      var ctx = document.getElementById(idElement);
      var etiquetas = Object.keys(sexos[element])
      var data2 = etiquetas.map(key => sexos[element][key]);
      if (inViewSexo) { return; }
      inViewSexo = true;
      var Presupuesto2 = generarchartempleados(etiquetas, data2, ctx)
    } else {
      inViewSexo = false;
      console.log('false')
    }
  }
}

$(window).scroll(function () {

  animarSexo();

});

$(window).load(function () {


  animarSexo();

});
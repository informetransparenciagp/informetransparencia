//Municipalidad chart porcentaje por sexo
const ctx = document.getElementById('municipalidad_sexo').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Femenino', 'Masculino',],
        datasets: [{
            label: '# of Votes',
            data: [46, 54],
            backgroundColor: [
              'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)'
        ],
        borderColor: [
          'rgba(35, 145, 200, 0)',
          'rgba(153, 070, 135, 0)',
          'rgba(240, 150, 145, 0)',
          'rgba(71, 123, 168, 0)',
          'rgba(105, 190, 190, 0)',
          
          'rgba(190, 135, 180, 0)',
          'rgba(215, 90, 218, 0)',
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


const ctx2 = document.getElementById('municipalidad_nivel_educativo').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Primario','Secundario', 'Terciario', 'Universitario',],
        datasets: [{
            label: '# of Votes',
            data: [52, 35,2,11],
            backgroundColor: [
              'rgba(71, 123, 168, 1)',
              'rgba(105, 190, 190, 1)',
          'rgba(215, 90, 218, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',

          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(235, 235, 225,1)'
        ],
        borderColor: [
          'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(215, 90, 218, 0)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',

          'rgba(35, 145, 200, 1)',
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(235, 235, 225,1)'
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
            text: 'Empleados por nivel educativo (%)',
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

const ctx3 = document.getElementById('municipalidad_rango_etario').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['menos de 35 años','36 a 55 años', 'más de 56 años',],
        datasets: [{
            label: '# of Votes',
            data: [18,62,20],
            backgroundColor: [
              'rgba(71, 123, 168, 1)',
          'rgba(105, 190, 190, 1)',
          'rgba(35, 145, 200, 1)',
          'rgba(240, 150, 145, 1)',
          'rgba(55, 55, 55,1)',
          'rgba(235, 235, 225,1)',
          
          'rgba(153, 070, 135, 1)',
          'rgba(190, 135, 180, 1)',
          'rgba(215, 90, 218, 1)'
        ],
        borderColor: [
          'rgba(153, 070, 135, 0)',
          'rgba(190, 135, 180, 0)',
          'rgba(71, 123, 168, 0)',
          'rgba(105, 190, 190, 0)',
          'rgba(35, 145, 200, 0)',
          
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
            text: 'Empleados por rango etario (%)',
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
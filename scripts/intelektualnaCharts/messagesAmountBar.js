let namesAmountMessagesBar = ['Andrzej Domagała',
    'Piotr Klimont',
    'Paweł Ostrowski',
    'Maciej Mikulski',
    'Adrian Szarek',
    'Mateusz Barzenc',
    'Łukasz Szarga',
    'Krzysztof Kisluk',
    'Filip Manka',
    'Andrzej Wiśniewski',
    'Cezary Serkis',
    'Mateusz Tchórz',
    'Rafał Rodak',
    'Antek Domagała',
    'Kuba Kryk',
    'Paweł Jurkowski',
    'Tomek Wiejak',
    'Krzysztof Oleszkiewicz',
    'Piotr Rodziewicz',
    'Dawid Matraszek',
    'Andzelika Ksiś',
    'Radosław Bany',
    'Kuba Barytka',
    'Andrzej Baj',
    'Michał Kopciał',
    'Kacper Seredyn',
    'Cezary Kotowski'];

let messagesAmoutBar = [76020, 20222, 9308, 7479, 7365, 6798, 4838,4803, 4773, 3793, 3083, 2517, 2491, 2251,1980, 1358, 1156, 1156, 761, 646, 423, 290, 122, 98, 95, 41, 35];


// const colorScaledataLengthMessangesCountChart = d3.interpolateSinebow;
const colorScaledataLengthMessangesCountBar = d3.interpolateInferno;
const colorRangeInfoLengthMessangesCountBar = {
colorStart: 0,
colorEnd: 1,
useEndAsStart: false,
};

const dataLengthMessangesCountBar = namesAmountMessagesBar.length;

var COLORS = interpolateColors(dataLengthMessangesCountBar, colorScaledataLengthMessangesCountBar, colorRangeInfoLengthMessangesCountBar);

let myBarChartMessages = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myBarChartMessages, {
    type: 'bar',
    data: {
        labels: namesAmountMessagesBar,
        datasets: [ {
            data: messagesAmoutBar,
            backgroundColor: COLORS,
            hoverBackgroundColor: COLORS,
        }],
    },
    options: {     
        legend: {
            display: false,
        },
        hover: {
            onHover: function(e) {
            var point = this.getElementAtEvent(e);
            e.target.style.cursor = point.length ? 'pointer' : 'default';
            },
        },
        scales: {
          yAxes: [{
              type: 'logarithmic',
              ticks: {
                   min: 1,
                   max: 1000000,
                   callback: function (value, index, values) {
                       if (value === 80000) return "80K";
                       if (value === 50000) return "50K";

                       if (value === 20000) return "20K";
                       if (value === 10000) return "10K";
                       if (value === 6000) return "6K";

                       if (value === 2000) return "2K";
                       if (value === 1000) return "1K";

                       if (value === 500) return "500";
                       if (value === 200) return "200";
                       if (value === 100) return "100";
                       if (value === 20) return "20";
                       if (value === 10) return "10";

                       return null;
                   }
              }
          }]
        }
      },
});
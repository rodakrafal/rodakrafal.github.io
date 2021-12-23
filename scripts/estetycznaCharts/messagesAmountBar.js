let namesAmountMessagesBar = ['Andrzej Domagała',
'Mateusz Barzenc',
'Paulina Kuta',
'Paweł Ostrowski',
'Piotr Klimont',
'Rafał Rodak',
'Mateusz Tchórz',
'Łukasz Szarga',
'Andrzej Wiśniewski',
'Kuba Kryk',
'Maciej Mikulski',
'Antek Domagała',
'Marysia Gajek',
'Krzysztof Kiśluk',
'Dawid Matraszek',
'Radosław Bany',
'Tomek Wiejak',
'Adrian Szarek',
'Filip Mańka',
'Patrycja Sońta',
'Andrzej Baj',
'Natalia Krukar',
'Piotr Rodziewicz',
'Paweł Marcin Jurkowski',
'Jakub Bieniek',
'Kuba Baryłka',
'Mateusz Świderski',
'Eliza Szczotka'];

let messagesAmoutBar = [4207,
    2696,
    1177,
    923,
    324,
    274,
    205,
    182,
    163,
    161,
    116,
    114,
    113,
    86,
    58,
    50,
    39,
    34,
    33,
    33,
    28,
    19,
    14,
    13,
    12,
    3,
    0,
    0];


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
            //   ticks: {
            //        min: 1,
            //        max: 1000000,
            //        callback: function (value, index, values) {
            //            if (value === 80000) return "80K";
            //            if (value === 50000) return "50K";

            //            if (value === 20000) return "20K";
            //            if (value === 10000) return "10K";
            //            if (value === 6000) return "6K";

            //            if (value === 2000) return "2K";
            //            if (value === 1000) return "1K";

            //            if (value === 500) return "500";
            //            if (value === 200) return "200";
            //            if (value === 100) return "100";
            //            if (value === 20) return "20";
            //            if (value === 10) return "10";

            //            return null;
            //        }
            //   }
          }]
        }
      },
});
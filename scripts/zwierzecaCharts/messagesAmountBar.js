let namesAmountMessagesBar = ['Andrzej Domagała',
'Paulina Kuta',
'Piotr Klimont',
'Mateusz Barzenc',
'Paweł Ostrowski',
'Patrycja Sońta',
'Rafał Rodak',
'Łukasz Szarga',
'Krzysztof Oleszkiewicz',
'Faustyna Porębska',
'Aleksandra Kowalik',
'Maciej Mikulski',
'Marysia Gajek',
'Antek Domagała',
'Gabriela Libudzka',
'Karolina Radomska',
'Dawid Matraszek',
'Tomek Wiejak',
'Radosław Bany',
'Piotr Rodziewicz',
'Błażej Mioduszewski',
'Natalia Krukar',
'Cezary Serkis'];

let messagesAmoutBar = [1707,
    815,
    647,
    479,
    261,
    220,
    59,
    45,
    42,
    36,31,30,
    19,
    19,
    15,
    14,
    11,
    9,
    4,
    2,
    1,
    0
    ];


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
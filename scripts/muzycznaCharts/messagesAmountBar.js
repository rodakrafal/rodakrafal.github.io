let namesAmountMessagesBar = ['Andrzej Domagała',
'Paweł Ostrowski',
'Andrzej Wiśniewski',
'Mateusz Tchórz',
'Krzysztof Oleszkiewicz',
'Antek Domagała',
'Adrian Szarek',
'Piotr Klimont',
'Damian Lesik',
'Mateusz Barzenc',
'Rafał Rodak',
'Łukasz Szarga',
'Maciej Mikulski',
'Jan Wasilewski',
'Kuba Kryk',
'Kuba Baryłka',
'Dominik Oroń',
'Faustyna Porębska',
'Kacper Kania',
'Tomek Wiejak',
'Andzelika Ksiś',
'Kacper Seredyn',
'Piotr Rodziewicz',
'Marysia Gajek',
'Paweł Marcin Jurkowski',
'Julia Netczuk',
'Radosław Bany',
'Patrycja Sońta',
'Karolina Radomska',
'Cezary Serkis'];

let messagesAmoutBar = [12665,
    11786,
    5038,
    2595,
    1675,
    1162,
    955,
    451,372,242,179,
    156,
    112,81,72,67,64,64,59,56,33,28,26,21,18,13,8,3,2,0];


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
let namesAmountMessagesBar = ['Andrzej Domagała',
'Andrzej Wiśniewski',
'Mateusz Tchórz',
'Maciej Mikulski',
'Kuba Baryłka',
'Paweł Ostrowski',
'Łukasz Szarga',
'Antek Domagała',
'Tomek Wiejak',
'Krzysztof Oleszkiewicz',
'Rafał Rodak',
'Radosław Bany',
'Kuba Kryk',
'Piotr Rodziewicz',
'Kacper Seredyn'];

let messagesAmoutBar = [9139, 2454, 1479, 1287, 896, 887,766, 518,473,466, 155, 81, 64, 23, 3];


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
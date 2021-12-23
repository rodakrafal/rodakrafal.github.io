let namesMessangesCountChart = ['Andrzej Domagała',
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

let messagesAmoutChart = [9139, 2454, 1479, 1287, 896, 887,766, 518,473,466, 155, 81, 64, 23, 3];

// const colorScaledataLengthMessangesCountChart = d3.interpolateSinebow;
const colorScaledataLengthMessangesCountChart = d3.interpolateInferno;
const colorRangeInfoLengthMessangesCountChart = {
colorStart: 0,
colorEnd: 1,
useEndAsStart: false,
};

let chartElement = document.getElementById("myChart").getContext('2d');

const dataLengthMessangesCountChart = namesMessangesCountChart.length;

var COLORS = interpolateColors(dataLengthMessangesCountChart, colorScaledataLengthMessangesCountChart, colorRangeInfoLengthMessangesCountChart);

let myChart = new Chart(chartElement, {
    type: 'pie',
    data: {
    labels: namesMessangesCountChart,
    datasets: [{
            backgroundColor: COLORS,
            hoverBackgroundColor: COLORS,
            data: messagesAmoutChart
        }],
    },
    options: {
        hover: {
            onHover: function(e) {
            var point = this.getElementAtEvent(e);
            e.target.style.cursor = point.length ? 'pointer' : 'default';
            },
        },
        responsive: true
    }
});
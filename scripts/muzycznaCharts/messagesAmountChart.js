let namesMessangesCountChart = ['Andrzej Domagała',
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

let messagesAmoutChart = [12665,
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
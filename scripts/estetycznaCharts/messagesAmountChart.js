let namesMessangesCountChart = ['Andrzej Domagała',
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

let messagesAmoutChart = [4207,
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
const colorScaledataLengthMessangesCountChart = d3.interpolateInferno;
const colorRangeInfoLengthMessangesCountChart = {
colorStart: 0.1,
colorEnd: 0.8,
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
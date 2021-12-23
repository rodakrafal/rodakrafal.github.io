let namesMessangesCountChart = ['Andrzej Domagała',
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

let messagesAmoutChart = [1707,
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
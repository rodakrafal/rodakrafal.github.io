let namesMessangesCountChart = ['Tomek Wiejak', 'Rafał Rodak', 'Paweł Ostrowski', 'Andrzej Domagała', 
'Mateusz Tchórz', 'Andrzej Baj', 'Piotr Klimont', 'Filip Mańka', 'Adrian Szarek'
, 'Mateusz Barzenc', 'Cezary Serkis', 'Radosław Bany', 'Antek Domagała', 
'Łukasz Szarga', 'Piotr Rodziewicz', 'Maciej Mikulski', 'Kuba Baryłka', 
'Krzysztof Oleszkiewicz', 'Kuba Kryk', 'Paweł Marcin Jurkowski', 
'Dawid Matraszek', 'Krzysztof Kiśluk', 'Andrzej Wiśniewski', 
'Andzelika Ksiś', 'Michał Kopciał', 'Kacper Seredyn', 'Cezary Kotowski'];

let messagesAmoutChart = ['1156', '2491', '9308', '76020' ,'2517' ,'98' ,'20229' ,'4773' ,'7365' 
,'6798' ,'3083' ,'290','2251' ,'4838' ,'761' ,'7479','122' ,'817','1980'  ,'1358' ,'646' 
,'4803' ,'3793' ,'423','95' ,'41' ,'35' ];

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
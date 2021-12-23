var intelektualnaHoursInDay = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,1,2,3,4,5];

var intelektualnaMessangesAmountInDay = [4, 4, 15, 60, 106, 185, 280, 390, 249, 241, 220, 303, 254, 236, 305, 252, 337, 447, 363,401, 84, 19, 19, 0];
// const intelektualnaFrequencyColorGradient = d3.interpolateSinebow;
const intelektualnaFrequencyColorGradient = d3.interpolateInferno;
const intelektualnaFrequencyColorStats = {
colorStart: 0,
colorEnd: 1,
useEndAsStart: false,
};

var intelektualnaMessagesFrequency = document.getElementById("intelektualnaChartAktywnoscDzien").getContext('2d');

const intelektualnaFrequencyNumberOfElements = intelektualnaHoursInDay.length;
var gradientColor = intelektualnaMessagesFrequency.createLinearGradient(300,500,900,100)
gradientColor.addColorStop(0, '#C13A50');
gradientColor.addColorStop(1, '#F2F482');
var COLORS = interpolateColors(intelektualnaFrequencyNumberOfElements, intelektualnaFrequencyColorGradient, intelektualnaFrequencyColorStats);

var myChartFrequency = new Chart(intelektualnaMessagesFrequency, {
    type: 'line',
    data: {
    labels: intelektualnaHoursInDay,
    datasets: [{
            backgroundColor: gradientColor,
            hoverBackgroundColor: COLORS,
            data: intelektualnaMessangesAmountInDay
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
        responsive: true
    }
});
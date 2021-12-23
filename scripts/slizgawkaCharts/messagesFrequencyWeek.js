var intelektualnaWeek = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];

var intelektualnaMessangesAmountInWeek = [2946, 3405, 3134, 3429, 2707, 1408, 1664];

// const intelektualnaFrequencyWeekColorGradient = d3.interpolateSinebow;
const intelektualnaFrequencyWeekColorGradient = d3.interpolateInferno;
const intelektualnaFrequencyWeekColorStats = {
colorStart: 0,
colorEnd: 1,
useEndAsStart: false,
};

var intelektualnaMessagesFrequencyWeek = document.getElementById("intelektualnaChartAktywnoscTydzien").getContext('2d');

const intelektualnaFrequencyWeekNumberOfElements = intelektualnaWeek.length;
var gradientColor = intelektualnaMessagesFrequencyWeek.createLinearGradient(300,500,900,100)
gradientColor.addColorStop(0, '#C13A50');
gradientColor.addColorStop(1, '#F2F482');
var COLORS = interpolateColors(intelektualnaFrequencyWeekNumberOfElements, intelektualnaFrequencyWeekColorGradient, intelektualnaFrequencyWeekColorStats);

var myChartFrequencyWeek = new Chart(intelektualnaMessagesFrequencyWeek, {
    type: 'line',
    data: {
    labels: intelektualnaWeek,
    datasets: [{
            backgroundColor: gradientColor,
            hoverBackgroundColor: COLORS,
            data: intelektualnaMessangesAmountInWeek
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
let names = ['Tomek Wiejak', 'Rafał Rodak', 'Paweł Ostrowski', 'Andrzej Domagała', 
'Mateusz Tchórz', 'Andrzej Baj', 'Piotr Klimont', 'Filip Mańka', 'Adrian Szarek'
, 'Mateusz Barzenc', 'Cezary Serkis', 'Radosław Bany', 'Antek Domagała', 
'Łukasz Szarga', 'Piotr Rodziewicz', 'Maciej Mikulski', 'Kuba Baryłka', 
'Krzysztof Oleszkiewicz', 'Kuba Kryk', 'Paweł Marcin Jurkowski', 
'Dawid Matraszek', 'Krzysztof Kiśluk', 'Andrzej Wiśniewski', 
'Andzelika Ksiś', 'Michał Kopciał', 'Kacper Seredyn', 'Cezary Kotowski'];
let colorsMessagesChart = ['#80cc00', '#000000', '#ffd700', '#ff4612', '#762987',
'#3e331d','#00cc1a','#cc0080','#03aaf9','#bb1c2a', '#00cc1a', '#cbdea6','#123234','#36CAAB'
,'#fab666',"#fef017",'#fe03fb','#a203fb','#e2cbc5', "#e21511", '#3eff19', '#6fbcd7',
'#0f66ff', '#a2757c', '#25757c', '#d8757c', '#301e7c'];
let messagesAmout = ['1156', '2491', '9308', '76020' ,'2517' ,'98' ,'20229' ,'4773' ,'7365' 
,'6798' ,'3083' ,'290','2251' ,'4838' ,'761' ,'7479','122' ,'817','1980'  ,'1358' ,'646' 
,'4803' ,'3793' ,'423','95' ,'41' ,'35' ];
let myDoughnutChart = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myDoughnutChart, {
    type: 'doughnut',
    data: {
        labels: names,
        datasets: [ {
            data: messagesAmout,
            backgroundColor: colorsMessagesChart
        }]
    },
    options: {
        title: {
            text: "Ilość wiadomości na osobe",
            display: false
        }
    }
});

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [ {
            data: messagesAmout,
            backgroundColor: colorsMessagesChart
        }]
    },
    options: {     
        legend: {
            display: false,
        },
        title: {
            text: "Ilość wiadomości na osobe",
            display: false
        },
        scales: {
          yAxes: [{
              type: 'logarithmic',
              ticks: {
                   min: 1,
                   max: 1000000,
                   callback: function (value, index, values) {
                       if (value === 80000) return "80K";
                       if (value === 50000) return "50K";

                       if (value === 20000) return "20K";
                       if (value === 10000) return "10K";
                       if (value === 6000) return "6K";

                       if (value === 2000) return "2K";
                       if (value === 1000) return "1K";

                       if (value === 500) return "500";
                       if (value === 200) return "200";
                       if (value === 100) return "100";
                       if (value === 20) return "20";
                       if (value === 10) return "10";

                       return null;
                   }
              }
          }]
        }
      },
});


let labels3 = ['Attack', 'Defense', 'Passing', 'Tackle', 'Speed'];
let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'radar',
    data: {
        labels: labels3,
        datasets: [
          {
            label: 'Messi',
            fill: true,
            backgroundColor: "rgba(179, 181, 198, 0.2)",
            borderColor: "rgba(179, 181, 198, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(179, 181, 198, 1)",
            data: [50, 12, 55, 7, 29]
          },
          {
            label: 'Ronaldo',
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "#fff",
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            data: [51, 10, 32, 20, 44]
          }
        ]
    },
    options: {
        title: {
            text: "Skills",
            display: true
        }
    }
});

let labels4 = ['Germany', 'France', 'UK', 'Italy', 'Spain', 'Others(23)'];
let data4 = [83, 67, 66, 61, 47, 187];
let colors4 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF', '#AC5353', '#CFD4D8'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'pie',
    data: {
        labels: labels4,
        datasets: [ {
            data: data4,
            backgroundColor: colors4
        }]
    },
    options: {
        title: {
            text: "Population of the European Union (in mio)",
            display: true
        }
    }
});
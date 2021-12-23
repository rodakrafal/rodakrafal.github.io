let names3 = ['👨', '🦽', '🍄', '🙏', '😢', '🐸', '🤠', '😍', '😔', '🥺']

let inteletualnaTomek_Wiejak = [1, 1, 2, 0, 4, 0, 0, 0, 0, 0];
let inteletualnaRafal_Rodak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPawel_Ostrowski = [29, 29, 11, 0, 1, 0, 0, 0, 1, 3];
let inteletualnaAndrzej_Domagala = [68, 68, 28, 4, 2, 1, 0, 3, 1, 0];
let inteletualnaMateusz_Tchorz = [4, 4, 0, 1, 0, 0, 5, 0, 0, 0];
let inteletualnaRadosław_Bany= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAntek_Domagała= [0, 0, 4, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaŁukasz_Szarga = [4, 4, 4, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Rodziewicz=  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMaciej_Mikulski= [15, 15, 3, 2, 0, 0, 0, 0, 0, 0];
let inteletualna_Kuba_Baryłka= [5, 5, 0, 2, 0, 0, 0, 2, 0, 0];
let inteletualnaKrzysztof_Oleszkiewicz= [0, 0, 0, 0, 0, 0, 0, 0, 1, 0];
let inteletualnaKuba_Kryk= [3, 3, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAndrzej_Wiśniewski= [9, 9, 6, 0, 0, 5, 0, 0, 0, 0];
let inteletualnaKacper_Seredyn=  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



let emojisBarChart = document.getElementById("myChart3").getContext('2d');

let mychart3 = new Chart(emojisBarChart, {
    type: 'bar',
    data: {
        labels: names3,
        datasets: [
            {
              label: 'Tomek Wiejak',
              data: inteletualnaTomek_Wiejak,
              backgroundColor: '#000004',
            },
            {
              label: 'Rafał Rodak',
              data: inteletualnaRafal_Rodak ,
              backgroundColor: '#040314',
            },
            {
              label: 'Paweł Ostrowski',
              data: inteletualnaPawel_Ostrowski ,
              backgroundColor: '#0D0829',
            },
            {
                label: 'Andrzej Domagała',
                data: inteletualnaAndrzej_Domagala ,
                backgroundColor: '#1B0C41',
            },
            {
                label: 'Mateusz Tchórz',
                data: inteletualnaMateusz_Tchorz ,
                backgroundColor: '#290B55',
            },
            {
                label: 'Radosław Bany',
                data: inteletualnaRadosław_Bany,
                backgroundColor: '#972766',
            },
            {
                label: 'Antek Domagała',
                data: inteletualnaAntek_Domagała,
                backgroundColor: '#A52C60',
            },
            {
                label: 'Łukasz Szarga',
                data: inteletualnaŁukasz_Szarga,
                backgroundColor: '#B43359',
            },
            {
                label: 'Piotr_Rodziewicz',
                data: inteletualnaPiotr_Rodziewicz,
                backgroundColor: '#C13A50',
            },
            {
                label: 'Maciej_Mikulski',
                data: inteletualnaMaciej_Mikulski,
                backgroundColor: '#CF4446',
            },
            {
                label: 'Kuba Baryłka',
                data: inteletualna_Kuba_Baryłka,
                backgroundColor: '#DA4E3C',
            },
            {
                label: 'Krzysztof Oleszkiewicz',
                data: inteletualnaKrzysztof_Oleszkiewicz,
                backgroundColor: '#E55C30',
            },
            {
                label: 'Kuba Kryk',
                data: inteletualnaKuba_Kryk,
                backgroundColor: '#ED6925',
            },
            {
                label: 'Andrzej Wiśniewski',
                data: inteletualnaAndrzej_Wiśniewski,
                backgroundColor: '#FCAC11',
            },
            {
                label: 'Kacper Seredyn',
                data: inteletualnaKacper_Seredyn,
                backgroundColor: '#F3E55D',
            }
          ]
        
    },
    options: {
        plugins: {
          title: {
            display: true,
            text: 'Emotikony'
          },
        },
        responsive: true,
        hover: {
            onHover: function(e) {
            var point = this.getElementAtEvent(e);
            e.target.style.cursor = point.length ? 'pointer' : 'default';
            },
        },
        scales: {
            xAxes: [{
                stacked: true // this should be set to make the bars stacked
            }],
            yAxes: [{
                
                stacked: true // this also..
            }]
            }
      }    
});


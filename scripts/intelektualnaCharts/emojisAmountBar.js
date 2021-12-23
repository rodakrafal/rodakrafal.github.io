let names3 = ['😱', '❤️', '😍', '🥰', '🤔', '💪', '✅', '😢', '🏻', '▪️']

let inteletualnaTomek_Wiejak = ['11', '0', '0',' 0', '0',' 1', '0', '6', '0', '0'];
let inteletualnaRafal_Rodak = ['20', '0', '0', '0', '0', '0', '0', '1', '0', '0'];
let inteletualnaPawel_Ostrowski = ['357', '25', '1', '4', '0', '0', '0', '16', '19', '0']
let inteletualnaAndrzej_Domagala = ['2115', '31', '105', '4', '14', '29', '58', '14', '0', '31'];
let inteletualnaMateusz_Tchorz = [6, 0, 0, 0, 0, 0, 1, 1, 0, 0];
let inteletualnaAndrzej_Baj= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Klimont= [69, 220, 20, 97, 26, 38, 1, 3, 22, 0]; 
let inteletualnaFilip_Manka= [8, 8, 0, 0, 11, 0, 0, 0, 0, 0];
let inteletualnaAdrian_Szarek= [4, 3, 4, 1, 1, 0, 0, 0, 1, 0]; 
let inteletualnaMateusz_Barzenc= [165, 5, 1, 0, 3, 0, 0, 1, 4, 9];
let inteletualnaCezary_Serkis= [47, 11, 3, 14, 13, 0, 0, 8, 0, 0];
let inteletualnaRadosław_Bany= [1, 0, 0, 0, 1, 0, 0, 0, 0, 0];
let inteletualnaAntek_Domagała= [32, 0, 6, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaŁukasz_Szarga = [27, 2, 0, 0, 0, 0, 0, 1, 0, 0];
let inteletualnaPiotr_Rodziewicz=  [14, 1, 0, 0, 0, 0, 0, 0, 1, 0];
let inteletualnaMaciej_Mikulski= [214, 7, 0, 0, 8, 6, 0, 1, 0, 0];
let inteletualna_Kuba_Baryłka= [4, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKrzysztof_Oleszkiewicz= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKuba_Kryk= [32, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPaweł_Jurkowski= [7, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaDawid_Matraszek= [50, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKrzysztof_Kiśluk= [44, 11, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAndrzej_Wiśniewski= [56, 2, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAndzelika_Ksiś= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMichał_Kopciał= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKacper_Seredyn= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaCezary_Kotowski= [1, 0, 0, 0, 0, 0, 0, 1, 0, 0];



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
                label: 'Andrzej Baj',
                data: inteletualnaAndrzej_Baj,
                backgroundColor: '#3B0964',
            },
            {
                label: 'Piotr Klimont',
                data: inteletualnaPiotr_Klimont,
                backgroundColor: '#4A0C6B',
            },
            {
                label: 'Filip Mańka',
                data: inteletualnaFilip_Manka,
                backgroundColor: '#5A116E',
            },
            {
                label: 'Adrian Szarek',
                data: inteletualnaAdrian_Szarek ,
                backgroundColor: '#69166E',
            },
            {
                label: 'Mateusz Barzenc',
                data: inteletualnaMateusz_Barzenc,
                backgroundColor: '#781C6D',
            },
            {
                label: 'Cezary Serkis',
                data: inteletualnaCezary_Serkis,
                backgroundColor: '#87216B',
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
                label: 'Paweł Jurkowski',
                data: inteletualnaPaweł_Jurkowski,
                backgroundColor: '#F47918',
            },
            {
                label: 'Dawid Matraszek',
                data: inteletualnaDawid_Matraszek,
                backgroundColor: '#F8890C',
            },
            {
                label: 'Krzysztof Kiśluk',
                data: inteletualnaKrzysztof_Kiśluk,
                backgroundColor: '#FB9B06',
            },
            {
                label: 'Andrzej Wiśniewski',
                data: inteletualnaAndrzej_Wiśniewski,
                backgroundColor: '#FCAC11',
            },
            {
                label: 'Andzelika Ksiś',
                data: inteletualnaAndzelika_Ksiś,
                backgroundColor: '#FAC026',
            },
            {
                label: 'Michał_Kopciał',
                data: inteletualnaMichał_Kopciał,
                backgroundColor: '#F7D13D',
            },
            {
                label: 'Kacper Seredyn',
                data: inteletualnaKacper_Seredyn,
                backgroundColor: '#F3E55D',
            },
            {
                label: 'Cezary Kotowski',
                data: inteletualnaCezary_Kotowski,
                backgroundColor: '#F2F482',
            },
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


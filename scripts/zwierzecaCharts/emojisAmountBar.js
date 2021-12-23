let names3000 = ['🥺', '🐶', '😍', '🐷', '❤️', '🤩', '😠', '😢', '🐸', '🐱'];

let inteletualnaTomek_Wiejak = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
let inteletualnaRafal_Rodak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPawel_Ostrowski = [17, 0, 0, 4, 2, 0, 0, 0, 0, 1];
let inteletualnaAndrzej_Domagala = [140, 0, 0, 0, 0, 3, 3, 0, 1, 1];
let inteletualnaMateusz_Tchorz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaRadosław_Bany= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAntek_Domagała= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaŁukasz_Szarga = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Rodziewicz=  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMaciej_Mikulski= [5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualna_Kuba_Baryłka= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKuba_Kryk= [3, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAndrzej_Wiśniewski= [4, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMateusz_Barzen = [47, 0, 1, 0, 0, 0, 0, 2, 0, 0];
let inteletualnaPaulina_Kuta = [1, 1, 5, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Klimont = [1, 6, 0, 0, 0, 0, 0, 0, 1, 0];
let inteletualnaMarysia_Gajek = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaKrzystof_Kisluk = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaDawid_Matraszek = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaArian_Szarek = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaFilip_Manka = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPatrycja_Sonta = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaAndrzej_Baj = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaNatalia_Krukar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaPawel_Marcin_Jurkowski = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaJakub_Bieniek = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMateusz_Swiderski = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaEliza_Szczotka = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 


let emojisBarChart = document.getElementById("myChart3").getContext('2d');

let mychart3 = new Chart(emojisBarChart, {
    type: 'bar',
    data: {
        labels: names3000,
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
                  data: inteletualnaArian_Szarek ,
                  backgroundColor: '#69166E',
              },
              {
                  label: 'Mateusz Barzenc',
                  data: inteletualnaMateusz_Barzen,
                  backgroundColor: '#781C6D',
              },
              {
                  label: 'Paulina Kuta',
                  data: inteletualnaPaulina_Kuta,
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
                  label: 'Piotr Rodziewicz',
                  data: inteletualnaPiotr_Rodziewicz,
                  backgroundColor: '#C13A50',
              },
              {
                  label: 'Maciej Mikulski',
                  data: inteletualnaMaciej_Mikulski,
                  backgroundColor: '#CF4446',
              },
              {
                  label: 'Kuba Baryłka',
                  data: inteletualna_Kuba_Baryłka,
                  backgroundColor: '#DA4E3C',
              },
              {
                  label: 'Marysia Gajek',
                  data: inteletualnaMarysia_Gajek,
                  backgroundColor: '#E55C30',
              },
              {
                  label: 'Kuba Kryk',
                  data: inteletualnaKuba_Kryk,
                  backgroundColor: '#ED6925',
              },
              {
                  label: 'Paweł Jurkowski',
                  data: inteletualnaPawel_Marcin_Jurkowski,
                  backgroundColor: '#F47918',
              },
              {
                  label: 'Dawid Matraszek',
                  data: inteletualnaDawid_Matraszek,
                  backgroundColor: '#F8890C',
              },
              {
                  label: 'Krzysztof Kiśluk',
                  data: inteletualnaKrzystof_Kisluk,
                  backgroundColor: '#FB9B06',
              },
              {
                  label: 'Andrzej Wiśniewski',
                  data: inteletualnaAndrzej_Wiśniewski,
                  backgroundColor: '#FCAC11',
              },
              {
                  label: 'Natalia Krukar',
                  data: inteletualnaNatalia_Krukar,
                  backgroundColor: '#FAC026',
              },
              {
                  label: 'Jakub Bieniek',
                  data: inteletualnaJakub_Bieniek,
                  backgroundColor: '#F3E55D',
              },
              {
                  label: 'Mateusz Świderski',
                  data: inteletualnaMateusz_Swiderski,
                  backgroundColor: '#F2F482',
              },
              {
                label: 'Eliza Szczotka',
                data: inteletualnaEliza_Szczotka,
                backgroundColor: '#F2F482',
              },
              {
                  label: "Patrycja Sońta",
                  data: inteletualnaPatrycja_Sonta,
                  backgroundColor: '#F1F468',
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


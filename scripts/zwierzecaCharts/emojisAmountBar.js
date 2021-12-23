let names3000 = ['🥺', '🐶', '😍', '🐷', '❤️', '🤩', '😠', '😢', '🐸', '🐱'];

let inteletualnaTomek_Wiejak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaRafal_Rodak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaNatalia_Krukar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaPatrycja_Sonta = [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaPawel_Ostrowski =  [1, 5, 0, 3, 6, 0, 0, 1, 1, 0];
let inteletualnaGabriela_Libudzka = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAndrzej_Domagala = [1, 19, 22, 12, 3, 11, 0, 3, 2, 0];
let inteletualnaKarolina_Radomska = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaBlazej_Mioduszewski = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
let inteletualnaMarysia_Gajek = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaAleksandra_Kowalik =  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Klimont = [24, 0, 2, 4, 6, 0, 8, 0, 0, 0];
let inteletualnaPaulina_Kuta = [5, 1, 0, 0, 2, 0, 0, 0, 0, 0];
let inteletualnaMateusz_Barzen = [1, 3, 0, 3, 0, 0, 0, 2, 3, 1];
let inteletualnaCezary_Serkis =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaRadosław_Bany= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaŁukasz_Szarga = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Rodziewicz=  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMaciej_Mikulski= [0, 0, 0, 1, 0, 0, 0, 0, 0, 0];
let inteletualnaKrzysztof_Oleszkiewicz = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3];
let inteletualnaFaustyna_Porebska = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaDawid_Matraszek = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]; 
let inteletualnaAntek_Domagała= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



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
                  label: 'Gabriela Libudzka',
                  data: inteletualnaGabriela_Libudzka ,
                  backgroundColor: '#290B55',
              },
              {
                  label: 'Karolina Radomska',
                  data: inteletualnaKarolina_Radomska,
                  backgroundColor: '#3B0964',
              },
              {
                  label: 'Piotr Klimont',
                  data: inteletualnaPiotr_Klimont,
                  backgroundColor: '#4A0C6B',
              },
              {
                  label: 'Błażej Mioduszewski',
                  data: inteletualnaBlazej_Mioduszewski,
                  backgroundColor: '#5A116E',
              },
              {
                  label: 'Łukasz Szarga',
                  data: inteletualnaŁukasz_Szarga ,
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
                  label: 'Krzysztof Oleszkiewicz',
                  data: inteletualnaKrzysztof_Oleszkiewicz,
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
                  label: 'Faustyna Porębska',
                  data: inteletualnaFaustyna_Porebska,
                  backgroundColor: '#DA4E3C',
              },
              {
                  label: 'Marysia Gajek',
                  data: inteletualnaMarysia_Gajek,
                  backgroundColor: '#E55C30',
              },
              {
                  label: 'Cezary Serkis',
                  data: inteletualnaCezary_Serkis,
                  backgroundColor: '#ED6925',
              },
              {
                  label: 'Dawid Matraszek',
                  data: inteletualnaDawid_Matraszek,
                  backgroundColor: '#F47918',
              },
              {
                  label: 'Patrycja Sońta',
                  data: inteletualnaPatrycja_Sonta,
                  backgroundColor: '#F8890C',
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


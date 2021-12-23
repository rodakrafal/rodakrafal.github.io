let names3000 = ['🎶', '👨', '👦', '❤️', '💯', '💓', '😍', '🏻', '↘️', '♂️'];


let inteletualnaTomek_Wiejak = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaRafal_Rodak = [2, 0, 0, 4, 0, 0, 3, 0, 0, 0];
let inteletualnaPawel_Ostrowski = [269, 5, 1, 45, 21, 57, 1, 32, 0, 8];
let inteletualnaAndrzej_Domagala =[442, 0, 0, 10, 33, 0, 33, 0, 3, 0];
let inteletualnaMateusz_Tchorz = [2, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMarysia_Gajek= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Klimont= [1, 0, 0, 1, 0, 0, 0, 2, 0, 0]; 
// ---
let inteletualnaJan_Wasilewski= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// --
let inteletualnaAdrian_Szarek= [0, 0, 0, 0, 0, 0, 1, 0, 0, 0]; 
//--
let inteletualnaFaustyna_Porebska= [2, 99, 99, 1, 0, 0, 0, 0, 24, 18];
//--
let inteletualnaCezary_Serkis= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaRadosław_Bany= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAntek_Domagała= [8, 0, 0, 3, 0, 0, 4, 0, 0, 0];
let inteletualnaŁukasz_Szarga = [1, 0, 0, 1, 0, 0, 0, 0, 0, 0];
let inteletualnaPiotr_Rodziewicz= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaMaciej_Mikulski= [2, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualna_Kuba_Baryłka= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKrzysztof_Oleszkiewicz= [0, 0, 0, 3, 0, 0, 0, 0, 0, 1];
let inteletualnaKuba_Kryk= [2, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaPaweł_Jurkowski= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//--
let inteletualnaAndzelika_Ksis=  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKarolina_Radomska =  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//--
let inteletualnaKacper_Seredyn= [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaAndrzej_Wiśniewski= [18, 0, 0, 1, 0, 0, 0, 0, 0, 0];
//--

let inteletualnaPatrycja_Sonta= [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//--
let inteletualnaMateusz_Barzenc = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaDamian_Lesik = [1, 0, 0, 2, 11, 0, 1, 1, 0, 0];
let inteletualnaJulia_Netczuk = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let inteletualnaKacper_Kania = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



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
                  label: 'Marysia Gajek',
                  data: inteletualnaMarysia_Gajek,
                  backgroundColor: '#3B0964',
              },
              {
                  label: 'Piotr Klimont',
                  data: inteletualnaPiotr_Klimont,
                  backgroundColor: '#4A0C6B',
              },
              {
                  label: 'Jan Wasilewski',
                  data: inteletualnaJan_Wasilewski,
                  backgroundColor: '#5A116E',
              },
              {
                  label: 'Adrian Szarek',
                  data: inteletualnaAdrian_Szarek ,
                  backgroundColor: '#69166E',
              },
              {
                  label: 'Faustyna Porębska',
                  data: inteletualnaFaustyna_Porebska,
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
                  label: 'Andzelika Ksiś',
                  data: inteletualnaAndzelika_Ksis,
                  backgroundColor: '#F8890C',
              },
              {
                  label: 'Karolina Radomska',
                  data: inteletualnaKarolina_Radomska,
                  backgroundColor: '#FB9B06',
              },
              {
                  label: 'Andrzej Wiśniewski',
                  data: inteletualnaAndrzej_Wiśniewski,
                  backgroundColor: '#FCAC11',
              },
              {
                  label: 'Patrycja Sońta',
                  data: inteletualnaPatrycja_Sonta,
                  backgroundColor: '#F7D13D',
              },
              {
                  label: 'Kacper Seredyn',
                  data: inteletualnaKacper_Seredyn,
                  backgroundColor: '#F3E55D',
              },
              {
                  label: 'Mateusz Barzenc',
                  data: inteletualnaMateusz_Barzenc,
                  backgroundColor: '#F2F482',
              },
              {
                label: 'Damian Lesik',
                data: inteletualnaDamian_Lesik,
                backgroundColor: '#E4E77A',
            },
            {
                label: 'Julia Netczuk',
                data: inteletualnaJulia_Netczuk,
                backgroundColor: '#D8DA92',
            },
            {
                label: 'kacper Kania',
                data: inteletualnaKacper_Kania,
                backgroundColor: '#949563',
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


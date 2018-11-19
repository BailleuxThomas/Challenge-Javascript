// let graph1 = document.createElement("div");
// graph1.setAttribute("id","graphique1")

// let connect = document.getElementById("table1");
// connect.insertAdjacentHTML("beforebegin",graph1);

//     let svg = dimple.newSvg("#graphique1", 800, 600);
//     let data = [
//       { "Word":"Hello", "Awesomeness":2000 },
//       { "Word":"World", "Awesomeness":3000 }
//     ];
//     let chart = new dimple.chart(svg, data);
//     chart.addCategoryAxis("x", "Word");
//     chart.addMeasureAxis("y", "Awesomeness");
//     chart.addSeries(null, dimple.plot.bar);
//     chart.draw();

// ------------------------------------------------------------------------------------

    // Récupération des tableaux
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
    
    // Création de la div des graphiques
    let createGraphic = (nom, cible) => {
        let div = document.createElement('div');
        div.id = nom;
        cible.insertAdjacentElement('beforebegin', div);
        
    }
    createGraphic('graph1', table1);

    // // Insertion du premier graphique
    let svg = dimple.newSvg("#graph1", 640, 480);


let table = document.querySelectorAll('tbody');  console.log(table);
let table01 = table[0];   console.log(table01);
let tr = table01.querySelectorAll('tr'); console.log(tr);
let td = table01.querySelectorAll('td:nth-child(2)'); console.log(td);
let tableall = table01.querySelectorAll('tr');


// Changement de pays avec ses informations
console.log(table01.querySelectorAll('tr:nth-child(2)')[0].innerText);
console.log(table01.querySelectorAll('td:nth-child(2)')[0].innerText);

// Ne pas prendre en compte le pays

//console.log(table01.querySelectorAll("tr")[1].querySelectorAll("td")[1]);

let nombrenombre = [];
for (let i = 1; i < 11; i++) {
nombrenombre.push(table01.querySelectorAll("tr")[1].querySelectorAll("td")[1].innerHTML);
} //console.log(nombrenombre);

///PAYS

// console.log("blabla" + tr[35].querySelectorAll('td')[0].innerHTML);

console.log(tableall[1].querySelectorAll('td:nth-child(2)'));
// console.log(tableall[35].querySelectorAll('td:nth-child(2)'));

let pays = [];
for (let i = 1; i < 35; i++) {
  pays.push(tr[i].querySelectorAll('td')[0].innerHTML)
} console.log(pays);

let annee = [];
for (let i = 2; i < 11; i++) {
  annee.push(table01.querySelectorAll("tr")[0].querySelectorAll("th")[i].innerText);
} console.log(annee);


console.log()

// Tableau BELGIQUE TERMINE
// let belgique = [];
// for (let i = 0; i < annee.length; i++) {
//   belgique.push(annee[i].innerHTML);
// } console.log(belgique);




// table1obj(); 

// let data = [
// { "Année":"2002", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2002", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2003", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2004", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2005", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2006", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2007", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2008", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2009", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2010", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2011", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// { "Année":"2012", "Nombre (en milliers)": Belgiquenombre, "Pays":Pays },
// ];

// var chart = new dimple.chart(svg, data);
// chart.addCategoryAxis("x", "Année");
// chart.addMeasureAxis("y", "Nombre (en milliers)");
// chart.addSeries("Pays", dimple.plot.line);
// chart.addLegend(60, 10, 500, 20, "Belgique");
// chart.draw();





















    // // Récupération des tableaux
    // const table1 = document.getElementById('table1');
    // const table2 = document.getElementById('table2');
    
    // // Création de la div des graphiques
    // let createGraphic = (nom, cible) => {
    //     let div = document.createElement('div');
    //     div.id = nom;
    //     cible.insertAdjacentElement('beforebegin', div);
        
    // }
    // createGraphic('graph1', table1);

    // // // Insertion du premier graphique
    // let svg = dimple.newSvg("#graph1", 640, 480);
    // let data = [
    //   { "Année":"2002", "Nombre (en milliers)":1012.8, "Pays":"Belgique"},
    //   { "Année":"2003", "Nombre (en milliers)":1007.8,  "Pays":"Belgique"},
    //   { "Année":"2004", "Nombre (en milliers)":1013.7,  "Pays":"Belgique"},
    //   { "Année":"2005", "Nombre (en milliers)":999.4,   "Pays":"Belgique"},
    //   { "Année":"2006", "Nombre (en milliers)":1022.8,  "Pays":"Belgique"},
    //   { "Année":"2007", "Nombre (en milliers)":1034.4,  "Pays":"Belgique"},
    //   { "Année":"2008", "Nombre (en milliers)":1043.6,  "Pays":"Belgique"},
    //   { "Année":"2009", "Nombre (en milliers)":1067.3,  "Pays":"Belgique"},
    //   { "Année":"2010", "Nombre (en milliers)":1072.0, "Pays":"Belgique"},
    //   { "Année":"2011", "Nombre (en milliers)":1111.0, "Pays":"Belgique"},
    //   { "Année":"2012", "Nombre (en milliers)":1073.8, "Pays":"Belgique"},
    // ];
    // var chart = new dimple.chart(svg, data);
    // chart.addCategoryAxis("x", "Année");
    // chart.addMeasureAxis("y", "Nombre (en milliers)");
    // chart.addSeries("Pays", dimple.plot.line);
    // chart.addLegend(60, 10, 500, 20, "Belgique");
    // chart.draw();



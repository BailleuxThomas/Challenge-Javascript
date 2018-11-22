// let table = document.querySelectorAll('tbody');  console.log(table);
// let table1 = table[0];   console.log(table1);
// let tr = table1.querySelectorAll('tr'); console.log(tr);
// let td = table1.querySelectorAll('td:nth-child(2)'); console.log(td);
// let tableall = table1.querySelectorAll('tr');
// let pays = [];


// ///PAYS

// console.log(tableall[1].querySelectorAll('td:nth-child(2)'));
// console.log(tableall[35].querySelectorAll('td:nth-child(2)'));


// for (let i = 1; i < 35; i++) {
//   pays.push(tr[i].querySelectorAll('td')[0].innerHTML)
// } console.log(pays);

// console.log(tr[35].querySelectorAll('td')[0].innerHTML);


// let année = [];
// for (let i = 0; i < 1; i++) {
//   année.push(tr[i].innerText); 
// } console.log(année);


// let nombrebelgique = [];
// for (let i = 0; i < 1; i++) {
//   nombrebelgique.push(tr[i].innerText);
// } console.log(nombrebelgique);







let divGraphique1 = document.createElement("div");
let x = document.getElementById("mw-content-text"); //ligne 616 parent le plus proche du tableau

        let table1 = document.getElementById("table1");
        x.insertBefore(divGraphique1,table1);
        divGraphique1.setAttribute("id","divTable1");

    //récupération des données et création d'un tableau:
        //source des données de table1
            let tbody = table1.getElementsByTagName("tbody");
            let tr = tbody[0].getElementsByTagName("tr");
        //tableau de données:
            let donnees=[];
            let fonctionTableau=()=>{
                for (i=1;i<tr.length;i++){ //i=1 ne garde pas les données du n° de pays
                    let pays=[];
                    let th = tr[i].getElementsByTagName("th");
                    let div = th[0].getElementsByTagName("div");
                    let number = div[0].innerHTML;
                    pays.push(number);
                    let td = tr[i].getElementsByTagName("td");
                        for (y=0;y<td.length;y++){
                            let contenu = td[y].innerHTML;
                            if(contenu != ":"){
                                pays.push(contenu);
                            }
                        }
                    donnees.push(pays);
                }
            }
            fonctionTableau();
            
    //conception du graphique via dimple (attention ajout du script dimple dans l'HTML)
    let svg = dimple.newSvg("#divTable1", 800, 800);
    data = [];
    for (i=0;i<donnees.length;i++){
        for (j=2002;j<2013;j++){
            let year = { "Année":j, "Infractions":donnees[i][j-2000],  "Pays": donnees[i][1] };
            if (year.Infractions != undefined){
                data.push(year);
            }
        }
    }
    var myChart = new dimple.chart(svg, data);
    myChart.addCategoryAxis("x", "Année");
    myChart.addMeasureAxis("y", "Infractions");
    myChart.addSeries("Pays", dimple.plot.bar);
    myChart.addLegend(0, 10, 1000, 250);
    myChart.draw();









    //tableau 2//
    let table2 = document.getElementById('table2');
    let divGraphique2 = document.createElement("div");

    divGraphique2.id="dimple2";
        
        table2.parentNode.insertBefore(divGraphique2,table2);
        
    //récupération des données et création d'un tableau:
        //source des données de table2
            let tbody2 = table2.getElementsByTagName("tbody");
            let tr2 = tbody2[0].getElementsByTagName("tr");
        //tableau de données:
            let donnees2=[];
            let fonctionTableau2=()=>{
                for (i=1;i<tr2.length;i++){ //i=1 ne garde pas les données du n° de pays
                    let pays=[];
                    let th2 = tr2[i].getElementsByTagName("th");
                    let div2 = th2[0].getElementsByTagName("div");
                    let number2 = div2[0].innerHTML;
                    pays.push(number2);
                    let td2 = tr2[i].getElementsByTagName("td");
                        for (y=0;y<td2.length;y++){
                            let contenu2 = td2[y].innerHTML;
                            if(contenu2 != ":"){
                                pays.push(contenu2);
                            }
                        }
                    donnees2.push(pays);
                }
            }
            fonctionTableau2();
            // console.log(donnees2);
            
    //conception du graphique via dimple (attention ajout du script dimple dans l'HTML)
    let svg2 = dimple.newSvg("#dimple2", 800, 800);
    data2 = [];
    for (ii=0;ii<donnees2.length;ii++){
        for (jj=2;jj<4;jj++){
            let year2 = { "Année":jj+2000, "crimes":donnees2[ii][jj],  "Pays": donnees2[ii][1] };
            if (year2.crimes != undefined){
                data2.push(year2);
            }
        }
    }
    let chart2 = new dimple.chart(svg2, data2);
    chart2.addCategoryAxis("x", "Année");
    chart2.addMeasureAxis("y", "crimes");
    chart2.addSeries("Pays", dimple.plot.bar);
    chart2.addLegend(0, 0, 900, 250);
    chart2.draw();




    // tableau 3 //

    let table3 = document.getElementById('bodyContent');
    let divGraphique3 = document.createElement("div");
    divGraphique3.id="dimple3";

    table3.parentNode.insertBefore(divGraphique3,table3);


// let svg3 = dimple.newSvg("#dimple3", 800, 800);

// let yMin = -30;
// let yMax = 30;
// xLabel = "Value",
// yLabel = "Value";

// let turbo = () => {
// let dataPoints = [];
// $.getJSON("https://inside.becode.org/api/v1/data/random.json", function(data) {  
//     $.each(data, function(key, value){
//         dataPoints.push({x: value[0], y: parseInt(value[1])});
//     });
// });

//     let chart3 = new dimple.chart(svg3, dataPoints);
//     let a = chart3.addCategoryAxis("x", "Nombre");
//     let y1 = chart3.addMeasureAxis("y", "Value" );
//     let y2 = chart3.addMeasureAxis("y", "Value");
//     y1.overrideMin = -30;
//     y1.overrideMax = 30;
//     y2.overrideMin = -30;
//     y2.overrideMax = 30;
//     y2.hidden = true;
//     chart3.addSeries(null, dimple.plot.line, [a, y2]);
//     chart3.draw();

//     console.log(dataPoints)

// }

// turbo();





let databecode =[] ;
function loadDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
databecode = JSON.parse(this.responseText);
console.log(databecode);


data2 = [];
function updateChart() {
    for (i=0; i<2; i++) {
        svg.remove();
        xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
        xhttp.send();
        data.push(y);
        data2 = [...data,data2];
        // data2 = data2.contact(data);
    
    }

}
setTimeout(function(){updateChart()}, 5000);

    var svg = dimple.newSvg("#dimple3", 800, 600);
    var data = []; 
    for (let i = 0; i < databecode.length; i++) {
        let y = {"Nombre":databecode[i][0], "Value":databecode[i][1]};
        data.push(y);           
    }
    console.log(data)

    var chart = new dimple.chart(svg, data);
    var x = chart.addCategoryAxis("x", "Nombre");
    var y1 = chart.addMeasureAxis("y", "Valeur" );
    var y2 = chart.addMeasureAxis("y", "Value");
    y1.overrideMin = -80;
    y1.overrideMax = 80;
    y2.overrideMin = -80;
    y2.overrideMax = 80;
    y2.hidden = true;
    chart.addSeries(null, dimple.plot.line, [x, y2]);
    chart.draw();
    
    let coucou =() => {
    setTimeout(function(){coucou()}, 0);
}    
          }
        };

xhttp.open("GET", "https://inside.becode.org/api/v1/data/random.json", true);
xhttp.send();





}
loadDoc();
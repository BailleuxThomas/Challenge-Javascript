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


    let table3 = document.getElementById('firstHeading');
    let divGraphique3 = document.createElement("div");
    divGraphique3.id="dimple3";

    table3.parentNode.insertBefore(divGraphique3,table3);


let svg3 = dimple.newSvg("#dimple3", 800, 800);

let dataPoints = [];
$.getJSON("https://inside.becode.org/api/v1/data/random.json", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
});
console.log(dataPoints)


    let chart3 = new dimple.chart(svg3, dataPoints);
    chart3.addCategoryAxis("x", "value");
    chart3.addMeasureAxis("y", "value");
    chart3.addSeries("pays", dimple.plot.line);
    chart3.addLegend(0, 0, 900, 350);
    chart3.draw();




    y2.overrideMax = 30;
    y2.overrideMin = -30;

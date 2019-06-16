console.log("Hallo :)");
window.onload = function(){

    console.log("Objekte wurden geladen");
    document.getElementById("1").addEventListener("click", ChangeButton);
    document.getElementById("2").addEventListener("click", LOL1);
    document.getElementById("3").addEventListener("click", LOL2);
    newtext();
}

// HTML-Elemente über TypeScript
function newtext() {
    let heading = document.createElement("h1");
    let node = document.createTextNode("Grünes Monster");
    heading.appendChild(node);
    let element = document.getElementById("id10");
    element.appendChild(heading);
    let para = document.createElement("p");
    node = document.createTextNode("Lernt mich kennen");
    para.appendChild(node);
    element = document.getElementById("id10");
    element.appendChild(para);
}

// HTML-Element ändert sich
function ChangeButton() {
    console.log("1 wurde gedrückt");
    document.getElementById("1").innerHTML = "I bims"; 
}
// HTML Element Klasse ändern sich 
function LOL1() {
    console.log("2 wurde gedrückt");
    document.getElementById("2").className = "gedrückter Button"; 
    console.log("Die Klasse von 2 hat sich in gedrückter Button geändert");
    document.getElementById("2").innerHTML = "Jeff"
}
// Rechnungen auf der Konsole
function LOL2() {
    console.log("3 wurde gedrückt");
    document.getElementById("3").innerHTML = "cool"
    let Zahl1 : number = 3;
    let Zahl2 : number = 4;
    let Wort1 : string = "Wie ";
    let Wort2 : string = "gehts ";
    let Wort3 : string = "dir? ";
    console.log("Rechnungen");
    console.log(Zahl1 + Zahl2);
    console.log(Wort1 + Wort2);
    console.log(Wort2 + Zahl2);
}
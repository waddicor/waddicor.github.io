
window.onload = function () {           
    document.getElementById("Deck",).addEventListener("click", drawCard, false);
    generateCards();
    gamePlay();
    buildHTML();
    console.log("Seite geladen");

}      


//Variablen
//let cardColor : string [] = ["red", "orange", "green", "blue"]
//let cardNumber : number [] = [1, 2, 3, 4, 5, 6, 7, 8]

let Player : Card[] = [];
let Computer : Card[] = [];
let Deck : Card[] = [];
let Ablage : Card[] = [];




//Cardinterface
interface Card {
    cardColor : string;     //Farbe der Karte
    cardNumber : number;    // Wert der Karte
    img : string;           // wo das Bild der Karte zu finden ist
}


//Funktionen
function generateCards () { //Karten werden zu Beginn generiert und ins Deck gepushed

    let r1: Card = {
        cardColor : "rot",             
        cardNumber : 1,                 
        img : "img/red1.png"              
    };
    Deck.push(r1);

    let r2: Card = {
        cardColor : "rot",
        cardNumber : 2,
        img : "img/red2.png"
    };
    Deck.push(r2);

    let r3: Card = {
        cardColor : "rot",
        cardNumber : 3,
        img : "img/red3.png"
    };
    Deck.push(r3);

    let r4: Card = {
        cardColor : "rot",
        cardNumber : 4,
        img : "img/red4.png"
    };
    Deck.push(r4);

    let r5: Card = {
        cardColor : "rot",
        cardNumber : 5,
        img : "img/red5.png"
    };
    Deck.push(r5);

    let r6: Card = {
        cardColor : "rot",
        cardNumber : 6,
        img : "img/red6.png"
    };
    Deck.push(r6);

    let r7: Card = {
        cardColor : "rot",
        cardNumber : 7,
        img : "img/red7.png"
    };
    Deck.push(r7);

    let r8: Card = {
        cardColor : "rot",
        cardNumber : 8,
        img : "img/red8.png"
    };
    Deck.push(r8);

    let o1: Card = {
        cardColor : "orange",
        cardNumber : 1,
        img : "img/o1.png"
    };
    Deck.push(o1);

    let o2: Card = {
        cardColor : "orange",
        cardNumber : 2,
        img : "img/o2.png"
    };
    Deck.push(o2);

    let o3: Card = {
        cardColor : "orange",
        cardNumber : 3,
        img : "img/o3.png"
    };
    Deck.push(o3);

    let o4: Card = {
        cardColor : "orange",
        cardNumber : 4,
        img : "img/o4.png"
    };
    Deck.push(o4);
    
    let o5: Card = {
        cardColor : "orange",
        cardNumber : 5,
        img : "img/o5.png"
    };
    Deck.push(o5);

    let o6: Card = {
        cardColor : "orange",
        cardNumber : 6,
        img : "img/o6.png"
    };
    Deck.push(o6);

    let o7: Card = {
        cardColor : "orange",
        cardNumber : 7,
        img : "img/o7.png"
    };
    Deck.push(o7);

    let o8: Card = {
        cardColor : "orange",
        cardNumber : 8,
        img : "img/o8.png"
    };
    Deck.push(o8);

    let gr1: Card = {
        cardColor : "grün",
        cardNumber : 1,
        img : "img/gr1.png"
    };
    Deck.push(gr1);

    let gr2: Card = {
        cardColor : "grün",
        cardNumber : 2,
        img : "img/gr2.png"
    };
    Deck.push(gr2);

    let gr3: Card = {
        cardColor : "grün",
        cardNumber : 3,
        img : "img/gr3.png"
    };
    Deck.push(gr3);

    let gr4: Card = {
        cardColor : "grün",
        cardNumber : 4,
        img : "img/gr4.png"
    };
    Deck.push(gr4);

    let gr5: Card = {
        cardColor : "grün",
        cardNumber : 5,
        img : "img/gr5.png"
    };
    Deck.push(gr5);

    let gr6: Card = {
        cardColor : "grün",
        cardNumber : 6,
        img : "img/gr6.png"
    };
    Deck.push(gr6);

    let gr7: Card = {
        cardColor : "grün",
        cardNumber : 7,
        img : "img/gr7.png"
    };
    Deck.push(gr7);

    let gr8: Card = {
        cardColor : "grün",
        cardNumber : 8,
        img : "img/gr8.png"
    };
    Deck.push(gr8);

    let b1: Card = {
        cardColor : "blau",
        cardNumber : 1,
        img : "img/bl1.png"
    };
    Deck.push(b1);

    let b2: Card = {
        cardColor : "blau",
        cardNumber : 2,
        img : "img/bl2.png"
    };
    Deck.push(b2);

    let b3: Card = {
        cardColor : "blau",
        cardNumber : 3,
        img : "img/bl3.png"
    };
    Deck.push(b3);

    let b4: Card = {
        cardColor : "blau",
        cardNumber : 4,
        img : "img/bl4.png"
    };
    Deck.push(b4);

    let b5: Card = {
        cardColor : "blau",
        cardNumber : 5,
        img : "img/bl5.png"
    };
    Deck.push(b5);

    let b6: Card = {
        cardColor : "blau",
        cardNumber : 6,
        img : "img/bl6.png"
    };
    Deck.push(b6);

    let b7: Card = {
        cardColor : "blau",
        cardNumber : 7,
        img : "img/bl7.png"
    };
    Deck.push(b7);

    let b8: Card = {
        cardColor : "blau",
        cardNumber : 8,
        img : "img/bl8.png"
    };
    Deck.push(b8);

    Deck.sort(function(a, b){return 0.5 - Math.random()});      //Deck mischen
}




//Starte Spiel
function gamePlay() {                                //5 Karten werden an den Computer und Spieler verteilt
    for (let i = 0; i < 5; i++){        
        Computer.push(Deck[0]);
        Deck.splice(0,1);
        Player.push(Deck[0]);
        Deck.splice(0,1);
    }
    Ablage.push(Deck[0]);                           //1 Karte zum Spielbeginn auf der Ablage sonst könnte man ja nicht spielen
    Deck.splice(0,1);

    console.log("Karten an Spieler verteilt")
    console.log("Erste Karte offengelegt")
}




function buildHTML(){
document.getElementById("Player").innerHTML = "";                           //Die Karten des Spielers in HTML
for (let i: number = 0; i <= Player.length -1; i++) {
    let playerCard: HTMLImageElement = document.createElement("img");
    playerCard.innerHTML = "";
    playerCard.setAttribute("src", Player[i].img);
    playerCard.addEventListener("click", function() {playCard(i);}, false);
    document.getElementById("Player").appendChild(playerCard);
}

document.getElementById("Computer").innerHTML = "";                         //Computerkarten in HTML
for (let i: number = 0; i <= Computer.length -1; i++) {
    let computerCard: HTMLImageElement = document.createElement("img");
    computerCard.innerHTML = "";
    computerCard.setAttribute("src", "img/card back.png");                  
    document.getElementById("Computer").appendChild(computerCard);
}

document.getElementById("Deck").innerHTML = "";                             //Deckkarte wird erstellt
let deckCard: HTMLImageElement = document.createElement("img");
deckCard.setAttribute("src", "img/card back.png");
document.getElementById("Deck").appendChild(deckCard);


document.getElementById("Ablage").innerHTML = "";            
let ablageCard: HTMLImageElement = document.createElement("img");          //Der Abvlagestapel HTML
ablageCard.innerHTML = "";
ablageCard.setAttribute("src", Ablage[Ablage.length -1].img);
document.getElementById("Ablage").appendChild(ablageCard);
}


function drawCard(){                                                        //Function wenn man eine Karte vom Deck zieht
    Player.push(Deck[0]);      
    Deck.splice(0,1);
    buildHTML();
    computerPlay();
    console.log("Eine Karte wurde gezogen")
}

function computerPlay(){
    let gespieltYN: boolean = false;
    for(let i: number = 0; i<Computer.length; i++){             //Guckt Karten der Reihenfolge durch und legt die erste die legbar ist
        if (Computer[i].cardColor==Ablage[Ablage.length -1].cardColor||
            Computer[i].cardNumber==Ablage[Ablage.length -1].cardNumber){
            Ablage.push(Computer[i]);
            Computer.splice(i, 1);
            buildHTML();
            gespieltYN = true;
            break;
        }
    }
    if (gespieltYN==false){                                     //Falls keine legbar ist wird eine Nachgezogen
        Computer.push(Deck[0]);
        Deck.splice(0,1);
        buildHTML();
    }
} 

function playCard (clickedCard: number) {
    if (Player[clickedCard].cardColor==Ablage[Ablage.length -1].cardColor||             //guckt ob die Karte die vom Spieler geclickt wurde die gleiche Farbe oder gleiche Nummer wie Karte auf der Ablage hat. Wenn ja wird sie gespielt.
        Player[clickedCard].cardNumber==Ablage[Ablage.length -1].cardNumber){

    Ablage.push(Player[clickedCard]);
    Player.splice(clickedCard, 1);
    buildHTML();
    if (Player.length==0){                              // Falls der Array der Spielerkarten gleich 0 ist hat er gewonnen und diese Benachrichtigung erscheint          
        alert("Congratulations! You won.");                          
    }
    if (Computer.length==0){                            // Falls der Array der Computerkarten gleich 0 ist der verloren und diese Benachrichtigung erscheint
        alert("Congratulations! You lost.");
    }
    computerPlay();
}
console.log("Eine Karte wurde gespielt")
}








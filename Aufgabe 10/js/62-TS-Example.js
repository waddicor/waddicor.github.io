// BEISPIEL UND AUFGABE:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.
// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)
let saveImageSrc;
let monsterHolder = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName = "Tim"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP = 500 * 2; // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel = 500; // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
let playerlevel = 1;
let playerItems = "zerbrochenes Eisenschwert"; //WAffe
// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix = ["Verderbendes ", "Hässliches ", "Gesandter ", "komish ausehend ", "gezeichnetes ", "homo "]; // length = 10, da 10 Einträge. Von 0-9.
let monsterName = ["Kreatur", "Ding", "Teil", "Vier", "Irgendwas", "Affe"]; // length = 6, da 3 Einträge. Von 0-5.
let suffix = [" des Internets", " der Hölle", " aus Legenden", " vong Geschichten", "einfach ein Idiot", " des Grauens"]; // length = 10, da hier 10 Einträge sind. Von 0-9.
let monsterModifers = ["Ist nervig", "besoffen", "dicht", "", "voll", "blau", "Verwirrt", "berauscht", "benebelt", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterort = ["Stuggi", "Benz Town", "Der Kessel", "Schduagerd", "Stuttgart", "Porsche City"];
let Items = ["kaputte Bierflasche", "kaputtes Weinglas", "Bierdose", "Faust", "Feuerzeug für seinen Joint", "Kotze"];
//Waffen der Monster
//Bilder für Monster
let Bildquellen = ["monster1.png", "monster2.png", "monster3.png", "monster4.png", "monster5.png", "monster6.png", "monster7.png", "monster8.png", "monster9.png", "monster10.png",];
let PushArray = []; //Array für Push
let victory = false;
// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.
// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)      x
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false); //Ein Event wird erstellt wenn man auf den bUtton klickt.
    updatePlayerLevel(0, ""); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML);
    document.getElementById("Arraypusher").addEventListener("click", pusher);
    document.getElementById("fightAllMonsters").addEventListener("click", fightAllMonsters);
    document.getElementById("schwachemonster").addEventListener("click", fightAllWeakMonster); //Gegen SchwacheMonster kämpfen
    document.getElementById("fightWeakestMonster").addEventListener("click", fightWeakestMonster);
};
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert neues Monster. Dieses wird zum Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let Random = getRNGNumber(3) + 1; //Zwischen 1 und 3 Monster werden generiert
    for (let i = 0; i < Random; i++) // FOR Schleife
     {
        let newMonsterName = generateMonsterName(); // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP = generateMonsterHitPoints(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier = generateMonsterModifer(); // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newMonsterItem = generateMonsterItem();
        let newImageSource = saveImageSrc;
        let newmonsterort = generatemonsterort(); //Funktion für Monster ORt
        let newmonsterlevel = generatemonsterlevel(); // Funktion für neues Monster Level
        console.log("MonsterXP" + newMonsterXP);
        let newMonster = {
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            monsterItem: newMonsterItem,
            Bildpfad: newImageSource,
            monsterort: newmonsterort,
            monsterlevel: newmonsterlevel,
        };
        monsterArray.push(newMonster); // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 
        console.log(monsterArray[monsterArray.length - 1].monsterExperience); // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).              
        //monsterGenerateHTML(0);
        // Triggered Generierung von updateHTML
    }
    updateHTML();
}
function monstergenerateHTMLALL() {
    let Random = monsterArray.length;
    for (let i = 0; i < Random; i++) {
        console.log(i);
        monsterGenerateHTML(i);
    }
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML(count) {
    let holdingDiv = document.createElement("div"); // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + count); // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv); // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"
    let monsterName = document.createElement("p"); // Generiere einen <p>
    monsterName.innerHTML = monsterArray[count].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName);
    //LEbensraum
    let monsterort = document.createElement("p"); // Generiere einen <p>
    monsterort.innerHTML = monsterArray[count].monsterort.toString(); // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterort);
    let monsterexphtml = document.createElement("p"); // Generiere Erfahrung
    monsterexphtml.innerHTML = "EXP: " + monsterArray[count].monsterExperience.toString(); // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterexphtml);
    let monsterhlth = document.createElement("p"); // Generiere LEBEN
    monsterhlth.innerHTML = "Health: " + monsterArray[count].monsterHealthPoints.toString(); // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterhlth);
    // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterMod = document.createElement("p"); // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[count].monsterModifier[0] + " & " + monsterArray[count].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterImg = document.createElement("img"); // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", monsterArray[count].Bildpfad); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster"); // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
    let monsterlevel = document.createElement("p");
    monsterlevel.innerHTML = "Monster Level: " + monsterArray[count].monsterlevel.toString();
    holdingDiv.appendChild(monsterlevel);
    let monsterItem = document.createElement("p");
    monsterItem.innerHTML = "vorsicht! es/sie hat ein " + monsterArray[count].monsterItem;
    holdingDiv.appendChild(monsterItem);
    let monsterBtn = document.createElement("BUTTON"); // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn); // Füge den Button zu dem holding-div hinzu.
    let monsterCount = count; // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
    monsterBtn.addEventListener(// Füge dem Monster eine Funktion hinzu.
    'click', function () {
        fightMonster(monsterCount); // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
    }, false); // Ignoriert das false.
}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber) {
    /*let rngNumber: number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
    rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
    rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.
   // rngNumber = 0;                                                      // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.
    return rngNumber;                                                   // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
*/
    return Math.floor(Math.random() * _maxNumber);
}
// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() {
    let generatedMonsterName = "";
    // Monster-Vorname
    // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
    let rngNumber = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
    generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    // Monster-Mittelname
    rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
    generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.                
    generateNewImageSource(rngNumber);
    // Monster-Titel
    rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
    generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
    return generatedMonsterName;
}
// Wird für die Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterHitPoints() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
    let tempMonsterHP = 1 + getRNGNumber(10);
    return tempMonsterHP;
}
// Wird für die Erstellung der Monster-Lebenspunkte aufgerufen.
// Liefert eine variierende Zahl zurück.
function generateMonsterXP() {
    // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
    let tempMonsterXP = 100 + getRNGNumber(350);
    return tempMonsterXP;
}
// Wird für die Erstellung der Monster-Modifizierer aufgerufen.
// Liefert ein Array mit zwei Einträgen zurück.
function generateMonsterModifer() {
    let tempMonsterMod = []; // Initialisiere ein leeres Array (verhindert Folge-Fehler)
    tempMonsterMod[0] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 0 des Arrays auf einen Wert.
    tempMonsterMod[1] = monsterModifers[getRNGNumber(monsterModifers.length)]; // Setze Schublade 1 des Arrays auf einen Wert.
    return tempMonsterMod; // Gebe das hier zusammengesetzte Array wieder zurück.
}
function generateMonsterItem() {
    let tempMonsterItem;
    tempMonsterItem = Items[getRNGNumber(Items.length)];
    return tempMonsterItem;
}
function generateNewImageSource(MonsterName) {
    if (Bildquellen.length >= monsterName.length) {
        saveImageSrc = "imgs/" + Bildquellen[MonsterName];
    }
    else {
        saveImageSrc = "imgs/error.png";
    }
}
function generatemonsterort() {
    let orterstellen;
    orterstellen = monsterort[getRNGNumber(monsterort.length)];
    return orterstellen;
}
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index) {
    if (monsterArray[_index].monsterlevel < playerlevel) {
        console.log(monsterArray[_index].monsterlevel + " wurde von dir besiegt");
        playerXP += monsterArray[_index].monsterExperience; // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
        updatePlayerLevel(monsterArray[_index].monsterlevel, monsterArray[_index].monsterItem);
        updatePlayerItems(monsterArray[_index].monsterItem);
        // removeMonsters(_index);
        monsterArray.splice(_index, 1);
    }
    else { // Alternative für alle anderen Fälle
        console.log(monsterArray[_index].monsterlevel + " Tja du hast verloren");
        playerXP -= monsterArray[_index].monsterlevel;
        updatePlayerLevel(monsterArray[_index].monsterlevel, monsterArray[_index].monsterItem);
    }
    updateHTML();
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel(monsterlevel, monsterItem) {
    playerlevel = (Math.floor(playerXP / playerXPperLevel)) + 1; // Spieler-Level = XP / XPproLevel
    if (playerlevel >= 20 && victory == false) { // IF Bedingung wenn das Spielerlev. größer gleich wird kommt ein Windowsalert.
        window.alert("Gewinner, gewinner Huhn Abendessen");
        victory = true;
    }
    if (playerlevel <= 0) {
        alert("Du bist gestorben!");
    }
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + playerlevel + " (XP: " + playerXP + " / " + playerXPperLevel * (playerlevel + 1) + ")     Items: " + playerItems; // Baue den String für die Spieler-Info zusammen          
    console.log("Spieler " + playerName + " hat nun Level " + playerlevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)    außerdem hat er ein(e) " + " bekommen!"); // Spieler-Level in der Konsole.
}
//function updatePlayerxp//
//fügt demn Spieler neue Items hinzu
function updatePlayerItems(neuesItem) {
    playerItems += ", " + neuesItem;
}
//Neue Rücken vor nachdem die anderen ausgelöscht sind
function removeMonsters(_index) {
    //let tempMonsterArray: Monster[] = [];
    //document.getElementById(monsterHolder).innerHTML = "";
    //monsterArray = tempMonsterArray;
    //console.log("so viel is noch im array" + monsterArray.length);
    let tempMonsterArray = [];
    let count = 0;
    while (count < _index - 1) {
        tempMonsterArray[count] = monsterArray[count];
        console.log("das Temporäre Array ist  " + tempMonsterArray[count].monsterName);
        count++;
    }
    while (count < monsterArray.length - 1) {
        tempMonsterArray[count] = monsterArray[count + 1];
        console.log("das Temporäre Array ist  " + tempMonsterArray[count].monsterName);
        count++;
    }
    count = 1;
    monsterArray = [];
    monsterArray = tempMonsterArray;
    //while(count<=monsterArray.length){
    //monsterGenerateHTML(count);
    //count++;
}
function pusher() {
    PushArray.push(Math.random());
    console.log(PushArray);
}
function updateHTML() {
    clearMonsterCell();
    monstergenerateHTMLALL();
    console.log(getMonsterCount());
}
function getMonsterCount() {
    //Gibt dem Rückgabewert der Monster Anzahl
    return monsterArray.length;
}
//CLEAR MONSTER CELL Variable zuweisen
function clearMonsterCell() {
    //
    let monsterHoldingCell = document.getElementById("monsterHoldingCell");
    while (monsterHoldingCell.childElementCount > 0) {
        monsterHoldingCell.removeChild(monsterHoldingCell.firstChild);
    }
}
function generatemonsterlevel() {
    let monsterlevel = Math.floor(Math.random() * 10);
    return monsterlevel;
}
function fightAllMonsters() {
    for (let i = 0; i < monsterArray.length; i++) // FOR Schleife
     {
        fightMonster(i);
    }
    console.log("Es wird gegen alle Monster gekämpft");
}
function fightAllWeakMonster() {
    for (let i = monsterArray.length - 1; i >= 0; i--)
        if (monsterArray[i].monsterlevel < playerlevel) {
            fightMonster(i);
        }
}
function fightWeakestMonster() {
    let _index = 0;
    let findweakeastmonster = monsterArray[0].monsterlevel;
    for (let i = monsterArray.length - 1; i >= 0; i--) {
        console.log("for schleife wird ausgeführt, JUCHUU :D ");
        if (monsterArray[i].monsterlevel < findweakeastmonster) {
            _index = i;
            findweakeastmonster = monsterArray[i].monsterlevel;
            console.log("Schwächste Monster bekämpft");
        }
    }
    if (monsterArray[_index].monsterlevel < playerlevel) {
        fightMonster(_index);
    }
}
//# sourceMappingURL=62-TS-Example.js.map
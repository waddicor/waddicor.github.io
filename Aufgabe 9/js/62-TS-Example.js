// BEISPIEL UND AUFGABE1:
// Dieses Skript soll als Beispiel dazu dienen, wie Interfaces und Arrays genutzt werden können.
// Hier wird ein ungefährer Aufbau eines simplen Klick-Spiels gezeigt. Der Nutzer kann dabei durch Button ein neues Monster erstellen.
// Zu beginn werden hier zuerst Interfaces, danach Variablen deklariert.
// Weiter unten kommen dann die Funktionen.
// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer)
let monsterHolder = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName = "Spielername"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP = 0; // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel = 500;
let money = 0;
// Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten.
let prefix = ["Verderbendes", "Hässliches", "Gesandter", "komish ausehend", "gezeichnetes", "homo",];
let monsterName = ["Kreatur", "Ding", "Teil", "Vier", "Irgendwas", "Affe",];
let suffix = [" des Internets", " der Hölle", " aus Legenden", " vong Geschichten", "einfach ein Idiot", " des Grauens",];
let monsterModifers = ["Ist nervig", "Linkshänder", "Bier-Connoisseur", "Verfehlt häufig", "Prokrastiniert", "Müde", "Verwirrt", "Wasserscheu", "Bipolar", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterImages = ["monster1.png", "monster2.png", "monster3.png", "monster4.png", "monster5.png", "monster6.png", "monster7.png", "monster8.png", "monster9.png", "monster10.png"];
// -- Initialisierung für viele/variable Anzahl an Monster --
let PushArray = [];
let monsterArray = []; // Das Haupt-Array
console.log(monsterArray); // Monster-Array zu beginn. Ist leer.
// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
};
//console.log(document.getElementById("monsterSpawner").innerHTML );  
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let tempRandom = getRNGNumber(3) + 1;
    for (let i = 0; i < tempRandom; i++) {
        let newMonsterName = generateMonsterName(); // Eigens-gebaute Funktion, welche einen string zurück gibt.
        let newMonsterHP = generateMonsterHitPoints(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterXP = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
        let newMonsterModifier = generateMonsterModifer();
        let newMonsterImage = generateMonsterImage();
        let newMonsterMoney = generateMonsterMoney();
        // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
        let newMonster = {
            monsterName: newMonsterName,
            monsterHealthPoints: newMonsterHP,
            monsterExperience: newMonsterXP,
            monsterModifier: newMonsterModifier,
            monsterImage: newMonsterImage,
            monsterMoney: newMonsterMoney,
        };
        monsterArray.push(newMonster);
        console.log("Ein neues Monster erscheint mit" + monsterArray[monsterArray.length - 1].monsterExperience + "XP gespawnt"); // Monster wird in diesem Schritt zu dem Array hinzugefügt 
        // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
        // Triggered die Generierung vong HTML
    }
    updateHTML(); //neue Funktion
    function updateHTML() {
        clearMonsterCell(); //Funktion löscht später alles
        monsterGenerateHTMLAll(); // Funktion stellt es wieder her, ohne bekämpftes Monster
        console.log("Anzahl der Monster" + getMonsterCount());
    }
    function clearMonsterCell() {
        console.log("");
        let monsterHoldingDiv = document.getElementById(monsterHolder);
        while (monsterHoldingDiv.firstChild) {
            monsterHoldingDiv.removeChild(monsterHoldingDiv.firstChild);
        }
        console.log("Alles gelöscht");
    }
    function monsterGenerateHTMLAll() {
        for (let i = 1; i <= monsterArray.length; i++) {
            monsterGenerateHTML(i);
            console.log("fertig" + i);
        }
        console.log("already done");
    }
    // Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
    function monsterGenerateHTML(count) {
        let holdingDiv = document.createElement("div"); // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
        holdingDiv.setAttribute("id", "monster" + count); // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
        holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals.
        document.getElementById(monsterHolder).appendChild(holdingDiv);
        // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"
        let monsterName = document.createElement("p"); // Generiere einen <p>
        monsterName.innerHTML = monsterArray[count - 1].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
        holdingDiv.appendChild(monsterName); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
        let monsterMod = document.createElement("p"); // Generiere einen <p>
        monsterMod.innerHTML = monsterArray[count - 1].monsterModifier[0] + ", " + monsterArray[monsterArray.length - 1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
        holdingDiv.appendChild(monsterMod);
        let monsterImg = document.createElement("img"); // Erstelle ein <img>-Element
        monsterImg.setAttribute("src", "imgs/" + monsterArray[count - 1].monsterImage); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
        monsterImg.setAttribute("alt", "Schreckliches Monster"); // Das alt für das Bild wird hier festgelegt.
        holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
        let monsterMon = document.createElement("p"); // Generiere einen <p>
        monsterMon.innerHTML = "Mios im Konto" + monsterArray[count - 1].monsterMoney; // Inhalt des <p>: Monster-Money
        holdingDiv.appendChild(monsterMon);
        let monsterBtn = document.createElement("BUTTON"); // Erstelle ein <button>-Element
        monsterBtn.innerHTML = "Fight!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
        holdingDiv.appendChild(monsterBtn); // Füge den Button zu dem holding-div hinzu.
        let monsterCount = count - 1; // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
        console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
        monsterBtn.addEventListener(// Füge dem Monster eine Funktion hinzu.
        'click', function () {
            fightMonster(monsterCount); // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
        }, false); // Ignoriert das false.
        let monsterHP = document.createElement("p"); // Generiert einen <p>
        monsterHP.innerHTML = "Health Points: " + monsterArray[count - 1].monsterHealthPoints; // Inhalt des <p>: Monster-Modifizierer null und eins
        holdingDiv.appendChild(monsterHP);
    }
    // Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
    // [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
    // Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
    function getRNGNumber(_maxNumber) {
        //let rngNumber : number = Math.random();                             // Macht folgendes: Generiere eine zufällige Komma-Zahl zwischen 0 - 1.
        //rngNumber = rngNumber * _maxNumber;                                 // Multipliziere diese Zahl mit der Länge des entsprechenden Array (hier: _maxNumber, ein Parameter, siehe in der runden Klammer der Funktion).
        //rngNumber = Math.floor(rngNumber);                                  // Floore diese Zahl, damit diese nun Ganzzahlig ist.                                                     // Diese Zeile ist einer der drei Fehler in den Funktionen. Ich bin mal so frei und vermerke das hier. Einfach löschen und alles wird besser.
        //return rngNumber;                                                   // Gebe diese Zahl zurück, Funktion kann ähnlich einer Variable in Rechnungen genutzt werden.
        return Math.floor(Math.random() * _maxNumber);
    }
    // Diese Funktion gibt einen zusammengewürfelten Namen zurück.
    // Wird für die Monster-generierung verwendet!
    // Liefert einen zusammengesetzten String zurück.
    function generateMonsterName() {
        let generatedMonsterName = ""; // Erstellt einen leeren String für das Monster
        // Monster-Vorname
        // Mathematik! Hier wird eine zufällig-generierte Zahl benötigt.
        let rngNumber = getRNGNumber(prefix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
        generatedMonsterName = prefix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
        // Monster-Mittelname
        rngNumber = getRNGNumber(monsterName.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Mitte) zu generieren.
        generatedMonsterName += monsterName[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
        // Monster-Titel
        rngNumber = getRNGNumber(suffix.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Ende) zu generieren.
        generatedMonsterName += suffix[rngNumber]; // Füge den Monsternamen zusammen: nimm aus dem entsprechenden Array mit der zufallsgenerierten Zahl den entsprechenden Eintrag.
        return generatedMonsterName;
    }
    // Wird für die Monster Health Points aufgerufen.
    // Liefert eine variierende Zahl zurück.
    function generateMonsterHitPoints() {
        // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 10) + 1 zurück.
        let tempMonsterHP = 1 + getRNGNumber(10);
        return tempMonsterHP;
    }
    // Wird für die Erstellung der Monster Health Points aufgerufen.
    // Liefert eine variierende Zahl zurück.
    function generateMonsterXP() {
        // Diese Funktion gibt eine zufällige ganze Zahl (zwischen 0 und 350) + 100 zurück.
        let tempMonsterXP = 100 + getRNGNumber(3550);
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
    function generateMonsterImage() {
        let image = "";
        let rngNumber = getRNGNumber(monsterImages.length); // Der Rückgabewert der Funktion wird hier verwendet um den entsprechenden Teil des Namens (hier: Anfang) zu generieren.
        image = monsterImages[rngNumber];
        return image;
    }
    function generateMonsterMoney() {
        let money = getRNGNumber(100);
        return money;
    }
    // Aufgerufen, wenn man auf den Button klickt.
    // Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
    function fightMonster(_index) {
        console.log("Spieler kämpft gegen Monster und gewinnt!"); // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
        console.log("Das Monster weigert sich zu verschwinden."); // nächste Stunde 
        playerXP += monsterArray[_index].monsterExperience;
        monsterArray.splice(_index, 1); // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
        updatePlayerLevel();
        updateHTML();
        //runAway();
    }
    //function runAway(){
    // monsterArray = [];
    // document.getElementById(monsterHolder).innerHTML = "";
    //}
    // Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
    function updatePlayerLevel() {
        let tempLevel = Math.floor(playerXP / playerXPperLevel + 1); // Spieler-Level = XP / XPproLevel
        document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
        console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
    }
    function getMonsterCount() {
        return monsterArray.length;
    }
}
//# sourceMappingURL=62-TS-Example.js.map
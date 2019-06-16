// ------- Variablen -------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Variablen: I (1 / einer) 
let monsterHolder = "monsterHoldingCell"; // ID für das Haupt-Element, in welchem die Monster sich befinden werden. Wird vielleicht mehrfach in dem Skript gebraucht, deshalb einmalig definitiert.
let playerName = "Spielername"; // Ein paar globale Variablen, welche den Spieler darstellen.
let playerXP = 0; // Stellt die gesammelte Erfahrung des Spielers dar.
let playerXPperLevel = 500;
let playerItems = "Schwert der Grauens"; // Da es nur einen Spieler gibt, ergibt sich noch nicht viel Sinn darin, für den Spieler ein interface (im Sinne der Programmierung) zu erstellen.
// Mehrere Arrays, welche jeweils Bauteile für Namen oder Eigenschaften der Monster beinhalten. lol
let prefix = ["Verderbendes", "Hässliches", "Gesandter", "komish ausehend", "gezeichnetes", "homo",]; // length = 6, da 6 Einträge. Von 0-5.
let monsterName = ["Kreatur", "Ding", "Teil", "Vier", "Irgendwas", "Affe",]; // length = 6, da 6 Einträge. Von 0-5.
let suffix = [" des Internets", " der Hölle", " aus Legenden", " vong Geschichten", "einfach ein Idiot", " des Grauens",]; // length = 6, da hier 6 Einträge sind. Von 0-5.
let monsterModifers = ["Ist nervig", "besoffen", "dicht", "", "voll", "blau", "Verwirrt", "berauscht", "benebelt", "Hat Schnupfen", "Verläuft sich oft"]; // Eine Reihe von zufälligen "Verstärkern" für das Monster.
let monsterWeapon = ["kaputte Bierflasche", "kaputtes Weinglas", "Bierdose", "Faust", "Feuerzeug für seinen Joint", "kotzen"];
let Images = ["imgs/001-monster-27.png", "imgs/002-monster-26.png", "imgs/003-monster-25.png", "imgs/018-monster-10.png", "imgs/019-monster-9.png", "imgs/022-monster-6.png", "imgs/025-monster-3.png", "imgs/011-monster-17.png", "imgs/007-monster-21.png"];
// -- Initialisierung für viele/variable Anzahl an Monster --
let monsterArray = []; // Das Haupt-Array wurde erstellt und initialisiert!
console.log(monsterArray); // Gebe das Monster-Array einmal zu beginn aus. Es sollte leer sein.
// ----------- Funktionen ----------- //
// INSGESAMT EINGEBAUTE FEHLER bei den Funktionen: IIIII (5 / fünf)
// Generelle onload-funktion um Event-Listener zum Dokument hinzuzufügen
window.onload = function () {
    document.getElementById("monsterSpawner").addEventListener("click", generateMonster, false);
    updatePlayerLevel(); // Zu Anfang wird durch eine Funktion ein HTML-Element mit Inhalt befüllt.
    console.log("" + document.getElementById("monsterSpawner").innerHTML);
};
//console.log(document.getElementById("monsterSpawner").innerHTML); 
//Nach dem auskommentieren dieser Line gin plötzlich alles :/ 
// Die Hauptfunktion, um ein Monster zu erstellen. Wird von einem Button ausgerufen.
// Generiert ein neues Monster. Dieses wird zu dem Monster-Array hinzugefügt.
// Ruft eine Funktion auf, welche dann das entsprechende HTML erzeugt.
function generateMonster() {
    let newMonsterName = generateMonsterName(); // Eigens-gebaute Funktion, welche einen string zurück gibt.
    let newMonsterHP = generateMonsterHitPoints(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterXP = generateMonsterXP(); // Eigens-gebaute Funktion, welche eine Zahl zurück gibt.
    let newMonsterModifier = generateMonsterModifer(); // Eigens-gebaute Funktion, welche ein string-Array zurück gibt.
    let newImage;
    let newMonsterWeapon = generatedMonsterWeapon();
    let newMonsterAge = generateMonsterAge();
    let newMonster = {
        monsterName: newMonsterName,
        monsterHealthPoints: newMonsterHP,
        monsterExperience: newMonsterXP,
        monsterImage: newImage,
        monsterModifier: newMonsterModifier,
        monsterWeapon: newMonsterWeapon,
        monsterAge: newMonsterAge,
    };
    monsterArray.push(newMonster);
    if (monsterArray.length != 0) // Monster wird erst in diesem Schritt zu dem Array hinzugefügt 
     {
        console.log(monsterArray[monsterArray.length - 1].monsterExperience); // Man kann nur auf Array-Teile zugreifen, welche definiert sind. -1 ist nicht definitiert (und wird es auch nie sein).
    }
    monsterGenerateHTML(); // Triggere die Generierung von HTML
}
// Generiert HTML-Elemente, welche dann einem Element untergeordnet werden. Erzeugt ebenfalls einen Event-Listener auf dem Button.
function monsterGenerateHTML() {
    let holdingDiv = document.createElement("div"); // Erstelle ein neues HTML-Element vom typ <div>. Es ist jedoch noch nicht zu sehen!
    holdingDiv.setAttribute("id", "monster" + monsterArray.length); // Die ID jedes neu-erstellten Monsters entspricht der aktuellen Array-Länge.
    holdingDiv.setAttribute("class", "monster"); // Klasse für Visuals.
    document.getElementById(monsterHolder).appendChild(holdingDiv); // Das HTML-Element muss erst noch zu einem Objekt hinzugefügt werden, in diesem Fall mit der id "monsterHoldingCell"
    let monsterName = document.createElement("p"); // Generiere einen <p>
    monsterName.innerHTML = monsterArray[monsterArray.length - 1].monsterName; // Inhalt des <p>: Monster-Name des letzten Monsters im Array.
    holdingDiv.appendChild(monsterName); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterMod = document.createElement("p"); // Generiere einen <p>
    monsterMod.innerHTML = monsterArray[monsterArray.length - 1].monsterModifier[0] + ", " + monsterArray[monsterArray.length - 1].monsterModifier[1]; // Inhalt des <p>: Monster-Modifizierer null und eins
    holdingDiv.appendChild(monsterMod); // Füge das <p> zum HTML-Dokument hinzu, indem es dem holding-Div angefügt wird.
    let monsterImg = document.createElement("img"); // Erstelle ein <img>-Element
    monsterImg.setAttribute("src", Images[generatedImage()]); // Der Pfad für das Bild muss über setAttribute festgelegt werden. Der Bildpfad kann natürlich auch anders aussehen.
    monsterImg.setAttribute("alt", "Schreckliches Monster"); // Das alt für das Bild wird hier festgelegt.
    holdingDiv.appendChild(monsterImg); // Füge das Bild zu dem holding-div hinzu (<div>, welche ein paar Zeilen zuvor erstellt worden ist)
    let monsterBtn = document.createElement("BUTTON"); // Erstelle ein <button>-Element
    monsterBtn.innerHTML = "Monster bekämpfen!"; // Verändere den Inhalt des HTML-Elementes. Der genaue Text ist dabei euch überlassen.
    holdingDiv.appendChild(monsterBtn); // Füge den Button zu dem holding-div hinzu.
    let monsterCount = monsterArray.length; // Die aktuelle Anzahl vorhandener Monster, zudem auch die neue Zahl für das Monster-Array.
    console.log("Aktuelle Anzahl an Monstern: " + monsterCount);
    let Weapon = document.createElement("p");
    Weapon.innerHTML = monsterArray[monsterArray.length - 1].monsterWeapon;
    holdingDiv.appendChild(Weapon);
    monsterBtn.addEventListener(// Füge dem Monster eine Funktion hinzu.
    'click', function () {
        fightMonster(monsterCount); // Wenn das Monster erstellt wird erhält die Funktion einen Parameter, welcher der aktuellen Anzahl entspricht.
    }, false); // Ignoriert das false.
}
// Wird für den Zugriff auf eine zufällige Stelle in einem Array aufgerufen.
// [ ] Optionale Aufgabe: verkleinere diesen Code auf eine Zeile mit nur einem Semikolon!
// Muss mit einer Zahl aufgerufen werden: getRNGNumber(5); // Liefert eine ganze Zahl zwischen 0 bis 4 zurück.
function getRNGNumber(_maxNumber) {
    return Math.floor(Math.random() * _maxNumber);
}
// Diese Funktion gibt einen zusammengewürfelten Namen zurück.
// Wird für die Monster-generierung verwendet!
// Liefert einen zusammengesetzten String zurück.
function generateMonsterName() {
    let generatedMonsterName = ""; // Erstelle einen leeren String für das Monster
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
function generatedMonsterWeapon() {
    let generatedMonsterWeapon = "";
    generatedMonsterWeapon = monsterWeapon[getRNGNumber(monsterWeapon.length)];
    return generatedMonsterWeapon;
}
function generateMonsterAge() {
    let tempMonsterAge = 22 + getRNGNumber(400);
    return tempMonsterAge;
}
function generatedImage() {
    let tempImage = getRNGNumber(Images.length);
    return tempImage;
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
    let tempMonsterXP = 100 + getRNGNumber(500);
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
// Aufgerufen, wenn man auf den Button klickt.
// Der Spieler kämpft gegen das entsprechende Monster. Er erhält dann Erfahrungspunkte.
function fightMonster(_index) {
    console.log("Spieler kämpft gegen Monster und gewinnt!"); // Ohne Logik mit if/else ist so etwas wie ein Kampf nicht leicht umzusetzen.
    console.log("Das Monster weigert sich zu verschwinden."); // Wird nächste Stunde erweitert.
    playerXP += monsterArray[_index - 1].monsterExperience; // _index ist in diesem Fall die Länge des Arrays - allerdings zählt der Computer beginnend von null, nicht eins! Deshalb _index-1.
    updatePlayerLevel();
}
// Aufgerufen, um das HTML-Element, welches das Spieler-Level darstellt, zu erneuern.
function updatePlayerLevel() {
    let tempLevel = Math.floor(playerXP / playerXPperLevel); // Spieler-Level = XP / XPproLevel
    document.getElementById("xpCounter").innerHTML = "Player-Level: " + tempLevel + " (XP: " + playerXP + " / " + playerXPperLevel + ")"; // Baue den String für die Spieler-Info zusammen
    console.log("Spieler " + playerName + " hat nun Level " + tempLevel + " mit " + playerXP + " (" + playerXPperLevel + " pro Level)"); // Spieler-Level in der Konsole.
}
//# sourceMappingURL=62-TS-Example.js.map
var currentTime = new Date();
var d = currentTime.getDay();
var h = currentTime.getHours();
var theOne = document.getElementById("theOne");
if (h == 19) {
    theOne.innerHTML = "On mange des dumplings avant ?";
} else if (h > 22) {
    theOne.innerHTML = "Comment ça t'es pas sorti ? Bah super Nils.";
} else if (h > 20) {
    theOne.innerHTML = "Si t'es sur ce site à cette heure là, c'est que t'es en retard !";
} else if (4 <= h && h < 6) {
    theOne.innerHTML = "C'est l'heure d'aller au McDo là !";  // trigger gif mcdo
} else if(d == 1) {
    theOne.innerHTML = "Un lundi ? Tu forçes.";
} else if(d == 2) {
    theOne.innerHTML = "Bon, bon... Tequila Tuesday au Uma Nota.";
} else if(d == 3) {
    theOne.innerHTML = "Courses ?";
} else if(d == 4) {
    theOne.innerHTML = "Si vraiment tu me forçes...";
} else if(d == 5) {
    theOne.innerHTML = "Bah bien sûr un vendredi wesh !?";
} else if(d == 6) {
    theOne.innerHTML = "OUI ET RANDO DEMAIN A 8H";
} else{
    theOne.innerHTML = "Bon, ça travaille demain mais en vrai allé";
}
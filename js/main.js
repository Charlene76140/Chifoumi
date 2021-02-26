//Affichage bienvenue
alert("Bonjour, bienvenue sur mon site de Chifoumi!");
//invite user a saisir son nom
var user = prompt("Avant de commencer à jouer, faisons les présentations... je suis Computer et toi? ");

//ready to play
if(user){
alert("Super " + user + ", es-tu prêt à jouer ?");
}
    else{
        alert("Super utilisateur, es-tu prêt à jouer?");
    }

//choix user
var choiceUser = prompt("Je te laisse choisir en premier... Pierre, Feuille ou Ciseaux?");

var choices = [
    "Pierre",
    "Feuille",
    "Ciseaux",
];

var choiceComputer = Math.random();

if(choiceComputer <= 0.33){
    choiceComputer = choices[0];
}
    else if (choiceComputer <= 0.67){
        choiceComputer = choices[1];
    }
else{
    choiceComputer = choices[2];
}    

alert("Moi j'ai choisi : " + choiceComputer);

if(choiceUser === choiceComputer){
    alert("Match nul!");
}
    else if(choiceUser === "Pierre" && choiceComputer === "Ciseaux" ||
    choiceUser ==="Feuille" && choiceComputer === "Pierre" ||
    choiceUser === "Ciseaux" && choiceComputer === "Feuille"){
        alert(user + " à gagné la partie!");
    }
    
else{
    alert("Computer à gagné la partie!");
}
            

alert("Merci d'avoir joué avec moi! A bientôt");


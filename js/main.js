alert("Bonjour, bienvenue sur mon site de Chifoumi!");
var user = prompt("Avant de commencer à jouer, faisons les présentations... je suis Computer et toi? ");

if(user){
alert("Super " + user + " ,es-tu prêt à jouer ?");
}
    else{
        alert("Super utilisateur, es-tu prêt à jouer?");
    }

var choiceUser = prompt("Je te laisse choisir en premier... Pierre, Feuille ou Ciseaux?");

var choices = [
    "Pierre",
    "Feuille",
    "Ciseaux",
];

var choiceComputer = Math.random();
console.log(choiceComputer);

if(choiceComputer <= 0.33){
    console.log("Moi j'ai choisi : " + (choices[0]="Pierre"));
}
    else if (choiceComputer <= 0.67){
        console.log("Moi j'ai choisi : " + (choices[1]= "Feuille"));
    }
else{
    console.log("Moi j'ai choisi : " + (choices[3] = "Ciseaux"));
}    

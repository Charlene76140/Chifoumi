//Message for user Welcome
alert("Bonjour, bienvenue sur mon site de Chifoumi!");
//enter name
var user = prompt("Avant de commencer à jouer, faisons les présentations... je suis Computer et toi? ");

//ready to play
if(user){
alert("Super " + user + ", es-tu prêt à jouer ?");
}
    else{
        alert("Super utilisateur, es-tu prêt à jouer?");
    }

//choice user
var choiceUser = prompt("Je te laisse choisir en premier... Pierre, Feuille ou Ciseaux?");

//choices possible
var choices = [
    "Pierre",
    "Feuille",
    "Ciseaux",
];

//computer choice on array choices
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

//show choice computer
alert("Moi j'ai choisi : " + choiceComputer);

//compare choices and show the result
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
            
//final 
alert("Merci d'avoir joué avec moi! A bientôt");


// je fais un test 
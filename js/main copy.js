// Message for user Welcome
console.log("Bonjour, bienvenue sur mon site de Chifoumi!");

// enter name
var user = prompt("Avant de commencer à jouer, faisons les présentations... je suis Computer et toi? ");

// choices possible
var choices = [
    "pierre",
    "feuille",
    "ciseaux",
];

var players = {
    "user": 0,
    "computer": 0,
    "nul" : 0
};

/* var premier = 2;
var deuxième = 5;

function additionner (vala, valb){
    return vala + valb;
}

console.log(additionner(premier, deuxième)); */



// ready to play
if(user){
    console.log("Super " + user + ", es-tu prêt à jouer ?");
} 
else{
    alert("Super utilisateur, es-tu prêt à jouer?");
}


while (players["user"] <= 3 || players["computer"] <= 3){
    var usrChoice = getUserChoice();
    if(usrChoice === null)
        break;

    var cmpChoice = getComputerChoice();
    alert("Moi j'ai choisi " + cmpChoice);
    var winner = compareUserAndComputerChoices(usrChoice , cmpChoice);
    
    updateResult(winner);
}




// updates winner's results 
function updateResult (winnerName){
    players[winnerName] +=1;
    console.log(winnerName + " nombre de point : " + players[winnerName]);

    // Boucler sur la liste des players
    // dans la boucle, lire le nom du player et le nb victoires
    // faire un console log du nom et victoire
}


// choiceUser
function getUserChoice (){
    return prompt("Je te laisse choisir en premier... " + choices);
}


//computer choice on array choices
function getComputerChoice (){

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
    
    return choiceComputer;
}

// compare choices and show the result
function compareUserAndComputerChoices (usrChoice, cmpChoice){

    if(usrChoice === cmpChoice){
        console.log("Match nul!");
        return "nul";
        
    }
        else if(usrChoice === "pierre" && cmpChoice=== "ciseaux" ||
        usrChoice ==="feuille" && cmpChoice === "pierre" ||
        usrChoice === "ciseaux" && cmpChoice === "feuille"){
            console.log(user + " à gagné la manche!");
            return "user";
        }
        
    else {
        console.log("Computer à gagné la manche!");  
        return "computer";
    }
        
}



 








//final 
//alert("Merci d'avoir joué avec moi! A bientôt");


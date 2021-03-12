//--------------------------------------------------Variables gloables---------------------------------------------

//choix possible pour le PC et l'utilisateur
let choices = [
    "pierre",
    "feuille",
    "ciseaux",
];

let pointsUser = 0;
let pointsComputer = 0;

//----------------------------------------------------Mes fonctions--------------------------------------------------

//1 - Fonction permettant de faire un choix aléatoire dans le tableau des choix pour le PC
function getComputerChoice(){
    let random = Math.floor(Math.random() * Math.floor(choices.length));
    return choices[random];
};



//2 - Fonction permettant de récupérer le nom du joueur
function getNameUser(){
    //recupération du nom du joueuru
    let name = prompt("Avant de commencer à jouer, faisons les présentations... je suis Computer et toi? ");
    //tant que le nom n'a pas entre 2 et 20 caractère boucle
    while(name.length < 2 || name.length > 20){
        name = prompt("Votre nom doit comporter en 2 et 20 caractères");
    };
        
    return name;
};



//3 - Fonction permettant de récupérer le choix de l'utilisateur

function getUserChoice(){
    do {
        var choiceUsr = prompt("Je te laisse choisir en premier...\n" + choices.join()).toLowerCase();
    }
    while(!choices.includes(choiceUsr));
    return choiceUsr;
};



//4 - Fonction permettant de comparer le choix du joueur et celui du PC
function compareResult(){
    if(choiceUser === choiceComputer){
        console.log("Match nul!");
    }
        else if(choiceUser === "pierre" && choiceComputer === "ciseaux" ||
        choiceUser ==="feuille" && choiceComputer === "pierre" ||
        choiceUser === "ciseaux" && choiceComputer === "feuille"){
            console.log(userName + " à gagné la manche!") 
            pointsUser += 1;
        }
    
    else{
        console.log("Computer à gagné la manche!");
        pointsComputer += 1;
    }
};


//5 - Fonction rejouer



//---------------------------------------------- Mon code --------------------------------------------------------------------------

//Message de bienvenue à l'utilisateur 
console.log("Bonjour, bienvenue sur mon site de Chifoumi!");
let userName = getNameUser();
console.log(userName);

while(pointsUser < 3 && pointsComputer < 3){

    choiceComputer = getComputerChoice();
    console.log(choiceComputer);

    choiceUser = getUserChoice();
    console.log(choiceUser);

    // console.log("Moi j'ai choisi : " + choiceComputer);
    
    compareResult();

    console.log("Points "+ userName + " : "+ pointsUser + "\nPoints Computer : " + pointsComputer);  
};

if(pointsUser === 3){
    console.log("Bravo vous avez gagné la partie!")
}
else{
    console.log("Désolé, mais c'est Computer qui a gagné la partie")
}














// //final 
// console.log("Merci d'avoir joué avec moi! A bientôt");
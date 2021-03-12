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
    let name = prompt("Faisons les présentations, je suis Computer et vous? ");
    //tant que le nom n'a pas entre 2 et 20 caractère boucle
    while(name.length < 2 || name.length > 20){
        name = prompt("Votre nom doit comporter en 2 et 20 caractères");
    };
        
    return name;
};


//3 - Fonction permettant de récupérer le choix de l'utilisateur
function getUserChoice(){
    do {
        var choiceUsr = prompt("Faites votre choix " + userName + "!\n" + choices.join()+ "?").toLowerCase();
    }
    while(!choices.includes(choiceUsr));
    return choiceUsr;
};


//4 - Fonction permettant de comparer le choix du joueur et celui du PC
function compareResult(){
    alert("Computer a choisi : " + choiceComputer);
        if(choiceUser === choiceComputer){
            alert("Match nul! \n"+ userName + " : "+ pointsUser + "\nPoints Computer : " + pointsComputer);

        }
        else if(choiceUser === "pierre" && choiceComputer === "ciseaux" ||
            choiceUser ==="feuille" && choiceComputer === "pierre" ||
            choiceUser === "ciseaux" && choiceComputer === "feuille"){
            pointsUser += 1;
            alert(userName + " remporte la manche \n"+ userName + " : "+ pointsUser + "\nComputer : " + pointsComputer);  
        }
    
        else{
            pointsComputer += 1;
            alert("Computer remporte la manche \n"+ userName + " : "+ pointsUser + "\nComputer : " + pointsComputer);  
        }
};


//5 - Fonction permettant de jouer jusqu'à ce que le joueur ou le PC ai 3 victoires
function play(){
    while(pointsUser < 3 && pointsComputer < 3){
        //fonction obtenir le choix du PC
        choiceComputer = getComputerChoice();
        //fonction obtenir le choix user
        choiceUser = getUserChoice();
        //fonction comparer les résultats
        compareResult();  
    };
    
    if(pointsUser === 3){
        alert("Bravo vous avez gagné la partie!")
    }
    else{
        alert("Désolé, mais c'est Computer qui a gagné la partie") 
    }
    //fonction rejouer
    replay();
};


//6 - Fonction rejouer
function replay(){
    let userReplay = prompt("Vous souhaitez rejouer? \n(oui ou non)")
    if(userReplay === "oui"){
        pointsUser = 0;
        pointsComputer = 0;
       play();
    }
    else{
        alert("Merci d'avoir joué et à bientôt");
    }
};   

//---------------------------------------------- Mon code --------------------------------------------------------------------------

//Message de bienvenue à l'utilisateur 
alert("Bonjour, bienvenue sur mon site de Chifoumi!");
let userName = getNameUser();

//fonction jouer
play();

















// //final 
// console.log("Merci d'avoir joué avec moi! A bientôt");
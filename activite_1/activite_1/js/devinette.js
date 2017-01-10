/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO
    var encore=1;
    while(encore < 1000){
    alert("Bienvenue dans ce jeu de devinette !");

    // Cette ligne génère aléatoirement un nombre entre 1 et 100
    var solution = Math.floor(Math.random() * 100) + 1;

    // Décommentez temporairement cette ligne pour mieux vérifier le programme
    //console.log("(La solution est " + solution + ")");

    // TODO : complétez le programme
    var essai = 1;
    while ((essai <= 6) && (choix !== solution)) {

        console.log("Fin du programme");
        var choix =Number(prompt("choisissez un nombre entre 1 et 100"));
            if (choix < solution){
                alert("c'est plus");
        }
        else if(choix > solution){
            alert("c'est moin");
        }
        else{
            alert("gagné");
        }
        alert("encore?")
        essai++;
    }
    if((essai >6) && (choix !== solution)){
    alert("perdu");
    }
    alert("on recommence");
    }

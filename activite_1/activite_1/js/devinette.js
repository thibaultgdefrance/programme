
var parties=1;
while (parties <= 10){
	alert("Bienvenue dans ce jeu de devinette !");
	var solution = Math.floor(Math.random() * 100) + 1;
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
		essai++;
		}
		if((essai >6) && (choix !== solution)){
			alert("perdu");
		}
		alert("on recommence");
		parties++;
	}	
alert("vous n'avez plus de parties");
	


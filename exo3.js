let joueurActuel = 'X';

//TABLEAU VIDE
let jeu = ['', '', '', '', '', '', '', '', ''];

let msg = document.getElementById("message");
msg.setAttribute("style", "color: white;");
let finDeJeu = false;

function ChoixCarre(index) {
    if (jeu[index] === '' && !finDeJeu) {
        jeu[index] = joueurActuel;
        
        var carres = document.getElementsByClassName('Carre');
        var carreSelectionne = carres[index];

        //innerText renvoie le contenu textuel d'un élément.
        carreSelectionne.innerText = joueurActuel;

        // APPEL DE FONCTION
        verifierGagnant();
        
        // Change le joueur pour le prochain tour
        if (joueurActuel === 'X') {
            carreSelectionne.style.color = "blue";
            joueurActuel = 'O';         
        } else { 
          carreSelectionne.style.color = "red";
          joueurActuel = 'X';
        }

    msg.innerText = "C'est au tour de " + joueurActuel;
    }
}

function verifierGagnant() {
    const conditionsDeVictoire = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    // Vérifie chaque condition pour trouver un gagnant
    for (let i = 0; i < conditionsDeVictoire.length; i++) {
    if (jeu[conditionsDeVictoire[i][0]] && jeu[conditionsDeVictoire[i][0]] === 
        jeu[conditionsDeVictoire[i][1]] && jeu[conditionsDeVictoire[i][0]] === 
        jeu[conditionsDeVictoire[i][2]]) {
            alert(`Joueur ${jeu[conditionsDeVictoire[i][0]]} a gagné !`);
            finDeJeu = true;
            return;
    }
}

// MATCH NUL
// includes cherche dans un tableau si y a une chaine vide
    if (!jeu.includes('')) {
        alert("Partie terminée , c'est un Match nul !");
        finDeJeu = true;
    }
}


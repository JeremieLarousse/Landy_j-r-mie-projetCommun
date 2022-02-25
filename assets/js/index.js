////////////////////////////////slider//////////////////

class electro{
    constructor(w, x, y, z){
        this.marque = w;
        this.reference = x;
        this.couleur = y;
        this.image = z;
    }

    affichemarque(w){
        return x + "De la marque : " + this.marque;
    }

    affichereference(x){
        return x + "Voici : " + this.reference;
    }

    affichecouleur(y){
        return x + "Sa couleur est : " + this.couleur;
    }

    afficheimage(z){
        return x + "Et enfin; voici sa photo : " + this.image;
    }
}

const produit = new electro("", "", "", "");
document.getElementById("stat1").innerHTML = produit.affichemarque("");
document.getElementById("stat2").innerHTML += produit.affichereference("");
document.getElementById("stat3").innerHTML += produit.affichecouleur("");
document.getElementById("stat4").innerHTML += produit.afficheimage("");

const produit1 = new electro("", "", "", "");
document.getElementById("stat5").innerHTML += produit1.affichemarque("");
document.getElementById("stat6").innerHTML += produit1.affichereference("");
document.getElementById("stat7").innerHTML += produit1.affichecouleur("");
document.getElementById("stat8").innerHTML += produit1.afficheimage("");

const produit2 = new electro("", "", "", "");
document.getElementById("stat9").innerHTML = produit2.affichemarque("");
document.getElementById("stat10").innerHTML += produit2.affichereference("");
document.getElementById("stat11").innerHTML += produit2.affichecouleur("");
document.getElementById("stat12").innerHTML += produit2.afficheimage("");

const produit3 = new electro("", "", "", "");
document.getElementById("stat13").innerHTML = produit3.affichemarque("");
document.getElementById("stat14").innerHTML += produit3.affichereference("");
document.getElementById("stat15").innerHTML += produit3.affichecouleur("");
document.getElementById("stat16").innerHTML += produit3.afficheimage("");

const produit4 = new electro("", "", "", "");
document.getElementById("stat17").innerHTML += produit4.affichemarque("");
document.getElementById("stat18").innerHTML += produit4.affichereference("");
document.getElementById("stat19").innerHTML += produit4.affichecouleur("");
document.getElementById("stat20").innerHTML += produit4.afficheimage("");

/////////////////////////BOUTON slider///////////////////////

let changement = 1;

function afficherdImage(n) {
    let i; 
    let tourner = document.getElementsByClassName("slider");
    if (n > tourner.length){
        changement = 1;
    }

    if(n < 1){
        changement = tourner.length;
    }

    for (i = 0; i < tourner.length; i++){
        tourner[i].style.display = 'none';

    }
    tourner[changement - 1].style.display = 'block';
}

afficherdImage(changement);

function fleche(n) {
    afficherdImage(changement += n);
}

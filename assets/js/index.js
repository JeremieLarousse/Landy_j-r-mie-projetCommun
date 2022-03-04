////////////////////////////////slider//////////////////

class electro{
    constructor(w, x, y, z){
        this.marque = w;
        this.reference = x;
        this.prix = y;
        this.image = z;
    }

    affichemarque(x){
        return x + "De la marque : " + this.marque;
    }

    affichereference(x){
        return x + "Voici : " + this.reference;
    }

    afficheprix(x){
        return x + "Son prix est : " + this.prix;
    }

    afficheimage(x){
        return x + "Et enfin; voici sa photo : " + this.image;
    }
}

const produit = new electro("PLUGGER STUDIO", "RING LITE10 SET", "29€", "");
document.getElementById("stat1").innerHTML = produit.affichemarque("");
document.getElementById("stat2").innerHTML += produit.affichereference("");
document.getElementById("stat3").innerHTML += produit.afficheprix("");
document.getElementById("stat4").innerHTML += produit.afficheimage("");

const produit1 = new electro("Gobikey", "Boule Disco de Commande Vocale,7 Couleurs", "15.99€", "");
document.getElementById("stat5").innerHTML += produit1.affichemarque("");
document.getElementById("stat6").innerHTML += produit1.affichereference("");
document.getElementById("stat7").innerHTML += produit1.afficheprix("");
document.getElementById("stat8").innerHTML += produit1.afficheimage("");

const produit2 = new electro("Sony", "Sony MHC-V02", "230€", "");
document.getElementById("stat9").innerHTML = produit2.affichemarque("");
document.getElementById("stat10").innerHTML += produit2.affichereference("");
document.getElementById("stat11").innerHTML += produit2.afficheprix("");
document.getElementById("stat12").innerHTML += produit2.afficheimage("");

const produit3 = new electro("Ibiza Sound", "SPLBOX350-PORT - Ibiza Sound", "179.90€", "");
document.getElementById("stat13").innerHTML = produit3.affichemarque("");
document.getElementById("stat14").innerHTML += produit3.affichereference("");
document.getElementById("stat15").innerHTML += produit3.afficheprix("");
document.getElementById("stat16").innerHTML += produit3.afficheimage("");

const produit4 = new electro("LEICKE", "LEICKE Enceinte Sono", "129.99€", "");
document.getElementById("stat17").innerHTML += produit4.affichemarque("");
document.getElementById("stat18").innerHTML += produit4.affichereference("");
document.getElementById("stat19").innerHTML += produit4.afficheprix("");
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

let boite = document.getElementById("contenu");
boite.classList.add("laBoite");
boite.style.textAlign= "center";

for (i = 0; i < material.length; i++){
    
    let leNom = document.createElement("p");
    leNom.classList.add("NomMatos");
    leNom.textContent = material[i].nom;
    boite.appendChild(leNom);

    let newDiv = document.createElement("div");
    boite.appendChild(newDiv);

    let photo = document.createElement("img");
    // photo.style.width = "300px";
    photo.classList.add("imageMatos");
    photo.src = material[i].image;
    newDiv.appendChild(photo);

    let laReference = document.createElement("p");
    laReference.classList.add("ReferenceMatos");
    laReference.textContent = material[i].reference;
    boite.appendChild(laReference);

    let lePrix = document.createElement("p");
    lePrix.classList.add("PrixMatos");
    lePrix.textContent = material[i].prix;
    boite.appendChild(lePrix);

    let boutonAchat = document.createElement("button");
    boutonAchat.classList.add("boutonAchat");
    boutonAchat.innerHTML = "AJOUTER";
    boite.appendChild(boutonAchat);

    let barre = document.createElement("p")
    barre.classList.add("barreSeparation");
    boite.appendChild(barre);

}
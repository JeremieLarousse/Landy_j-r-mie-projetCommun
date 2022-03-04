let boite = document.getElementById("contenu");
boite.style.textAlign ="center";

for (i = 0 ; i < material.length ; i++){
    let leNom = document.createElement("p");
    leNom.classList.add("nomMatos");
    leNom.style.color ="limegreen";
    leNom.style.background ="black"
    leNom.style.width ="300px";
    leNom.style.margin =" 10px 400px 0 610px";
    leNom.style.height ="40px";
    leNom.style.borderBlock ="20px solid black";
    leNom.textContent = material[i].nom;
    boite.appendChild(leNom);

    let newDiv = document.createElement("div");
    boite.appendChild(newDiv);

    let photo = document.createElement("img");
    photo.classList.add("imageMatos");
    photo.style.width ="300px";
    photo.src = material[i].image;
    newDiv.appendChild(photo);

    // let laReference =  document.createElement("p");
    // laReference.classList.add("rfrMateriel");
    // laReference.textContent = material[i].description;
    // boite.appendChild(laReference);

    let lePrix = document.createElement("p");
    lePrix.classList.add("price");
    lePrix.style.width ="300px";
    lePrix.style.height ="40px";
    lePrix.style.marginTop ="5px";
    lePrix.style.background ="white";
    lePrix.style.marginLeft ="610px";
    lePrix.textContent = material[i].prix;
    boite.appendChild(lePrix);


    let boutonAchat = document.createElement("button");
    boutonAchat.classList.add("achat");
    boutonAchat.innerHTML ="AJOUTER";
    boutonAchat.style.marginLeft ="30px";
    boutonAchat.style.marginTop ="5px";
    boutonAchat.style.background ="limegreen";
    boutonAchat.style.height ="30px";
    lePrix.appendChild(boutonAchat);
}
 
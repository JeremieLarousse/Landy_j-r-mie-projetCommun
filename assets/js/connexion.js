    let identifiants = "test";
    let mails = "test"
    let mdps = "test";
    
function enter(){
    let identifiant = document.getElementById("idents").value;
    let mail = document.getElementById("mail").value;
    let mdp = document.getElementById("password").value;

    

    if (identifiants == identifiant && mails == mail && mdps == mdp){
        alert("Password correct")
        window.location = "https://developer.mozilla.org/fr/docs/Web/API/Window/location"
    
    }else if ( identifiants != identifiant && mdps == mdp){
        alert("Identifiant incorrect")  
    }else if ( mdps != mdp && identifiants == identifiant ){
        alert("Mot de passe incorrect")
    }
}



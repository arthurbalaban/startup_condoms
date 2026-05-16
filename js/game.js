// fonction de vérification du formulaire

function verify(){
    // Récupération des champs du formulaire
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;

    // Vérification des champs vides
    if(name=="" || email=="" || message==""){
        alert("Remplissez tous les champs.");
        return false;
    }

    // Vérification de l'email
    if(!email.includes("@") || !email.includes(".")){
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    // Vérification de la longueur du message
    if(message.length<20 || message.length>2000){
        alert("Le message doit contenir entre 20 et 2000 caractères.");
        return false;
    }
    return true;
}

function sent(){
    if(verify()){//envoie du formulaire s'il est valide
        alert("Formulaire envoyé avec succès!");
        window.location.href="contact-us.html";
    }
}

function setup(){
    // pour ne pas recréer le jeu
    if(document.getElementById("gamezone").getAttribute("class")=="displayed"){
        console.log("Le jeu est déjà affiché.");
        return;
    }
    // crée les différents éléments du jeu
    let gamezone=document.getElementById("gamezone");
    gamezone.setAttribute("class","displayed");
    gamezone.appendChild(document.createElement("div")).innerHTML="<p>Trouvez le</p><button onclick=\"sent()\">bouton</button><p>pour envoyer le formulaire.</p>";
    gamezone.appendChild(document.createElement("div")).setAttribute("id","game");
}

function game(){
    setup();
}
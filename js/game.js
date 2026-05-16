// fonction de vérification du formulaire

function verify(){
    // Récupération des champs du formulaire
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;

    let nameError=document.getElementsByClassName("error-signal")[0].children[0]
    let emailError=document.getElementsByClassName("error-signal")[0].children[1];
    let messageError=document.getElementsByClassName("error-signal")[1].firstElementChild;

    // Vérification des champs vides
    let error=0;
    if(name==""){
        nameError.innerText="Veuillez entrer votre nom.";
        error++;
    }

    // Vérification de l'email
    if(!email.includes("@") || !email.includes(".")){
        emailError.innerText="Veuillez entrer une adresse email valide.";
        error++;
    }

    // Vérification de la longueur du message
    if(message.length<20 || message.length>2000){
        messageError.innerText="Le message doit contenir entre 20 et 2000 caractères.";
        error++;
    }
    if(error>0){
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
    if(verify()){//si le formulaire est valide, on affiche le jeu
        setup();
    }
}
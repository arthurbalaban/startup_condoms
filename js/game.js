function verify(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    if(name=="" || email=="" || message==""){
        alert("Remplissez tous les champs.");
        return false;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }
    if(message.length<20 || message.length>2000){
        alert("Le message doit contenir entre 20 et 2000 caractères.");
        return false;
    }
    return true;
}
function sent(){
    if(verify()){
        alert("Formulaire envoyé avec succès!");
        window.location.href="contact-us.html";
    }
}
function setup(){
    if(document.getElementById("gamezone").getAttribute("class")=="displayed"){
        return;
    }
    let gamezone=document.getElementById("gamezone");
    gamezone.setAttribute("class","displayed");
    gamezone.appendChild(document.createElement("div")).innerHTML="<p>Trouvez le</p><button onclick=\"sent()\">bouton</button><p>pour envoyer le formulaire.</p>";
    gamezone.appendChild(document.createElement("div")).setAttribute("id","game");

    
}

function main(){
    setup();    
}
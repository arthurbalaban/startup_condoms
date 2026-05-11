function verify(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
    if(name=="" || email=="" || message==""){
        alert("Please fill in all the fields.");
        return false;
    }
    if(!email.includes("@") || !email.includes(".")){
        alert("Please enter a valid email address.");
        return false;
    }
    if(message.length<20 || message.length>2000){
        alert("Message must be between 20 and 2000 characters.");
        return false;
    }
    return true;
}
function sent(){
    if(verify()){
        alert("Form submitted successfully!");
        window.location.href="contact-us.html";
    }
}
function setup(){
    if(document.getElementById("gamezone").getAttribute("class")=="displayed"){
        return;
    }
    let gamezone=document.getElementById("gamezone");
    gamezone.setAttribute("class","displayed");
    gamezone.appendChild(document.createElement("div")).innerHTML="<p>Find the</p><button onclick=\"sent()\">button</button><p>in order to submit the form.</p>";
    gamezone.appendChild(document.createElement("div")).setAttribute("id","game");

    
}

function main(){
    setup();    
}
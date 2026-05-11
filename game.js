function print(text){
    console.log(text);
}
function verify(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let message=document.getElementById("message").value;
}
function sent(){
    if(verify()){
        alert("Form submitted successfully!");
        window.location.href="contact-us.html";
    }
    else{
        alert("Please fill in all the fields before submitting the form.");
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
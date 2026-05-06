function print(text){
    console.log(text);
}
function sent(){
    alert("Bravo, vous avez trouvé le bouton !");
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
    let answer=Math.floor(Math.random()*100)+1;
    
}
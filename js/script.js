function copier(){
    console.log("Le plagiat est une forme de vol intellectuel qui consiste à copier le travail d'autrui sans autorisation ni attribution appropriée. Il est important de respecter les droits d'auteur et de citer correctement les sources pour éviter le plagiat.");
}

//menu hamburger
function hamburgerMenu(){
    const hamburger = document.getElementById('hamburger');
    const headerlinks = document.getElementById('headerlinks');
    
    if(hamburger && headerlinks){
        hamburger.addEventListener('click', function(){
            hamburger.classList.toggle('active');
            headerlinks.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const links = headerlinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function(){
                hamburger.classList.remove('active');
                headerlinks.classList.remove('active');
            });
        });
    }
}

function changecolor(){
    //ne change pas la couleur du texte sur la page d'accueil
    const page =document.getElementsByTagName("title")[0].innerText;
    if(page=="CondomStart'"){
        return;
    }
    //définir la couleur
    const colors=["#FFC6EC", "#EA921F", "#3357FF", "#FF00FF", "#33FFF5"];
    const colorname=["Rose clair", "Orange", "Bleu", "Magenta", "Cyan"];
    let colorindex=Math.floor(Math.random()*colors.length);

    //selectionner l'élément
    // let elt=[];
    const navbar_elts=document.getElementsByClassName("navlinks")[0].children;
    for(let i=0; i<navbar_elts.length; i++){
        if(navbar_elts[i].innerText==page){
            let elt=navbar_elts[i];
            console.log(elt);
            break;
        }
    }
    // elt=elt[0];

    //affichage
    console.log(elt);
    // elt.setAttribute("style", "color: " + colors[colorindex]+ ";");
    elt.style.color=colors[colorindex];
    console.log(elt);
    console.log("La couleur du menu a été changée en "+colorname[colorindex]);
}


function main(){
    document.body.addEventListener("copy", copier);
    hamburgerMenu();
    changecolor();
}
main();
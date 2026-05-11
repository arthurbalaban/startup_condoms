function copier(){
    console.log("Le plagiat est une forme de vol intellectuel qui consiste à copier le travail d'autrui sans autorisation ni attribution appropriée. Il est important de respecter les droits d'auteur et de citer correctement les sources pour éviter le plagiat.");
}

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

function main(){
    document.body.addEventListener("copy", copier);
    hamburgerMenu();
}
main();
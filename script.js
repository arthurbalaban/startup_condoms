function copier(){
    console.log("Le plagiat est une forme de vol intellectuel qui consiste à copier le travail d'autrui sans autorisation ni attribution appropriée. Il est important de respecter les droits d'auteur et de citer correctement les sources pour éviter le plagiat.");
}
function main(){
    document.body.addEventListener("copy", copier);
}
main();
const modales = document.getElementsByClassName("dialogue");
//affiche la modale correspondante à la mission cliquée
function display_modal(indice){
    modales[indice].showModal();
}

//ajoute un event listener à chaque mission pour afficher la modale correspondante
document.getElementById("mission1").addEventListener("click", function() {
    display_modal(0);
});
document.getElementById("mission2").addEventListener("click", function() {
    display_modal(1);
});
document.getElementById("mission3").addEventListener("click", function() {
    display_modal(2);
});
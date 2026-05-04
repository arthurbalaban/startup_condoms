const modales = document.getElementsByClassName("dialogue");

function display_modal(indice){
    modales[indice].showModal();
}

document.getElementById("mission1").addEventListener("click", function() {
    display_modal(0);
});
document.getElementById("mission2").addEventListener("click", function() {
    display_modal(1);
});
document.getElementById("mission3").addEventListener("click", function() {
    display_modal(2);
});
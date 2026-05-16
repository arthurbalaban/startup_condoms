// ajoute la modale au body
let body=document.body;
let modale=document.createElement("dialog");
modale.id="loader";
body.appendChild(modale);

// ajoute le form à la modale
let form_modale=document.createElement("form");
form_modale.method="dialog";
modale.appendChild(form_modale);

//ajoute la div au form
let container=document.createElement("div");
container.className="container-loader";
form_modale.appendChild(container);

// ajoute la box à la div container
let box = document.createElement("div");
box.className="box-loader";
container.appendChild(box);


// affiche la modale pendant 2s
// modale.showModal();
setTimeout(function() {modale.close();}, 2000);
let body=document.body;
let modale=document.createElement("dialog");
modale.id="loader";
body.appendChild(modale);

let form_modale=document.createElement("form");
form_modale.method="dialog";
modale.appendChild(form_modale);

let container=document.createElement("div");
container.className="container-loader";
form_modale.appendChild(container);

let box = document.createElement("div");
box.className="box-loader";
container.appendChild(box);



// modale.showModal();
setTimeout(function() {modale.close();}, 2000);
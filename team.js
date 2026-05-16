const radius = 30;

document.querySelectorAll('.container').forEach(container => {
    const topImg = container.querySelector('.image-top');
    const revealed = [];
    function updateMask() {
    if (revealed.length === 0) return;
    const gradients = revealed.map(p =>
        `radial-gradient(circle ${radius}px at ${p.x-39}px ${p.y-5}px, transparent 100%, black 0)`
    );
    topImg.style.maskImage = gradients.join(', ');
    topImg.style.webkitMaskImage = gradients.join(', ');
    topImg.style.maskComposite = 'intersect';
}
container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left-32;
    const y = e.clientY - rect.top-5;
    revealed.push({ x, y });
    updateMask();
    });
});

// edition mode

let compteurProfil = 1 ;
let actualName = "";

let edit = document.getElementById("edit");
let idInput = document.getElementById("idInput");
let mpInput = document.getElementById("mpInput");
let connect = document.getElementById("idButton");
let validate = document.getElementById("mpButton");
let alertEdit = document.getElementById("alertEdit");

let total = document.getElementById("total");
let addMember = document.getElementById("addMember");
let newMember = document.getElementById("newMember");
let nameMember = document.getElementById("nameMember");
let memberButton = document.getElementById("memberButton");
let newName = document.getElementById("newName");
let newNameInput = document.getElementById("newNameInput");
let newNameButton = document.getElementById("newNameButton");

function deleteProfil(id) {
    document.getElementById(`${id}`).parentElement.id = "toDelete";
    document.getElementById(`${id}`).parentElement.parentElement.removeChild(document.getElementById("toDelete"));
}

function change(n) {
    actualName = document.querySelectorAll(".noms")[n];
    newNameInput.value = actualName.innerText;
    newName.showModal();
}

edit.addEventListener("click", () => {
    if(edit.style.backgroundColor != 'green') {
        editModeId.showModal();
    } else {
        alertEdit.showModal();
    }
})

connect.addEventListener("click", () => {
    if (idInput.value === "admin") {
        editModeMp.showModal();
    }
})

validate.addEventListener("click", () => {
    if (mpInput.value === "admin_pwd") {
        edit.style.backgroundColor = "green";
        addMember.removeAttribute("hidden");
        change1.removeAttribute("hidden");
        change2.removeAttribute("hidden");
        change3.removeAttribute("hidden");
        console.log(addMember.attributes);
    }
})

quitEdit.addEventListener("click", () => {
    edit.style.backgroundColor = "tomato";
    addMember.setAttribute("hidden","hidden");
    change1.setAttribute("hidden","hidden");
    change2.setAttribute("hidden","hidden");
    change3.setAttribute("hidden","hidden");
})

addMember.addEventListener("click", () => {
    newMember.showModal();
    nameMember.value = "";
})

memberButton.addEventListener("click", () => {
    let name = nameMember.value;
    let newMember = document.createElement("div");
    newMember.innerHTML = `<div class="profil"><div class="container"><img src="images/unlocked.png" alt="image étudiant ajouté" class="image-bottom"></div><h2 class="center noms">${name}</h1><p class="center">étudiant en CIR1<br>ISEN Yncrea Ouest - Nantes</p></div><button id="${compteurProfil}" class="delete" onclick="deleteProfil(${compteurProfil})" type="button">Delete</button>`
    total.appendChild(newMember);
    compteurProfil++;
})

newNameButton.addEventListener("click", () => {
    actualName.innerText = newNameInput.value;
})
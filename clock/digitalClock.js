function addSegments(digitId){
    let segm;
    for(let i=0;i<7;i++){
        segm=document.createElement("div");
        segm.className=`segment segment${i} off`;
        document.getElementById(digitId).appendChild(segm);
    }
}

function updateDigit(digitId, value){
    let chiffre=document.getElementById(digitId);
    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    let obj=segmentStates[value];
    for(let i=0;i<7;i++){
        if(obj[i]){
            chiffre.children[i].className=`segment segment${i}`;
        }
        else{
            chiffre.children[i].className=`segment segment${i} off`;
        }
    }
}

function init(){
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
    addSegments("seconds-units");
    addSegments("seconds-tens");
}

function update_time(){
    const event = new Date();
        let heure=event.toLocaleTimeString('fr-FR')
    updateDigit("hours-tens",parseInt(heure[0]));
    updateDigit("hours-units",parseInt(heure[1]));
    updateDigit("minutes-tens",parseInt(heure[3]));
    updateDigit("minutes-units",parseInt(heure[4]));
    updateDigit("seconds-units",parseInt(heure[7]));
    updateDigit("seconds-tens",parseInt(heure[6]));
}

function main(){
    init();
    setInterval(update_time,1);
}


main();

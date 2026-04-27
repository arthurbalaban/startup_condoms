let chrometre=[0,0,0,0,0,0];
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

    addSegments("timer-hours-tens");
    addSegments("timer-hours-units");
    addSegments("timer-minutes-tens");
    addSegments("timer-minutes-units");
    addSegments("timer-seconds-units");
    addSegments("timer-seconds-tens");
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


function update_timer(){
    chrometre[5]++;
    if(chrometre[5]==10){
        chrometre[5]=0;
        chrometre[4]++;
    }
    if(chrometre[4]==6){
        chrometre[4]=0;
        chrometre[3]++;
    }
    if(chrometre[3]==10){
        chrometre[3]=0;
        chrometre[2]++;
    }
    if(chrometre[2]==6){
        chrometre[2]=0;
        chrometre[1]++;
    }
    if(chrometre[1]==10){
        chrometre[1]=0;
        chrometre[0]++;
    }
    updateDigit("timer-hours-tens",chrometre[0]);
    updateDigit("timer-hours-units",chrometre[1]);
    updateDigit("timer-minutes-tens",chrometre[2]);
    updateDigit("timer-minutes-units",chrometre[3]);
    updateDigit("timer-seconds-tens",chrometre[4]);
    updateDigit("timer-seconds-units",chrometre[5]);

}

function main(){
    init();
    update_timer();
    update_time();
    setInterval(update_time,100);
    setInterval(update_timer,1000);
}


main();

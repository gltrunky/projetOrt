// TEST DU FEU ROUGE
document.getElementById("btrouge").addEventListener("click", 
function changerCouleurRouge(){
    let couleurRouge = document.getElementById("rouge").style.backgroundColor="red";
    setTimeout(() => {
        couleurRouge = document.getElementById("rouge").style.backgroundColor="grey";
    }, 3000);
}
);
// TEST DU FEU ORANGE
document.getElementById("btorange").addEventListener("click",
function changerCouleurOrange(){
        let couleurOrange = document.getElementById("orange").style.backgroundColor="orange";
        setTimeout(() => {
            couleurOrange = document.getElementById("orange").style.backgroundColor="grey";
        }, 3000);
    }
);
//TEST DU FEU VERT
document.getElementById("btvert").addEventListener("click",
function changerCouleurVert(){
        let couleurVert = document.getElementById("vert").style.backgroundColor="green";
        setTimeout(() => {
            couleurVert = document.getElementById("vert").style.backgroundColor="grey";
        }, 3000);
    }
);
//FEU AUTOMATIQUE 
// let repeat = false;
document.getElementById("btauto").addEventListener("click",
function automatiqueFeu(){
    // while (repeat = false){
         couleurVert = document.getElementById("vert").style.backgroundColor="green";
        setTimeout(() => {
        couleurVert = document.getElementById("vert").style.backgroundColor="grey";
        }, 5000); 
        setTimeout(() => {
            couleurOrange = document.getElementById("orange").style.backgroundColor="orange";    
        }, 5000);
        setTimeout(() => {
            couleurOrange = document.getElementById("orange").style.backgroundColor="grey";   
        }, 8000);
        setTimeout(() => {
            couleurRouge = document.getElementById("rouge").style.backgroundColor="red";
        }, 8000);
        setTimeout(() => {
            couleurRouge = document.getElementById("rouge").style.backgroundColor="grey";
        }, 12000);
    }
    // }
    );


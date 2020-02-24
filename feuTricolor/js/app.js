//DECLARATION
let feuVert = document.querySelector('#vert');
let feuOrange = document.querySelector('#orange');
let feuRouge = document.querySelector('#rouge');
let buttonAuto = document.querySelector('#btauto');
let buttonRed = document.querySelector('#btrouge');
let buttonOrange  = document.querySelector('#btorange');
let buttonGreen = document.querySelector('#btvert');
let buttonStop = document.querySelector('#stop');
let buttonAppel = document.querySelector('#appel');
let i=0;
let s;
let color=[["green","grey","grey"],
       ["grey","orange","grey"],
       ["grey","grey","red"]];

//FONCTION FEU AUTOMATIQUE
function start()
{   
        feuRouge.style.backgroundColor=color[i][2];
        feuOrange.style.backgroundColor=color[i][1];
        feuVert.style.backgroundColor=color[i][0];
        i+=1;
        if(i==3)
        {
            i=0;
        }
        s=setTimeout(start,2500);
}

//FONCTION ARRET FEU AUTOMATIQUE
function stop()
{
        buttonAuto.style.visibility="visible";
        clearTimeout(s);
        i=0;
        feuRouge.style.backgroundColor="gray";
        feuOrange.style.backgroundColor="gray";
        feuVert.style.backgroundColor="gray";
}

function appel(){
    feuRouge.style.backgroundColor=color[i][2];
    feuOrange.style.backgroundColor=color[i][1];
    feuVert.style.backgroundColor=color[i][0];
    i+=1;
        if(i==3)
        {
            clearTimeout();
        }
        s=setTimeout(appel,1500);
}

//FONCTION TEST FEU ROUGE,ORANGE,VERT
function colorTemp(ColorTest, time)
{
    if (ColorTest == 'green')
    {
        feuVert.style.backgroundColor=ColorTest;
            setTimeout(() => 
        {
        feuVert.style.backgroundColor="grey";
        }, time);
    }
    else if (ColorTest == 'orange')
    {
        feuOrange.style.backgroundColor=ColorTest;
        setTimeout(() => 
        {
            feuOrange.style.backgroundColor="grey";
        }, time);
    }
    else if (ColorTest == 'red')
    {
        feuRouge.style.backgroundColor=ColorTest;
        setTimeout(() => 
        {
            feuRouge.style.backgroundColor="grey";
        }, time);
    }
    else
    {
        alert('Seuleument les couleurs RED, ORANGE et GREEN sont accepté');
    }
}


buttonAppel.addEventListener('click', function(){appel()});
buttonAuto.addEventListener('click', function() {stop(),start()});
buttonStop.addEventListener('click', function(){stop()})
buttonRed.addEventListener('click', function() {colorTemp('red', 1500)});
buttonOrange.addEventListener('click', function() {colorTemp('orange', 1500)});
buttonGreen.addEventListener('click', function() {colorTemp('green', 1500)});

function randomBubble(){
    var clutter="";

for(var i=1; i<=96; i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`  

}

document.querySelector("#centermid").innerHTML = clutter;
}
var timer = 60;
var score = 0;
var hitrn = 0;
function gametimer(){
    var timeint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timeleft").textContent = timer;
    }
    else{
        clearInterval(timeint);
        document.querySelector("#centermid").innerHTML =`<h1>Game Over<h1/><h2>Final Score ${score}<h2/>`;
    }
},1000)
}

function hittarget(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#sethit").textContent = hitrn;
}

function finalscore(){
    score +=10
    document.querySelector("#scorecard").textContent = score;
}


document.querySelector("#centermid").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent)
    if (clickednum === hitrn ){
        finalscore();
        randomBubble();
        hittarget()
    }
})


gametimer();
randomBubble();
hittarget()


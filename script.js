var timmer = 60;
var score = 0;
var value = 0;

increaseScore = () => {
    score += 10;
    document.querySelector("#score").textContent = score;
}

bubble = () => {
    var clutter = "";

for(i = 1; i<= 144; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector(".p-btm").innerHTML = clutter;
}

const runtimmer = () => {
    var timmerint = setInterval(() => {
        if (timmer > 0) {
            timmer--;
            document.querySelector("#clock").textContent = timmer;
        } else {
            clearInterval(timmerint);
        }
    }, 1000);
}

const getNewHit = () =>{
     value = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = value;


}

document.querySelector(".p-btm").addEventListener("click",function(dets){
 var clickedNum = Number(dets.target.textContent);
   if(value == clickedNum){
    increaseScore();
    bubble();
    getNewHit();
   }
});


getNewHit();
runtimmer();
bubble();
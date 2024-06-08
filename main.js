const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");

let state=false;
let hr=0,min=0,sec=0,cnt=0;

start.addEventListener("click",()=>{
    state=true;
    stopWatch();
})
stop.addEventListener("click",()=>{
    state=false;
})
reset.addEventListener("click",()=>{
    state=false;
    hr=0;
    min=0;
    sec=0;
    cnt=0;
    document.getElementById("hr").innerHTML=" 00 ";
    document.getElementById("min").innerHTML=" 00 ";
    document.getElementById("sec").innerHTML=" 00 ";
    document.getElementById("cnt").innerHTML=" 00 ";
})
function stopWatch(){
    if(state){
        cnt++;
        if(cnt==100){
            sec++;
            cnt=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hr++;
            min=0;
        }
        let hrString = hr < 10 ? " 0" + hr + " " : " " + hr + " ";
        let minString = min < 10 ? " 0" + min + " " : " " + min + " ";
        let secString = sec < 10 ? " 0" + sec + " " : " " + sec + " ";
        let cntString=cnt;

        document.getElementById('hr').innerHTML=hrString;
        document.getElementById('min').innerHTML=minString;
        document.getElementById('sec').innerHTML=secString;
        document.getElementById('cnt').innerHTML=cntString;
        setTimeout(stopWatch,10); 
    }
}





function timer(){
    let d=new Date();
    let time_hours=d.getHours();
    let time_minutes=d.getMinutes();
    let time_seconds=d.getSeconds();
    
    
    hours=document.getElementById("hour");
    minutes=document.getElementById("minute");
    seconds=document.getElementById("second");
        seconds.style=`transform: rotate(${time_seconds*6}deg)`;
        minutes.style=`transform: rotate(${time_minutes*6}deg)`;
        hours.style=`transform: rotate(${time_hours*30}deg)`;
    
    }
    
    setInterval(timer,1000);


const clockContainer = document.getElementById("clockContainer");

clockContainer.addEventListener("click",()=>{

    const digiTime=()=>{
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        

    const time = document.getElementById("time");
    const container = document.querySelector(".container");

    container.innerHTML = ` <div class="section" id="time">
    ${hours<10 ? "0" + hours : hours}:${minutes<10 ? "0"+minutes : minutes}:${seconds<10 ? "0"+seconds : seconds}
    </div>
`
};

setInterval(digiTime, 1000);
});






console.log(time);


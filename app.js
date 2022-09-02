const tim = document.getElementById("time");
const selectMenu = document.querySelectorAll("select");
const btn = document.querySelector("button");
let setTime;
let cancle;
let ringtone = new Audio("assets/ringtone/alarm-sound.mp3");
//time
setInterval(() => {
    let date = new Date()
    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let ampm = hrs >= 12 ? 'PM' : 'AM'
    if(hrs >= 12){
        hrs = hrs-12
    }
     
    // if value of hrs is 0, then put hrs 12
    hrs = hrs == 0 ? hrs = 12 : hrs
    // adding 0 before hrs,min, and sec
    hrs = hrs < 10 ? '0' + hrs : hrs
    min= min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    timeClock = `${hrs}:${min}:${sec} ${ampm}`
    tim.innerHTML = timeClock
    
    set = `${hrs}:${min} ${ampm}`
//console.log(set);
    if(setTime == set){
        // console.log("ring alarm")
        ringtone.play();
        ringtone.loop = true
    }

    
});
 

for( let i=0 ; i < 12; i++){
    let h = i < 10 ? '0' + i : i
    let option =`<option value="${h}"> ${h} </option>`;
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
 
for( let i=0 ; i < 60; i++){
     let m = i < 10 ? '0' + i : i
    let option1 =`<option value="${m}"> ${m} </option>`;
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option1);
}

for( let i=0 ; i < 2; i++){
    let amp = i ? 'PM' : 'AM'
    let option2 =`<option value="${amp}"> ${amp} </option>`;
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option2);
    
}

// setalarm btn
function setAlarm(){
    if(cancle){
        setTime = ""
        ringtone.pause();
        btn.innerHTML = 'Set Alarm';
        return cancle = false ;
    }
    // value of hrs,min and ampm
    let data = `${selectMenu[0].value.trim()}:${selectMenu[1].value.trim()} ${selectMenu[2].value.trim()}`
    if(data.includes("Hours") || data.includes("Minutes") || data.includes("PM/AM")){
        console.log('please, select a value time in set Alarm')
       
    }
    setTime = data
    btn.disabled = false
    cancle = true
    btn.innerHTML = 'Clear Alarm';

   return true
}
btn.addEventListener('click', setAlarm)


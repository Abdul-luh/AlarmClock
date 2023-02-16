// select h1 
const currTime= document.querySelector('h1'),
// Select all the select menus 
content = document.querySelector('.content')
// Select all the select menus 
selectMenu = document.querySelectorAll('select'),
// select alarm button
alarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet= false,
ringTone = new Audio('./Recording.m4a');

// console.log(selectMenu);

// FOR LOOP SETUP TO GET HOURS

// for (let i = 1; i < 13; i++) {

    for (let i = 12; i > 0; i--) {
        // const element = array[i];
        i = i<10 ? '0'+ i: i;
        let option = `<option value='${i}'>${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML('afterend', option)
    
    // console.log(option);
}

// FOR LOOP SETUP TO GET MINUTES
for (let i = 59; i >= 0; i--) {
    
    i = i<10 ? '0'+ i: i;
    let option = `<option value='${i}'>${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML('afterend', option)
    // console.log(option);
}

// FOR LOOP SETUP TO GET AM/PM
for (let i = 1; i >= 0; i--) {

    let mediteranian = i == 0 ? "AM": "PM";
    let option = `<option value='${mediteranian}'>${mediteranian}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML('afterend', option)
    console.log(option);
}

setInterval(() => {
    let date = new Date(),
    seconds = date.getSeconds(), minutes = date.getMinutes(), hour = date.getHours(),
    mediteranian='AM'
    ;
    if (hour > 12) {
        hour = hour - 12;
        mediteranian = 'PM'
    }
    // if hour value is 0? set hour value to 12 
    hour = hour==0 ? hour =12: hour;

    hour = hour < 10 ? '0'+ hour: hour;
    minutes = minutes < 10 ? '0'+ minutes: minutes;
    seconds = seconds < 10 ? '0'+ seconds: seconds;


    let today = `${hour}:${minutes}:${seconds} ${mediteranian}`
    currTime.innerHTML = today
        if (alarmTime == `${hour}:${minutes} ${mediteranian}`) {
        console.log('Alarm ringing...');
        ringTone.play()
        ringTone.loop = true

    }
    // console.log(alarmTime);
}, 1000);

function setAlarm () {
    if (isAlarmSet) {
        alarmTime = ''
        ringTone.pause()
        content.classList.remove('disabled')
        alarmBtn.innerText = 'Set Alarm'
        return isAlarmSet=false
    }

    let time= `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;
    if (time.includes('Hour') || time.includes('Minutes') || time.includes('AM/PM')) {
        alert("I know you don't have sense and you will do this kind tin, set a valid time to set an alarm and leave here for me?")
    }

    isAlarmSet= true
    alarmTime = time
    console.log(time);
    content.classList.add('disabled')
    alarmBtn.innerText = 'Clear Alarm'
};

alarmBtn.addEventListener('click', setAlarm);
count = 1;
function add(){
    var elmnt = document.getElementsByClassName("toDoItem")[0];
    var cln = elmnt.cloneNode(true);
    var title = document.getElementById('input').value;
    if (title != ""){
        cln.id = 'toDo'+ count;
        count++;
        childs_div = cln.children[0];
        childs_span = childs_div.children;
        childs_span[0].textContent = title
        document.body.appendChild(cln);
        document.getElementById('input').value = "";
    }
}

function remove(clickedBtn){
    var removedToDo = clickedBtn.parentElement.parentElement;
    removedToDo.remove();
}
function showDes(description){
    var main_div = description.parentElement.parentElement.children;
    des = main_div[4];
    var isHidden = des.style.display == "none"; 
    if (isHidden) {
        des.style.display = "block";
    }else {
        des.style.display = "none";
    }
}
function done(done_toDo){
    done_toDo.style.textDecoration = "line-through";
    done_toDo.style.color = "red";
}
function showAlr(alarmbtn) {
    var main_div = alarmbtn.parentElement.parentElement.children;
    des = main_div[5];
    var isHidden = des.style.display == "none"; 
    if (isHidden) {
        des.style.display = "block";
    }else {
        des.style.display = "none";
    }        
}

//alarm

const display = document.getElementById('clock');
const audio = new Audio('Alarm.mp3')
audio.loop = true;
let alarmTime = null;
let alarmTime2 = [];
let alarmTimeOut =null;
function upDateTime() {
    var date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    display.innerHTML = `${hours} : ${minutes} : ${seconds}`
}
function fotmateTime(time) {
    if (time < 10) {
        return '0' + time;
    }
    return time;
}
function setAlarmTime(value){
    alarmTime = value;
    alarmTime2.push(value);
}
function pl(){
    document.getElementById("stop").style.display = "block";
    audio.play()
}
function setAlarm(po){
    for (let i = 0 ; i < alarmTime2.length ; i++){
        if (alarmTime[i]){
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);
            if (timeToAlarm > current){
                const timeout = timeToAlarm.getTime() - current.getTime();
                alarmTimeOut = setTimeout(() => pl(),timeout);
                alert('alerm set')
            }
        }
    }
    po.parentElement.parentElement.style.display = "none";
}
function clearAlarm(){
    audio.loop =false;
    audio.pause();
    audio.loop = true;
    document.getElementById("stop").style.display = "none";
}
setInterval(upDateTime,1000);
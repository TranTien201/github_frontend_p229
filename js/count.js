const countdown = () => {
    const countDate = new Date("2021,07,30").getTime();
    const nowdate =new Date().getTime();
    const remain = countDate - nowdate;


    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour*24;

    const textDay = Math.floor(remain/day) + 00;
    const textHour = Math.floor((remain % day)/hour) +00;
    const textMinute = Math.floor((remain % hour)/minute) + 00;
    const textSecond = Math.floor((remain % minute)/second) + 00;


    if(textDay < 10) {
        document.getElementById('days').innerText = [00] + textDay;
        console.log(textDay);
        }
    else {
        document.getElementById('days').innerText =  textDay;
        }
    if(textHour < 10) {
        document.getElementById('hours').innerText = [00] + textHour;
    }
    else {
        document.getElementById('hours').innerText =  textHour;
    }

    if(textMinute < 10) {
        document.getElementById('minutes').innerText = [00] + textMinute;
        }
    else {
        document.getElementById('minutes').innerText =  textMinute;
        }
    if(textSecond < 10) {
        document.getElementById('seconds').innerText = [00] + textSecond;
        }
    else {
        document.getElementById('seconds').innerText =  textSecond;
        }

};

setInterval(countdown, 1000);
// digital clock

setInterval(showTime,1000);

function showTime(){
    let current_time = new Date();
    let hr = current_time.getHours();
    let min = current_time.getMinutes();
    let sec = current_time.getSeconds();
    let am_pm;
    let msg;

    if(hr >= 12){
        am_pm = "PM";
    }else{
        am_pm = "AM";
    }

    if(hr >= 6 && hr <12){
        msg = "Good Morning!";
    }else if(hr >= 12 && hr < 16){
        msg = "Good Noon!"
    }else if(hr >= 16 && hr < 18){
        msg = "Good Afternoon!";
    }else if(hr >= 18 && hr < 24){
        msg = "Good Evening!";
    }else{
        msg = "Good Night!";
    }

    document.getElementById('clock_msg').innerHTML = msg;

    hr = hr > 12? hr-12:hr;
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let clock_time = hr+":"+min+":"+sec+" "+am_pm+"<br>"+current_time.toDateString();

    document.getElementById('clock').innerHTML = clock_time;
}

// calculator
let cal_input = document.getElementById('cal_input');
let expression = ''

function press_btn(val){
    console.log(val);
    expression += val;
    cal_input.value = expression;
}

function press_equal(){
    cal_input.value = eval(expression);
    expression = '';
}

function press_clr(){
    expression = '';
    cal_input.value = expression;
}
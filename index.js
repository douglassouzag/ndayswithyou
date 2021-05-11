(function () {
    const second = 1000,minute = second * 60,hour = minute * 60,day = hour * 24;
  
    let meetDay = "Jan 23, 2021 21:00:00";
    let proposalDay = "May 1, 2021 23:00:00";
    countDown = new Date(meetDay).getTime();
    countDown2 = new Date(proposalDay).getTime();
    x = setInterval(function() {    
        let now = new Date().getTime(),distance = now - countDown,distance2 = now - countDown2

        document.getElementById("days_meet").innerText = Math.floor(distance / (day)),
        document.getElementById("hours_meet").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes_meet").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds_meet").innerText = Math.floor((distance % (minute)) / second);

        document.getElementById("days_proposal").innerText = Math.floor(distance2 / (day)),
        document.getElementById("hours_proposal").innerText = Math.floor((distance2 % (day)) / (hour)),
        document.getElementById("minutes_proposal").innerText = Math.floor((distance2 % (hour)) / (minute)),
        document.getElementById("seconds_proposal").innerText = Math.floor((distance2 % (minute)) / second);

    }, 0)
    }());
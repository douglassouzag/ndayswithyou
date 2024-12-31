(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24,
          month = day * 30.44, // média de dias em um mês
          year = day * 365.25; // média de dias em um ano
  
    let meetDay = "Jan 23, 2021 21:00:00";
    let proposalDay = "May 1, 2021 23:00:00";

    let countDown = new Date(meetDay).getTime();
    let countDown2 = new Date(proposalDay).getTime();

    setInterval(function() {    
        let now = new Date().getTime(),
            distance = now - countDown,
            distance2 = now - countDown2;

        // Encontro
        document.getElementById("years_meet").innerText = Math.floor(distance / year);
        document.getElementById("months_meet").innerText = Math.floor((distance % year) / month);
        document.getElementById("days_meet").innerText = Math.floor((distance % month) / day);
        document.getElementById("hours_meet").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes_meet").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds_meet").innerText = Math.floor((distance % minute) / second);

        // Proposta
        document.getElementById("years_proposal").innerText = Math.floor(distance2 / year);
        document.getElementById("months_proposal").innerText = Math.floor((distance2 % year) / month);
        document.getElementById("days_proposal").innerText = Math.floor((distance2 % month) / day);
        document.getElementById("hours_proposal").innerText = Math.floor((distance2 % day) / hour);
        document.getElementById("minutes_proposal").innerText = Math.floor((distance2 % hour) / minute);
        document.getElementById("seconds_proposal").innerText = Math.floor((distance2 % minute) / second);

    }, 1000);
}());

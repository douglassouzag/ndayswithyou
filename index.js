(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24,
          month = day * 30.44, // média de dias em um mês
          year = day * 365.25; // média de dias em um ano
  
    let meetDay = "Jan 23, 2021 21:00:00";
    let proposalDay = "May 1, 2021 23:00:00";
    let engagementDay = "Dec 25, 2023 20:00:00"; // Dia do noivado
    let weddingDay = ""; // Dia do casamento (em branco por enquanto)

    let countDownMeet = new Date(meetDay).getTime();
    let countDownProposal = new Date(proposalDay).getTime();
    let countDownEngagement = new Date(engagementDay).getTime();
    let countDownWedding = weddingDay ? new Date(weddingDay).getTime() : null;

    setInterval(function () {    
        let now = new Date().getTime();

        function updateCountdown(countDown, prefix) {
            if (!countDown) {
                document.getElementById(`${prefix}_years`).innerText = "--";
                document.getElementById(`${prefix}_months`).innerText = "--";
                document.getElementById(`${prefix}_days`).innerText = "--";
                document.getElementById(`${prefix}_hours`).innerText = "--";
                document.getElementById(`${prefix}_minutes`).innerText = "--";
                document.getElementById(`${prefix}_seconds`).innerText = "--";
                return;
            }

            let distance = now - countDown;

            document.getElementById(`${prefix}_years`).innerText = Math.floor(distance / year);
            document.getElementById(`${prefix}_months`).innerText = Math.floor((distance % year) / month);
            document.getElementById(`${prefix}_days`).innerText = Math.floor((distance % month) / day);
            document.getElementById(`${prefix}_hours`).innerText = Math.floor((distance % day) / hour);
            document.getElementById(`${prefix}_minutes`).innerText = Math.floor((distance % hour) / minute);
            document.getElementById(`${prefix}_seconds`).innerText = Math.floor((distance % minute) / second);
        }

        // Atualiza contagens regressivas
        updateCountdown(countDownMeet, "meet");
        updateCountdown(countDownProposal, "proposal");
        updateCountdown(countDownEngagement, "engagement");
        updateCountdown(countDownWedding, "wedding");

    }, 1000);
}());

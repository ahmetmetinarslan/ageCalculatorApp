const btn = document.getElementById("btn"),
      yearErrMsg = document.getElementById("yearErrMsg"),
      monthErrMsg = document.getElementById("monthErrMsg"),
      dayErrMsg = document.getElementById("dayErrMsg");

    btn.addEventListener("click", calcAge);
    btn.addEventListener("click", errMsg);


    function calcAge() {
        const   dayInput = document.getElementById("dayInput").value,
                monthInput = document.getElementById("monthInput").value,
                yearInput = document.getElementById("yearInput").value,
                bottomYear = document.getElementById("bottomYear"),
                bottomMonth = document.getElementById("bottomMonth"),
                bottomDay = document.getElementById("bottomDay");

        const dg = new Date(`${yearInput}-${monthInput}-${dayInput}`); 
        const today = new Date();

        const ageInMilliseconds = today - dg;
        const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);

        const years = Math.floor(ageInYears);
        const months = Math.floor((ageInYears - years) * 12);
        const days = Math.floor((ageInYears - years - (months / 12)) * 365);

        bottomYear.textContent = years;
        bottomMonth.textContent = months;
        bottomDay.textContent = days;
    }

    function errMsg() {
        if(dayInput.value == '') {
            dayErrMsg.innerHTML = "Gün Yazılmalı !";
        } 
        else {
            dayErrMsg.innerHTML = '';
        }

        if(monthInput.value === '') {
            monthErrMsg.innerHTML = "Ay Yazılmalı!";
        } else {
            monthErrMsg.innerHTML = '';
        }

        if(yearInput.value === '') {
            yearErrMsg.innerHTML = "Yıl Yazılmalı!";
        } else {
            yearErrMsg.innerHTML = '';
        }
    }


   

    

   
    
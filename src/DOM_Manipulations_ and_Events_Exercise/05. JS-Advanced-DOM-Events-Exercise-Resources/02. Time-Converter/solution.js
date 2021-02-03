function attachEventsListeners() {
    // days = 1;
    // hours = 24;
    // minutes = 1440;
    // seconds = 86400;


    const daysInput = document.getElementById('days');
    const daysButton = document.getElementById('daysBtn');

    const hoursInput = document.getElementById('hours');
    const hoursButton = document.getElementById('hoursBtn');

    const minutesInput = document.getElementById('minutes');
    const minutesButton = document.getElementById('minutesBtn');

    const secondsInput = document.getElementById('seconds');
    const secondsButton = document.getElementById('secondsBtn');

    daysButton.addEventListener('click', () => {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    })

    hoursButton.addEventListener('click', () => {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 3600;
    })

    minutesButton.addEventListener('click', () => {
        let minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 1440;
        secondsInput.value = minutes * 60;
    })

    secondsButton.addEventListener('click', () => {
        let seconds = secondsInput.value;
        hoursInput.value = seconds / 3600;
        minutesInput.value = seconds / 60;
        daysInput.value = seconds / 86400;
    })
}
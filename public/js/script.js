function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('clock').textContent = timeString;

    let timeOfDayClass = '';
    if (hours >= 5 && hours < 12) {
        timeOfDayClass = 'morning';
    } else if (hours >= 12 && hours < 17) {
        timeOfDayClass = 'afternoon';
    } else if (hours >= 17 && hours < 21) {
        timeOfDayClass = 'evening';
    } else {
        timeOfDayClass = 'night';
    }

    // Apply class to body and clock container
    document.body.className = timeOfDayClass;
    document.querySelector('.clock-container').className = `clock-container ${timeOfDayClass}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

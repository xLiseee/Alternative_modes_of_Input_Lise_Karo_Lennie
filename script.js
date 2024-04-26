const knop = document.getElementById('knop');
const digitalClock = document.getElementById('digitalClock');
const instruction = document.getElementById('instruction');

let hoek = 0;
let interactionTimer;

function rotateButton(e) {
    instruction.style.display = 'none'; // Hide instruction when interacting with the button

    const rotation = e.movementX; // Het aantal graden gedraaid
    hoek += rotation;
    knop.style.transform = `translate(-50%, -50%) rotate(${hoek}deg)`;
    const hours = Math.floor((hoek + 360) / 30) % 24; // Elke 30 graden is gelijk aan 1 uur (24 uur in totaal)
    const minutes = Math.floor(((hoek + 360) % 30) * 2); // Elke 15 graden is gelijk aan 1 minuut (60 minuten in totaal)
    digitalClock.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    // Dynamically adjust gradient background position based on rotation
    const gradientPosition = hoek / 360 * 100;
    knop.style.backgroundPositionX = `${gradientPosition}%`;

    // Start blinking effect on hours
    digitalClock.classList.add('blink');

    // Reset interaction timer
    clearTimeout(interactionTimer);
    interactionTimer = setTimeout(() => {
        digitalClock.classList.remove('blink');
    }, 8000);
}

knop.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', rotateButton);
});

document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', rotateButton);
});







